"use client";
import { Download } from "lucide-react";
import { contact } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { ui } from "@/lib/ui";

/** Downloads the CV in the language currently selected on the site. */
export function CvButton({ className }: { className: string }) {
  const { lang } = useLang();
  return (
    <a href={contact.cvUrl[lang]} download={`CV-Hydriss-Mangala-${lang.toUpperCase()}.pdf`} className={className}>
      <Download size={14} />
      {ui.contact.cv[lang]}
    </a>
  );
}
