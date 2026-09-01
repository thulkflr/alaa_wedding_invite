"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Ornament } from "./ui/Ornament";

type Props = { onComplete: () => void; onSkip: () => void };

export function EnvelopeIntro({ onComplete, onSkip }: Props) {
  const root = useRef<HTMLElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [opening, setOpening] = useState(false);
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    const readStorage = window.setTimeout(() => {
      setVisited(localStorage.getItem("invitation-opened") === "true");
    }, 0);
    return () => {
      window.clearTimeout(readStorage);
      timeline.current?.kill();
    };
  }, []);

  const openEnvelope = () => {
    if (opening || !root.current) return;
    setOpening(true);
    localStorage.setItem("invitation-opened", "true");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      window.setTimeout(onComplete, 350);
      return;
    }
    const ctx = gsap.context(() => {
      timeline.current = gsap.timeline({ defaults: { ease: "power3.inOut" }, onComplete })
        .to("[data-envelope]", { y: -6, rotateZ: -0.7, duration: 0.35 })
        .to("[data-seal]", { scale: 1.22, rotate: 12, duration: 0.18 })
        .to("[data-seal]", { scale: 0, opacity: 0, rotate: -32, duration: 0.38, ease: "back.in(2)" })
        .to("[data-flap]", { rotateX: -178, duration: 0.9 }, "-=.12")
        .to("[data-card]", { y: "-68%", duration: 0.95 }, "-=.35")
        .to("[data-envelope]", { scale: 1.08, duration: 0.65 }, "-=.65")
        .to(root.current, { opacity: 0, duration: 0.6 }, "+=.15");
    }, root);
    timeline.current?.eventCallback("onComplete", () => { ctx.revert(); onComplete(); });
  };

  return (
    <section ref={root} id="intro" className="scene introScene" aria-labelledby="intro-title" data-scene>
      <div className="ambientGlow" aria-hidden="true" />
      <div className="introCopy">
        <span className="eyebrow">بدايةٌ على مودة</span>
        <h1 id="intro-title">لديكم دعوة خاصة</h1>
        <Ornament className="ornament" />
      </div>
      <button className="envelopeButton" onClick={openEnvelope} disabled={opening} aria-label="فتح ظرف الدعوة">
        <span className="envelope" data-envelope aria-hidden="true">
          <span className="envelopeCard" data-card><span>بِسْمِ الله</span><i>❈</i></span>
          <span className="envelopeBack" />
          <span className="envelopeFold left" />
          <span className="envelopeFold right" />
          <span className="envelopeFold bottom" />
          <span className="envelopeFlap" data-flap />
          <span className="waxSeal" data-seal><b>❈</b></span>
        </span>
        <span className="openPrompt">{opening ? "تُفتح الدعوة…" : "اضغطوا لفتح الدعوة"}</span>
      </button>
      <button className="textButton introSkip" onClick={onSkip}>
        {visited ? "مرحبًا بعودتكم — عرض التفاصيل مباشرة" : "عرض تفاصيل الدعوة مباشرة"}
      </button>
      <span className="introFoot">دعوة عامة لكل من نحب</span>
    </section>
  );
}
