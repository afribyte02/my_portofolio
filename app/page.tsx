import { ArrowUpRight, ArrowRight, Layers, LayoutTemplate, Mail, MessageCircle } from "lucide-react";
import { profile, stats, skills, projects, experience, tools, featured, contact } from "@/lib/data";
import { ProfileCard } from "@/components/ProfileCard";
import { TopNav } from "@/components/TopNav";
import { Heading } from "@/components/Heading";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { CvButton } from "@/components/CvButton";
import { L } from "@/lib/i18n";
import { ui } from "@/lib/ui";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const skillIcons = { layers: Layers, layout: LayoutTemplate };
const stagger = (i: number) => Math.min(i, 5) * 90;
const pill = "inline-flex items-center gap-2 rounded-full bg-card px-4 py-2.5 text-[14px] font-medium text-white/90 transition duration-300 hover:-translate-y-0.5 hover:bg-[#222] hover:text-brand lg:px-3 lg:py-2 lg:text-[11px]";

export default function Page() {
  return (
    <>
      <TopNav />
      <main className="mx-auto grid max-w-[775px] gap-10 px-5 pb-24 pt-24 lg:grid-cols-[234px_1fr] lg:gap-[68px] lg:px-0 lg:pt-[110px]">
        <ProfileCard />

        <div className="flex min-w-0 flex-col gap-28">
          <section id="home">
            <Reveal as="h2" className="text-[44px] font-extrabold uppercase leading-[0.95] tracking-tight sm:text-[56px] lg:text-[64px]">
              <span className="block text-white">{profile.title[0]}</span>
              <span className="block text-dim">{profile.title[1]}</span>
            </Reveal>
            <Reveal as="p" delay={80} className="mt-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-brand lg:text-[11px]">{profile.subtitle}</Reveal>
            <Reveal as="p" delay={160} className="mt-6 max-w-[420px] text-[15px] leading-[1.5] lg:max-w-[400px] lg:text-[12px] lg:leading-[1.5] text-white/60"><L v={profile.bio} /></Reveal>
            <dl className="mt-14 flex flex-wrap gap-x-7 gap-y-6">
              {stats.map((s, i) => (
                <Reveal key={s.value} delay={200 + stagger(i)}>
                  <dt className="text-[44px] font-bold leading-none tracking-tight"><CountUp value={s.value} /></dt>
                  <dd className="mt-1 max-w-[90px] text-xs lg:text-[10px] leading-tight text-white/60"><L v={s.label} /></dd>
                </Reveal>
              ))}
            </dl>
            <div className="mt-14 grid gap-4 sm:grid-cols-[204px_249px]">
              {skills.map((s, i) => {
                const I = skillIcons[s.icon];
                const brand = s.variant === "brand";
                return (
                  <Reveal key={s.variant} delay={stagger(i)}>
                    <div className={`group flex h-[230px] flex-col justify-between rounded-lg p-3.5 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(242,107,56,0.55)] ${brand ? "bg-brand text-white" : "bg-lime text-black"}`}>
                      <I size={22} className="transition duration-500 group-hover:rotate-12 group-hover:scale-110" />
                      <div className="flex items-end justify-between gap-2">
                        <p className="text-[17px] font-semibold uppercase lg:text-[13px] leading-tight"><L v={s.text} /></p>
                        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded border transition duration-300 group-hover:translate-x-1 ${brand ? "border-white" : "border-black"}`}><ArrowRight size={13} /></span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <section id="projects">
            <Heading a={ui.heading.projects.a} b={ui.heading.projects.b} />
            <ul className="mt-14 space-y-6">
              {projects.map((p, i) => (
                <Reveal as="li" key={p.name} delay={stagger(i)}>
                  <a href={p.href} {...ext} className="group flex items-center gap-4">
                    <span className={`flex h-[92px] w-[88px] shrink-0 items-center justify-center overflow-hidden rounded-md transition duration-500 group-hover:shadow-[0_12px_30px_-10px_rgba(242,107,56,0.6)] ${p.pad ? "p-2" : ""}`} style={{ background: p.bg }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.logo} alt={`${p.name} logo`} className={`transition-transform duration-500 ${p.pad ? "max-h-full max-w-full object-contain" : `h-full w-full object-cover ${p.crop ? "scale-[1.2] group-hover:scale-[1.32]" : "group-hover:scale-110"}`}`} />
                    </span>
                    <span className="flex-1"><span className="block text-[19px] font-semibold lg:text-[17px]">{p.name}</span><span className="text-[13px] text-white/50 lg:text-[11px]"><L v={p.desc} /></span></span>
                    <ArrowUpRight size={14} className="mr-4 self-start text-brand transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </Reveal>
              ))}
            </ul>
          </section>

          <section id="experience">
            <Heading a={ui.heading.experience.a} b={ui.heading.experience.b} />
            <ul className="mt-14 space-y-8">
              {experience.map((e, i) => (
                <Reveal as="li" key={e.period.en} delay={stagger(i)} className="relative pl-3.5 pr-10">
                  <h3 className="text-[19px] lg:text-[17px] font-semibold">{e.company}</h3>
                  <p className="mt-0.5 text-[13px] font-medium text-brand lg:text-[11px]"><L v={e.role} /></p>
                  <p className="mt-2 max-w-[340px] lg:max-w-[290px] text-[13px] lg:text-[11px] leading-[1.5] text-white/50"><L v={e.desc} /></p>
                  <p className="mt-3 text-[13px] lg:text-[11px] text-white/50"><L v={e.period} /></p>
                  <ArrowUpRight size={14} className="absolute right-4 top-1 text-brand" />
                </Reveal>
              ))}
            </ul>
          </section>

          <section id="tools">
            <Heading a={ui.heading.tools.a} b={ui.heading.tools.b} />
            <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 pl-3.5">
              {tools.map((t, i) => (
                <Reveal as="li" key={t.name} delay={stagger(i % 2) + Math.floor(i / 2) * 40}>
                  <a href={t.href} {...ext} className="group flex items-center gap-3">
                    <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg bg-white p-2 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_24px_-8px_rgba(255,255,255,0.35)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.logo} alt="" className="h-full w-full object-contain transition duration-300 group-hover:scale-110" />
                    </span>
                    <span><span className="block text-[15px] font-semibold leading-tight">{t.name}</span><span className="text-[13px] lg:text-[11px] text-white/50"><L v={t.desc} /></span></span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </section>

          <section id="featured">
            <Heading a={ui.heading.featured.a} b={ui.heading.featured.b} />
            <ul className="mt-14 space-y-5">
              {featured.map((p, i) => (
                <Reveal as="li" key={p.name} delay={stagger(i)}>
                  <a href={p.href} {...ext} className="group block overflow-hidden rounded-lg bg-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(242,107,56,0.5)]">
                    <div className="flex h-[150px] items-center justify-center overflow-hidden" style={{ background: p.bg }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image || p.logo}
                        alt={`${p.name}`}
                        className={`transition-transform duration-700 group-hover:scale-105 ${p.image ? "h-full w-full object-cover" : "max-h-[84px] max-w-[70%] object-contain"}`}
                      />
                    </div>
                    <div className="relative p-3.5 pr-9">
                      <h3 className="text-[19px] font-semibold leading-tight lg:text-[17px]">{p.name}</h3>
                      <p className="mt-2 text-[13px] leading-[1.5] text-white/50 lg:text-[11px]"><L v={p.desc} /></p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-white/10 px-2.5 py-1 text-[12px] text-white/70 lg:text-[10px]">{tag}</span>
                        ))}
                      </div>
                      <ArrowUpRight size={14} className="absolute right-3 top-3.5 text-brand transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </a>
                </Reveal>
              ))}
            </ul>
          </section>

          <section id="contact">
            <Heading a={ui.heading.contact.a} b={ui.heading.contact.b} />
            <Reveal delay={100} className="mt-8 flex flex-wrap gap-2.5">
              <a href={`mailto:${contact.email}`} className={pill}><Mail size={14} />{contact.email}</a>
              <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`} {...ext} className={pill}><MessageCircle size={14} />WhatsApp {contact.whatsapp}</a>
              <CvButton className={`${pill} !bg-brand !text-white hover:brightness-110`} />
            </Reveal>
            <Reveal delay={160}>
              <ContactForm />
            </Reveal>
          </section>
        </div>
      </main>
    </>
  );
}
