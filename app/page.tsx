import { ArrowUpRight, ArrowRight, Layers, LayoutTemplate } from "lucide-react";
import { profile, stats, skills, projects, experience, tools, posts } from "@/lib/data";
import { ProfileCard } from "@/components/ProfileCard";
import { TopNav } from "@/components/TopNav";
import { Heading } from "@/components/Heading";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const skillIcons = { layers: Layers, layout: LayoutTemplate };
const stagger = (i: number) => Math.min(i, 5) * 90;

export default function Page() {
  return (
    <>
      <TopNav />
      <main className="mx-auto grid max-w-[775px] gap-10 px-5 pb-24 pt-24 lg:grid-cols-[234px_1fr] lg:gap-[68px] lg:px-0 lg:pt-[110px]">
        <ProfileCard />

        <div className="flex min-w-0 flex-col gap-28">
          <section id="home">
            <Reveal as="h2" className="text-[56px] font-extrabold uppercase leading-[0.95] tracking-tight sm:text-[72px]">
              <span className="block text-white">{profile.title[0]}</span>
              <span className="block text-dim">{profile.title[1]}</span>
            </Reveal>
            <Reveal as="p" delay={120} className="mt-8 max-w-[360px] text-[15px] leading-[1.45] lg:max-w-[310px] lg:text-[13px] lg:leading-[1.4] text-white/60">{profile.bio}</Reveal>
            <dl className="mt-14 flex flex-wrap gap-x-7 gap-y-6">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={200 + stagger(i)}>
                  <dt className="text-[44px] font-bold leading-none tracking-tight"><CountUp value={s.value} /></dt>
                  <dd className="mt-1 max-w-[80px] text-xs lg:text-[10px] leading-tight text-white/60">{s.label}</dd>
                </Reveal>
              ))}
            </dl>
            <div className="mt-14 grid gap-4 sm:grid-cols-[204px_249px]">
              {skills.map((s, i) => {
                const I = skillIcons[s.icon];
                const brand = s.variant === "brand";
                return (
                  <Reveal key={s.text} delay={stagger(i)}>
                    <div className={`group flex h-[230px] flex-col justify-between rounded-lg p-3.5 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(242,107,56,0.55)] ${brand ? "bg-brand text-white" : "bg-lime text-black"}`}>
                      <I size={22} className="transition duration-500 group-hover:rotate-12 group-hover:scale-110" />
                      <div className="flex items-end justify-between gap-2">
                        <p className="text-[17px] font-semibold uppercase lg:text-[15px] leading-tight">{s.text}</p>
                        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded border transition duration-300 group-hover:translate-x-1 ${brand ? "border-white" : "border-black"}`}><ArrowRight size={13} /></span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <section id="projects">
            <Heading a="RECENT" b="PROJECTS" />
            <ul className="mt-14 space-y-6">
              {projects.map((p, i) => {
                const inner = (
                  <>
                    <span className={`flex h-[92px] w-[88px] shrink-0 items-center justify-center overflow-hidden rounded-md transition duration-500 group-hover:shadow-[0_12px_30px_-10px_rgba(242,107,56,0.6)] ${p.pad ? "p-2" : ""}`} style={{ background: p.bg }} aria-hidden={!p.logo}>
                      {p.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={p.logo} alt={`${p.name} logo`} className={`transition-transform duration-500 ${p.pad ? "max-h-full max-w-full object-contain" : `h-full w-full object-cover ${p.crop ? "scale-[1.2] group-hover:scale-[1.32]" : "group-hover:scale-110"}`}`} />
                      ) : (
                        <span className="text-[34px] font-extrabold text-white">{p.name[0]}</span>
                      )}
                    </span>
                    <span className="flex-1"><span className="block text-[19px] font-semibold lg:text-[17px]">{p.name}</span><span className="text-[13px] text-white/50 lg:text-[11px]">{p.desc}</span></span>
                    {p.href && <ArrowUpRight size={14} className="mr-4 self-start text-brand transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
                  </>
                );
                return (
                  <Reveal as="li" key={p.name} delay={stagger(i)}>
                    {p.href ? (
                      <a href={p.href} {...ext} className="group flex items-center gap-4">{inner}</a>
                    ) : (
                      <div className="group flex items-center gap-4">{inner}</div>
                    )}
                  </Reveal>
                );
              })}
            </ul>
          </section>

          <section id="experience">
            <Heading a="6 YEARS OF" b="EXPERIENCE" />
            <ul className="mt-14 space-y-8">
              {experience.map((e, i) => (
                <Reveal as="li" key={e.company} delay={stagger(i)} className="relative pl-3.5 pr-10">
                  <h3 className="text-[19px] lg:text-[17px] font-semibold">{e.company}</h3>
                  <p className="mt-2 max-w-[340px] lg:max-w-[290px] text-[13px] lg:text-[11px] leading-[1.5] text-white/50">{e.desc}</p>
                  <p className="mt-3 text-[13px] lg:text-[11px] text-white/50">{e.period}</p>
                  <ArrowUpRight size={14} className="absolute right-4 top-1 text-brand" />
                </Reveal>
              ))}
            </ul>
          </section>

          <section id="tools">
            <Heading a="PREMIUM" b="TOOLS" />
            <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 pl-3.5">
              {tools.map((t, i) => (
                <Reveal as="li" key={t.name} delay={stagger(i % 2) + Math.floor(i / 2) * 40}>
                  <a href={t.href} {...ext} className="group flex items-center gap-3">
                    <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg bg-white p-2 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_24px_-8px_rgba(255,255,255,0.35)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.logo} alt="" className="h-full w-full object-contain transition duration-300 group-hover:scale-110" />
                    </span>
                    <span><span className="block text-[15px] font-semibold leading-tight">{t.name}</span><span className="text-[13px] lg:text-[11px] text-white/50">{t.desc}</span></span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </section>

          <section id="blog">
            <Heading a="DESIGN" b="THOUGHTS" />
            <ul className="mt-14 space-y-4">
              {posts.map((p, i) => (
                <Reveal as="li" key={p.title} delay={stagger(i)}>
                  <a href={p.href} className="group relative block rounded-lg bg-card p-3.5 pr-8 transition duration-300 hover:-translate-y-1 hover:bg-[#222]">
                    <h3 className="max-w-[300px] text-[19px] lg:text-[17px] font-semibold leading-tight">{p.title}</h3>
                    <p className="mt-2 text-[13px] lg:text-[11px] leading-[1.5] text-white/50">{p.excerpt}</p>
                    <div className="mt-3 flex justify-between text-[13px] lg:text-[11px] text-white/50"><span>{p.date}</span><span>{p.read}</span></div>
                    <ArrowUpRight size={14} className="absolute right-3 top-3 text-brand transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </Reveal>
              ))}
            </ul>
          </section>

          <section id="contact">
            <Heading a="LET'S WORK" b="TOGETHER" />
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </section>
        </div>
      </main>
    </>
  );
}
