import { NextResponse } from "next/server";
import { z } from "zod";
import { budgets, budgetIds } from "@/lib/data";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  budget: z.enum(budgetIds),
  message: z.string().trim().min(1).max(3000),
  website: z.string().max(0).optional(), // honeypot
});

// Best-effort per-instance rate limit (serverless instances are ephemeral; add Upstash/Vercel KV for strict limits).
const hits = new Map<string, number[]>();
const WINDOW = 10 * 60_000;
const MAX = 5;
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const err = (error: string, status: number) => NextResponse.json({ error }, { status });

export async function POST(req: Request) {
  // CSRF / cross-origin guard
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  let originHost = "";
  try { originHost = origin ? new URL(origin).host : ""; } catch {}
  if (!originHost || !host || originHost !== host) return err("Forbidden", 403);
  if (!req.headers.get("content-type")?.includes("application/json")) return err("Unsupported", 415);

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return err("Too many requests. Try again later.", 429);

  if (Number(req.headers.get("content-length") ?? 0) > 10_000) return err("Payload too large", 413);
  const raw = await req.text();
  if (raw.length > 10_000) return err("Payload too large", 413);
  let json: unknown;
  try { json = JSON.parse(raw); } catch { return err("Invalid JSON", 400); }

  // honeypot hit: pretend success so bots learn nothing
  if (typeof json === "object" && json && (json as { website?: unknown }).website) {
    return NextResponse.json({ ok: true });
  }
  const parsed = schema.safeParse(json);
  if (!parsed.success) return err("Please check the form fields.", 400);
  const { name, email, budget, message } = parsed.data;

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return err("Contact service not configured.", 503);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    signal: AbortSignal.timeout(8000),
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Portfolio contact from ${name.replace(/[\r\n]/g, " ")}`,
      html: `<p><b>${esc(name)}</b> (${esc(email)})</p><p>Budget: ${esc(budgets.find((b) => b.id === budget)?.label.en ?? budget)}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  }).catch(() => null);
  if (!res || !res.ok) return err("Could not send message.", 502);
  return NextResponse.json({ ok: true });
}
