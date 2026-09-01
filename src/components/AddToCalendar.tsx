"use client";

import { useState } from "react";
import type { InvitationConfig } from "@/config/invitation";
import { downloadIcs, googleCalendarUrl } from "@/lib/calendar";
import { CalendarIcon } from "./ui/Icons";

export function AddToCalendar({ config }: { config: InvitationConfig }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="calendarAction">
      <button className="actionButton" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="calendar-options">
        <CalendarIcon /><span>احفظوا موعد الفرح</span>
      </button>
      {open && (
        <div id="calendar-options" className="calendarOptions">
          <button onClick={() => downloadIcs(config)}>تنزيل ملف التقويم</button>
          <a href={googleCalendarUrl(config)} target="_blank" rel="noreferrer">Google Calendar</a>
        </div>
      )}
    </div>
  );
}
