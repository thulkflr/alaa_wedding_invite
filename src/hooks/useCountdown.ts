"use client";

import { useEffect, useState } from "react";

export type CountdownValue = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  message: string;
};

const calculate = (isoDate: string): CountdownValue => {
  const target = new Date(isoDate).getTime();
  const now = Date.now();
  const diff = target - now;
  const weddingDay = new Date(isoDate);
  const localStart = new Date(weddingDay.getFullYear(), weddingDay.getMonth(), weddingDay.getDate()).getTime();
  const localEnd = localStart + 24 * 60 * 60 * 1000;

  let message = "ما هي إلا أيام حتى تكتمل فرحتنا بوجودكم";
  if (now >= localStart && now < localEnd) message = "اليوم موعدنا مع الفرح";
  else if (now >= localEnd) message = "شكرًا لأنكم كنتم جزءًا من فرحتنا";
  else if (localStart - now <= 24 * 60 * 60 * 1000) message = "غدًا تكتمل فرحتنا بوجودكم";

  const safe = Math.max(0, diff);
  return {
    days: Math.floor(safe / 86_400_000),
    hours: Math.floor((safe / 3_600_000) % 24),
    minutes: Math.floor((safe / 60_000) % 60),
    seconds: Math.floor((safe / 1000) % 60),
    message,
  };
};

export function useCountdown(isoDate: string) {
  const [value, setValue] = useState<CountdownValue>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    message: "ما هي إلا أيام حتى تكتمل فرحتنا بوجودكم",
  });
  useEffect(() => {
    const tick = () => setValue(calculate(isoDate));
    const firstTick = window.setTimeout(tick, 0);
    const timer = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(firstTick);
      window.clearInterval(timer);
    };
  }, [isoDate]);
  return value;
}
