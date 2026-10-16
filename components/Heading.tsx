import type { Bi } from "@/lib/data";
import { L } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Heading({ a, b, className = "" }: { a: Bi; b: Bi; className?: string }) {
  return (
    <Reveal as="h2" className={`font-extrabold uppercase leading-[0.95] tracking-tight text-[44px] sm:text-[56px] ${className}`}>
      <span className="block text-white"><L v={a} /></span>
      <span className="block text-dim"><L v={b} /></span>
    </Reveal>
  );
}
