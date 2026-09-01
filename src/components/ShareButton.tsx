"use client";

import { useState } from "react";
import type { InvitationConfig } from "@/config/invitation";
import { ShareIcon } from "./ui/Icons";

export function ShareButton({ config, compact = false }: { config: InvitationConfig; compact?: boolean }) {
  const [status, setStatus] = useState("");
  const share = async () => {
    const data = { title: "بدايةٌ على مودة", text: `دعوة زفاف ${config.groom} و${config.bride}`, url: window.location.href };
    try {
      if (navigator.share) {
        await navigator.share(data);
        setStatus("تمت المشاركة");
      } else {
        await navigator.clipboard.writeText(data.url);
        setStatus("تم نسخ رابط الدعوة");
      }
    } catch (error) {
      if ((error as DOMException).name !== "AbortError") {
        try {
          const input = document.createElement("textarea");
          input.value = data.url;
          document.body.append(input);
          input.select();
          document.execCommand("copy");
          input.remove();
          setStatus("تم نسخ رابط الدعوة");
        } catch { setStatus("تعذر النسخ، انسخوا الرابط من المتصفح"); }
      }
    }
    window.setTimeout(() => setStatus(""), 2500);
  };
  return (
    <>
      <button className={compact ? "quickMenuItem" : "actionButton"} onClick={share} aria-label="مشاركة الدعوة">
        <ShareIcon /><span>مشاركة الدعوة</span>
      </button>
      {status && <span className="toast" role="status">{status}</span>}
    </>
  );
}
