"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  open: boolean;
  onOpen: () => void;
  onContinue: () => void;
};

export function ArabicGate({ open, onOpen, onContinue }: Props) {
  const root = useRef<HTMLElement>(null);
  const advanceTimer = useRef<number | null>(null);

  useEffect(() => {
    const section = root.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= .45) onOpen();
    }, { threshold: [.45] });
    observer.observe(section);
    return () => observer.disconnect();
  }, [onOpen]);

  useEffect(() => {
    if (!open || !root.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const advance = () => {
      advanceTimer.current = window.setTimeout(onContinue, reduce ? 1800 : 3500);
    };
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.timeline({ onComplete: advance })
          .to("[data-gate-door]", { opacity: 0, duration: .35 })
          .to("[data-gate-copy]", { opacity: 1, pointerEvents: "auto", duration: .35 }, "<")
          .set("[data-gate-door]", { pointerEvents: "none" });
      }
      else {
        gsap.timeline({ defaults: { duration: 1.35, ease: "power3.inOut" }, onComplete: advance })
          .to("[data-left-door]", { rotateY: -108 }, 0)
          .to("[data-right-door]", { rotateY: 108 }, 0)
          .to("[data-gate-light]", { opacity: 1, scale: 1.12, duration: 1.5 }, .15)
          .fromTo("[data-gate-copy]", { opacity: 0, y: 18 }, { opacity: 1, y: 0, pointerEvents: "auto", duration: .8 }, .8)
          .set("[data-gate-door]", { pointerEvents: "none" });
      }
    }, root);
    return () => {
      if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
      ctx.revert();
    };
  }, [open, onContinue]);

  const continueNow = () => {
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    onContinue();
  };

  return (
    <section ref={root} id="gate" className="scene gateScene" aria-label="بوابة الدعوة العربية" data-scene>
      <div className="gateLight" data-gate-light aria-hidden="true" />
      <div className="gateArchitecture" aria-hidden="true">
        <div className="gateArch"><i /><i /><i /></div>
        <div className="gateDoor gateLeft" data-gate-door data-left-door><span className="doorPattern" /><b>❈</b></div>
        <div className="gateDoor gateRight" data-gate-door data-right-door><span className="doorPattern" /><b>❈</b></div>
      </div>
      <div className="gateCopy" data-gate-copy>
        <span>على بركة الله</span>
        <p>تُفتح أبواب الفرح</p>
        <button className="gateContinue" onClick={continueNow}>الدخول إلى الدعوة</button>
      </div>
    </section>
  );
}
