"use client";

import { motion } from "framer-motion";
import type { InvitationConfig } from "@/config/invitation";
import { Ornament } from "./ui/Ornament";

export function FormalInvitation({ config }: { config: InvitationConfig }) {
  return (
    <section id="invitation" className="scene formalScene paperScene" aria-labelledby="formal-title" data-scene>
      <motion.div className="formalCard" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: 1 }}>
        <span className="miniBasmala">بسم الله الرحمن الرحيم</span>
        <p id="formal-title">يتشرف</p>
        <p>أبناء المرحوم الحاج</p>
        <strong>{config.groomFamily}</strong>
        <Ornament className="ornament small" />
        <p>{config.formalInvitation.replace("يتشرف أبناء المرحوم الحاج ", "")}</p>
        <p>بمناسبة زفاف ابنهم</p>
        <h2>{config.groom}</h2>
        <span className="nameJoin">❈</span>
        <p>على كريمة السيد</p>
        <strong>{config.brideFamily}</strong>
        <h2>{config.bride}</h2>
      </motion.div>
      <motion.div className="coupleMoment" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .55 }} transition={{ duration: 1.2 }}>
        {config.showMonogram && config.monogram && <div className="monogram" aria-label={`رمز ${config.groom} و${config.bride}`}>{config.monogram}</div>}
        <div className="coupleNames"><span>{config.groom}</span><i>❈</i><span>{config.bride}</span></div>
        <p>وجمع بينهما بالمودة والرحمة</p>
      </motion.div>
    </section>
  );
}
