"use client";

type Props = {
  targetId: string;
  label: string;
};

export function SceneContinue({ targetId, label }: Props) {
  const continueTo = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button className="sceneContinue" type="button" onClick={continueTo} aria-controls={targetId}>
      <span>{label}</span>
      <i aria-hidden="true">↓</i>
    </button>
  );
}
