import type { Metadata, Viewport } from "next";
import { Aref_Ruqaa, Noto_Naskh_Arabic, Tajawal } from "next/font/google";
import { invitation } from "@/config/invitation";
import { withBasePath } from "@/lib/assets";
import "./globals.css";

const naskh = Noto_Naskh_Arabic({ subsets: ["arabic"], variable: "--font-naskh", display: "swap" });
const ruqaa = Aref_Ruqaa({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-ruqaa", display: "swap" });
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "500", "700"], variable: "--font-ui", display: "swap" });

const githubOwner = process.env.GITHUB_REPOSITORY_OWNER;
const githubPagesUrl = githubOwner
  ? `https://${githubOwner}.github.io${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`
  : undefined;
const siteUrl = invitation.siteUrl ?? githubPagesUrl ?? "https://example.github.io/repository-name/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `بدايةٌ على مودة | زفاف ${invitation.groom} و${invitation.bride}`,
  description: `دعوة لحضور حفل زفاف ${invitation.groom} و${invitation.bride} ومشاركتنا بدايةً على مودة ورحمة.`,
  applicationName: "بدايةٌ على مودة",
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: withBasePath("/favicon.svg"), type: "image/svg+xml" }],
    shortcut: withBasePath("/favicon.ico"),
  },
  openGraph: {
    type: "website",
    locale: "ar_JO",
    title: `دعوة زفاف ${invitation.groom} و${invitation.bride}`,
    description: "يسرّنا حضوركم ومشاركتنا فرحتنا",
    images: [{ url: withBasePath(invitation.shareImage), width: 1200, height: 630, alt: "بدايةٌ على مودة — دعوة زفاف" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `دعوة زفاف ${invitation.groom} و${invitation.bride}`,
    description: "يسرّنا حضوركم ومشاركتنا فرحتنا",
    images: [withBasePath(invitation.shareImage)],
  },
};

export const viewport: Viewport = {
  themeColor: invitation.colors.night,
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${naskh.variable} ${ruqaa.variable} ${tajawal.variable}`}>
      <body>{children}</body>
    </html>
  );
}
