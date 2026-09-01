"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { InvitationConfig } from "@/config/invitation";
import { withBasePath } from "@/lib/assets";

export function PhotoMemories({ config }: { config: InvitationConfig }) {
  if (!config.showGallery || config.images.length === 0) return null;
  return (
    <div className="memories" aria-labelledby="memories-title">
      <span className="eyebrow">من الذاكرة</span>
      <h2 id="memories-title">لحظات سبقت أجمل البدايات</h2>
      <div className="album">
        {config.images.slice(0, 5).map((image, index) => (
          <motion.figure key={image.src} initial={{ opacity: 0, y: 24, rotate: index % 2 ? 1.5 : -1.5 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .7, delay: index * .08 }}>
            <Image src={withBasePath(image.src)} alt={image.alt} width={640} height={800} sizes="(max-width: 700px) 82vw, 28vw" loading="lazy" />
            <figcaption>❈ بداية جميلة ❈</figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
