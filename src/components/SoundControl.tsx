"use client";

import { useEffect, useRef, useState } from "react";
import { withBasePath } from "@/lib/assets";
import { MuteIcon, SoundIcon } from "./ui/Icons";

export function SoundControl({ src, compact = false }: { src?: string; compact?: boolean }) {
  const audio = useRef<HTMLAudioElement>(null);
  const frame = useRef<number | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => { if (frame.current) cancelAnimationFrame(frame.current); };
  }, []);

  useEffect(() => {
    if (!audio.current) return;
    const element = audio.current;
    const start = performance.now();
    const from = element.volume;
    const to = playing ? .42 : 0;
    if (playing) void element.play().catch(() => setPlaying(false));
    const fade = (now: number) => {
      const progress = Math.min(1, (now - start) / 800);
      element.volume = from + (to - from) * progress;
      if (progress < 1) frame.current = requestAnimationFrame(fade);
      else if (!playing) element.pause();
    };
    frame.current = requestAnimationFrame(fade);
    sessionStorage.setItem("invitation-sound", playing ? "on" : "off");
    return () => { if (frame.current) cancelAnimationFrame(frame.current); };
  }, [playing]);

  if (!src) return null;
  return (
    <>
      <audio ref={audio} src={withBasePath(src)} loop preload="none" />
      <button className={compact ? "quickMenuItem" : "soundPill"} onClick={() => setPlaying((value) => !value)} aria-label={playing ? "إيقاف الصوت" : "تشغيل الصوت"}>
        {playing ? <MuteIcon /> : <SoundIcon />}<span>{playing ? "إيقاف الصوت" : "تشغيل الصوت"}</span>
      </button>
    </>
  );
}
