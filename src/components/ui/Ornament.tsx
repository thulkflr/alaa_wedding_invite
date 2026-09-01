export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 34" aria-hidden="true">
      <path d="M2 17h76m64 0h76" fill="none" stroke="currentColor" strokeWidth=".8" />
      <path d="M110 1 122 17 110 33 98 17 110 1Z" fill="none" stroke="currentColor" />
      <path d="m110 7 7 10-7 10-7-10 7-10Zm-26 10 7-7 7 7-7 7-7-7Zm38 0 7-7 7 7-7 7-7-7Z" fill="none" stroke="currentColor" strokeWidth=".8" />
      <circle cx="110" cy="17" r="2.5" fill="currentColor" />
    </svg>
  );
}
