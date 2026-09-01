"use client";

const scenes = ["intro", "verse", "gate", "invitation", "date", "venue", "finale"];

export function ProgressIndicator({ active }: { active: number }) {
  return (
    <nav className="progress" aria-label="تقدم فصول الدعوة">
      {scenes.map((id, index) => (
        <button key={id} className={active === index ? "active" : ""} onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })} aria-label={`الانتقال إلى الفصل ${index + 1}`} aria-current={active === index ? "step" : undefined}>
          <span />
        </button>
      ))}
    </nav>
  );
}
