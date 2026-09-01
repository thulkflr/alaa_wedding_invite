"use client";

import { motion } from "framer-motion";
import type { InvitationConfig } from "@/config/invitation";
import { PhotoMemories } from "./PhotoMemories";
import { Ornament } from "./ui/Ornament";

export function Finale({ config }: { config: InvitationConfig }) {
  return (
    <section id="finale" className="finaleScene paperScene" aria-label="ختام الدعوة" data-scene>
      <PhotoMemories config={config} />
      {config.showPersonalMessage && config.personalMessage && (
        <motion.div className="personalLetter" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .9 }}>
          <span className="eyebrow">كلمة محبة</span>
          <h2>إلى صديقي العزيز…</h2>
          <Ornament className="ornament" />
          <p>{config.personalMessage}</p>
          <strong>{config.messageAuthor}</strong>
        </motion.div>
      )}
      <div className="finalBlessing">
        <div className="blessingMark" aria-hidden="true">❈</div>
        <p>بارك الله لكما<br />وبارك عليكما<br />وجمع بينكما في خير</p>
        <Ornament className="ornament" />
        <h2>{config.groom} <i>×</i> {config.bride}</h2>
        <span>{config.writtenGregorianDate}</span>
        <small>صُنعت بمحبة،<br />لتبقى ذكرى لبداية جميلة.</small>
      </div>
    </section>
  );
}
