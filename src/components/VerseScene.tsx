"use client";

import { motion } from "framer-motion";
import { Ornament } from "./ui/Ornament";

export function VerseScene({ onDiscover }: { onDiscover: () => void }) {
  const reveal = { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.35 }, transition: { duration: 0.9 } };
  return (
    <section id="verse" className="scene verseScene paperScene" aria-labelledby="verse-title" data-scene>
      <div className="cornerOrnament cornerTop" aria-hidden="true" />
      <div className="verseContent">
        <motion.p {...reveal} className="basmala">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</motion.p>
        <Ornament className="ornament" />
        <motion.blockquote {...reveal} transition={{ duration: 1.1, delay: 0.16 }}>
          <p id="verse-title">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ</p>
          <cite>الروم: 21</cite>
        </motion.blockquote>
        <motion.div {...reveal} transition={{ duration: .8, delay: .4 }}>
          <p className="storyLine">ومن هنا… تبدأ حكاية جديدة</p>
          <button className="primaryButton" onClick={onDiscover}>اكتشفوا الدعوة</button>
        </motion.div>
      </div>
      <div className="cornerOrnament cornerBottom" aria-hidden="true" />
    </section>
  );
}
