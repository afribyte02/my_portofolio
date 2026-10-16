"use client";
import { useState } from "react";
import { budgets } from "@/lib/data";

const field = "w-full rounded-md bg-[#2f2e2e] px-3 py-3 text-[16px] lg:py-2.5 lg:text-[11px] text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-brand";
const label = "mb-1.5 block text-xs lg:text-[9px] text-white/60";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("ok");
      setMsg("Thanks! Your message has been sent.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative mt-14 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label className={label} htmlFor="name">Name</label>
          <input id="name" name="name" required maxLength={100} placeholder="Your Name" className={field} autoComplete="name" /></div>
        <div><label className={label} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required maxLength={200} placeholder="Your@email.com" className={field} autoComplete="email" /></div>
      </div>
      <div><label className={label} htmlFor="budget">Budget</label>
        <select id="budget" name="budget" required defaultValue="" className={field}>
          <option value="" disabled>Select...</option>
          {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
        </select></div>
      <div><label className={label} htmlFor="message">Message</label>
        <textarea id="message" name="message" required maxLength={3000} rows={4} placeholder="Message" className={`${field} resize-y`} /></div>
      {/* honeypot: hidden from humans, bots fill it */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
      <button disabled={status === "sending"} className="w-full rounded-md bg-brand py-3 text-[15px] font-semibold lg:py-2.5 lg:text-[11px] text-white transition hover:brightness-110 disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
      {status !== "idle" && status !== "sending" && (
        <p role="status" className={`text-[14px] ${status === "ok" ? "text-lime" : "text-red-400"}`}>{msg}</p>
      )}
    </form>
  );
}
