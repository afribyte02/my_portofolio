import { Flame, Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { profile } from "@/lib/data";
import { Avatar } from "./Avatar";

const icons = { linkedin: Linkedin, facebook: Facebook, instagram: Instagram, github: Github };

// Mobile (< lg): wide card, wide landscape photo, bigger text. Desktop (lg+): original 234px card.
export function ProfileCard() {
  return (
    <aside className="lg:sticky lg:top-[90px] lg:self-start">
      <div className="relative mx-auto w-full overflow-hidden rounded-[14px] bg-white px-5 pb-7 pt-5 text-center text-black lg:w-[234px] lg:rounded-[10px] lg:px-0 lg:pb-5">
        <svg className="pointer-events-none absolute -left-[12px] -top-[10px] h-[70px] w-[130px] lg:h-[70px]" viewBox="0 0 130 70" fill="none" aria-hidden>
          <path d="M0 8 C40 40 100 40 128 -4" stroke="#f98a1d" strokeWidth="2" strokeDasharray="6 5" />
        </svg>
        <div className="relative mx-auto aspect-[1.25/1] w-full overflow-hidden rounded-[14px] lg:aspect-auto lg:h-[194px] lg:w-[164px] lg:rounded-[10px]">
          <Avatar />
          <span className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#f98a1d] text-white lg:hidden">
            <Flame size={16} fill="currentColor" />
          </span>
        </div>
        <h1 className="mt-4 px-3 text-[34px] font-bold leading-[1.1] tracking-tight lg:mt-3 lg:text-[24px]">{profile.name}</h1>
        <div className="relative my-1 hidden h-[60px] lg:block">
          <span className="absolute left-[66px] top-[4px] flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#f98a1d] text-white">
            <Flame size={13} fill="currentColor" />
          </span>
          <svg className="absolute -left-1 top-[18px] h-[45px] w-[80px]" viewBox="0 0 80 45" fill="none" aria-hidden>
            <path d="M66 0 C60 30 30 40 2 42" stroke="#f98a1d" strokeWidth="2" strokeDasharray="6 5" />
          </svg>
        </div>
        <p className="mx-auto mt-3 max-w-[380px] text-[20px] font-semibold leading-[1.2] text-[#444] lg:mt-0 lg:max-w-[200px] lg:text-[12.5px] lg:leading-[1.15]">{profile.tagline}</p>
        <div className="mt-6 flex justify-center gap-7 text-brand lg:mt-5 lg:gap-4">
          {profile.socials.map((s) => {
            const I = icons[s.icon];
            return (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="transition hover:scale-110">
                <I className="h-7 w-7 lg:h-[17px] lg:w-[17px]" />
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
