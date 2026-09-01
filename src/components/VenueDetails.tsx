"use client";

import { motion } from "framer-motion";
import type { InvitationConfig } from "@/config/invitation";
import { AddToCalendar } from "./AddToCalendar";
import { ShareButton } from "./ShareButton";
import { MapIcon } from "./ui/Icons";
import { Ornament } from "./ui/Ornament";

export function VenueDetails({ config }: { config: InvitationConfig }) {
  return (
    <section id="venue" className="scene venueScene paperScene" aria-labelledby="venue-title" data-scene>
      <motion.div className="venueCard" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .85 }}>
        <span className="eyebrow">تفاصيل الحفل</span>
        <h2 id="venue-title">يسرّنا حضوركم<br />ومشاركتنا فرحتنا</h2>
        <Ornament className="ornament" />
        <div className="venueInfo">
          <strong>{config.venueName}</strong>
          <span>{config.eventTime}</span>
          <address>{config.venueAddress}</address>
        </div>
        <div className="venueActions">
          <a className="actionButton primaryAction" href={config.mapsUrl} target="_blank" rel="noreferrer"><MapIcon /><span>الوصول إلى موقع الحفل</span></a>
          <AddToCalendar config={config} />
          <ShareButton config={config} />
        </div>
        <p className="gentleNote">حضوركم هو أجمل هدايانا</p>
      </motion.div>
    </section>
  );
}
