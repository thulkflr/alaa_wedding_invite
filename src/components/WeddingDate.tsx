"use client";

import { motion } from "framer-motion";
import type { InvitationConfig } from "@/config/invitation";
import { useCountdown } from "@/hooks/useCountdown";
import { Ornament } from "./ui/Ornament";
import { SceneContinue } from "./ui/SceneContinue";

export function WeddingDate({ config }: { config: InvitationConfig }) {
  const countdown = useCountdown(config.weddingDateISO);
  const date = new Date(config.weddingDateISO);
  const dayNumber = new Intl.DateTimeFormat("ar-JO", { day: "numeric", timeZone: "Asia/Amman" }).format(date);
  const monthYear = new Intl.DateTimeFormat("ar-JO", { month: "long", year: "numeric", timeZone: "Asia/Amman" }).format(date);
  const units = [
    [countdown.days, "يوم"],
    [countdown.hours, "ساعة"],
    [countdown.minutes, "دقيقة"],
    [countdown.seconds, "ثانية"],
  ] as const;

  return (
    <section id="date" className="scene dateScene" aria-labelledby="date-title" data-scene>
      <motion.div className="dateContent" initial={{ opacity: 0, scale: .97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .9 }}>
        <span className="eyebrow">موعدنا</span>
        <h2 id="date-title">نلتقي على موعدٍ مع الفرح</h2>
        <Ornament className="ornament" />
        <div className="calendarDate">
          <span>{config.arabicDay}</span>
          <strong>{dayNumber}</strong>
          <span>{monthYear}</span>
          {config.hijriDate && <small>{config.hijriDate}</small>}
        </div>
        <div className="countdown" role="timer" aria-live="off" aria-label={`الوقت المتبقي: ${countdown.message}`} suppressHydrationWarning>
          {units.map(([value, label]) => (
            <div key={label}><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span></div>
          ))}
        </div>
        <p className="countdownMessage" aria-live="polite">{countdown.message}</p>
        <SceneContinue targetId="venue" label="تفاصيل الحفل" />
      </motion.div>
    </section>
  );
}
