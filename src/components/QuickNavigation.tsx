"use client";

import { useEffect, useRef, useState } from "react";
import type { InvitationConfig } from "@/config/invitation";
import { ShareButton } from "./ShareButton";
import { SoundControl } from "./SoundControl";
import { CloseIcon, MenuIcon, ReplayIcon } from "./ui/Icons";

const links = [
  ["invitation", "تفاصيل الدعوة"],
  ["date", "التاريخ"],
  ["venue", "الموقع"],
] as const;

export function QuickNavigation({ config, onReplay }: { config: InvitationConfig; onReplay: () => void }) {
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    menu.current?.querySelector<HTMLElement>("button, a")?.focus();
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };
  return (
    <div className="quickNav">
      <button className="quickToggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="quick-menu" aria-label={open ? "إغلاق القائمة السريعة" : "فتح القائمة السريعة"}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      {open && (
        <div className="quickMenu" id="quick-menu" ref={menu}>
          <span>وصول سريع</span>
          {links.map(([id, label]) => <button className="quickMenuItem" key={id} onClick={() => go(id)}>{label}</button>)}
          <SoundControl src={config.audioSrc} compact />
          <ShareButton config={config} compact />
          <button className="quickMenuItem" onClick={() => { setOpen(false); onReplay(); }}><ReplayIcon /><span>إعادة التجربة</span></button>
        </div>
      )}
    </div>
  );
}
