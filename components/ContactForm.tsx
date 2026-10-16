"use client";
import { useState } from "react";
import { budgets } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/ui";

const field = "w-full rounded-md bg-[#2f2e2e] px-3 py-3 text-[16px] lg:py-2.5 lg:text-[11px] text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-brand";
const label = "mb-1.5 block text-xs lg:text-[9px] text-white/60";

export function ContactForm() {
  const { lang } = useLang();
  const t = ui.form;
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

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
      if (!res.ok) throw new Error("request failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative mt-8 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label className={label} htmlFor="name">{t.name[lang]}</label>
          <input id="name" name="name" required maxLength={100} placeholder={t.namePh[lang]} className={field} autoComplete="name" /></div>
        <div><label className={label} htmlFor="email">{t.email[lang]}</label>
          <input id="email" name="email" type="email" required maxLength={200} placeholder={t.emailPh[lang]} className={field} autoComplete="email" /></div>
      </div>
      <div><label className={label} htmlFor="budget">{t.budget[lang]}</label>
        <select id="budget" name="budget" required defaultValue="" className={field}>
          <option value="" disabled>{t.select[lang]}</option>
          {budgets.map((b) => <option key={b.id} value={b.id}>{b.label[lang]}</option>)}
        </select></div>
      <div><label className={label} htmlFor="message">{t.message[lang]}</label>
        <textarea id="message" name="message" required maxLength={3000} rows={4} placeholder={t.message[lang]} className={`${field} resize-y`} /></div>
      {/* honeypot: hidden from humans, bots fill it */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
      <button disabled={status === "sending"} className="w-full rounded-md bg-brand py-3 text-[15px] font-semibold lg:py-2.5 lg:text-[11px] text-white transition hover:brightness-110 disabled:opacity-60">
        {status === "sending" ? t.sending[lang] : t.submit[lang]}
      </button>
      {(status === "ok" || status === "error") && (
        <p role="status" className={`text-[14px] ${status === "ok" ? "text-lime" : "text-red-400"}`}>
          {status === "ok" ? t.ok[lang] : t.fail[lang]}
        </p>
      )}
    </form>
  );
}
