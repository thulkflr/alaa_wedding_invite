import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const Base = ({ children, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {children}
  </svg>
);

export const MenuIcon = (props: IconProps) => <Base {...props}><path d="M5 7h14M5 12h14M5 17h14" /></Base>;
export const CloseIcon = (props: IconProps) => <Base {...props}><path d="m6 6 12 12M18 6 6 18" /></Base>;
export const MapIcon = (props: IconProps) => <Base {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.4" /></Base>;
export const CalendarIcon = (props: IconProps) => <Base {...props}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 10h18" /></Base>;
export const ShareIcon = (props: IconProps) => <Base {...props}><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="m8.2 10.8 7.6-4.5m-7.6 7 7.6 4.4" /></Base>;
export const SoundIcon = (props: IconProps) => <Base {...props}><path d="M5 10v4h4l5 4V6l-5 4H5Z" /><path d="M17 9a4 4 0 0 1 0 6m2-9a8 8 0 0 1 0 12" /></Base>;
export const MuteIcon = (props: IconProps) => <Base {...props}><path d="M5 10v4h4l5 4V6l-5 4H5Zm12 0 5 5m0-5-5 5" /></Base>;
export const ReplayIcon = (props: IconProps) => <Base {...props}><path d="M4 4v6h6" /><path d="M5.5 9A8 8 0 1 1 4 14" /></Base>;
export const ChevronIcon = (props: IconProps) => <Base {...props}><path d="m7 10 5 5 5-5" /></Base>;
