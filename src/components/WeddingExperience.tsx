"use client";

import { useEffect, useState } from "react";
import type { InvitationConfig } from "@/config/invitation";
import { withBasePath } from "@/lib/assets";
import { ArabicGate } from "./ArabicGate";
import { EnvelopeIntro } from "./EnvelopeIntro";
import { Finale } from "./Finale";
import { FormalInvitation } from "./FormalInvitation";
import { ProgressIndicator } from "./ProgressIndicator";
import { QuickNavigation } from "./QuickNavigation";
import { VenueDetails } from "./VenueDetails";
import { VerseScene } from "./VerseScene";
import { WeddingDate } from "./WeddingDate";

export function WeddingExperience({ config }: { config: InvitationConfig }) {
  const [gateOpen, setGateOpen] = useState(false);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]"));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveScene(sections.indexOf(visible.target as HTMLElement));
    }, { threshold: [.35, .55, .75] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string, delay = 0) => window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), delay);
  const replay = () => {
    setGateOpen(false);
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main style={{
      "--ivory": config.colors.ivory,
      "--emerald": config.colors.emerald,
      "--gold": config.colors.gold,
      "--brown": config.colors.brown,
      "--night": config.colors.night,
      "--pattern-image": `url("${withBasePath("/pattern.svg")}")`,
    } as React.CSSProperties}>
      <a className="skipLink" href="#invitation">تجاوز المقدمة إلى تفاصيل الدعوة</a>
      <ProgressIndicator active={activeScene} />
      <QuickNavigation config={config} onReplay={replay} />
      <EnvelopeIntro onComplete={() => scrollTo("verse", 80)} onSkip={() => scrollTo("venue")} />
      <VerseScene onDiscover={() => { setGateOpen(true); scrollTo("gate", 80); }} />
      <ArabicGate open={gateOpen} />
      <FormalInvitation config={config} />
      <WeddingDate config={config} />
      <VenueDetails config={config} />
      <Finale config={config} />
    </main>
  );
}
