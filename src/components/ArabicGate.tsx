"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function ArabicGate({ open }: { open: boolean }) {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open || !root.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) gsap.to("[data-gate-door]", { opacity: 0, duration: .5 });
      else {
        gsap.timeline({ defaults: { duration: 1.35, ease: "power3.inOut" } })
          .to("[data-left-door]", { rotateY: -108 }, 0)
          .to("[data-right-door]", { rotateY: 108 }, 0)
          .to("[data-gate-light]", { opacity: 1, scale: 1.12, duration: 1.5 }, .15)
          .fromTo("[data-gate-copy]", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: .8 }, .8);
      }
    }, root);
    return () => ctx.revert();
  }, [open]);

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
      </div>
    </section>
  );
}
