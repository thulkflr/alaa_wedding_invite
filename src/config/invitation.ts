export type InvitationConfig = {
  groom: string;
  bride: string;
  groomFamily: string;
  brideFamily: string;
  formalInvitation: string;
  weddingDateISO: string;
  arabicDay: string;
  writtenGregorianDate: string;
  hijriDate?: string;
  eventTime: string;
  eventEndTimeISO?: string;
  venueName: string;
  venueAddress: string;
  mapsUrl: string;
  personalMessage: string;
  messageAuthor: string;
  audioSrc?: string;
  images: Array<{ src: string; alt: string }>;
  showGallery: boolean;
  showPersonalMessage: boolean;
  showMonogram: boolean;
  monogram?: string;
  shareImage: string;
  siteUrl?: string;
  colors: {
    ivory: string;
    emerald: string;
    gold: string;
    brown: string;
    night: string;
  };
};

/** هذا هو الملف الوحيد المطلوب لتعديل محتوى الدعوة وألوانها وأصولها. */
export const invitation: InvitationConfig = {
  groom: "الدكتور علاء",
  bride: "الدكتورة رانيا",
  groomFamily: "الأستاذ عبد الحكيم أحمد أبو حمّاد وأبناؤه",
  brideFamily: "أيمن طلب السميران",
  formalInvitation: "بدعوتكم لمشاركتهم فرحتهم",
  weddingDateISO: "2026-09-18T21:30:00+03:00",
  arabicDay: "يوم الجمعة",
  writtenGregorianDate: "الثامن عشر من ايلول 2026",
  hijriDate: "السابع من ربيع ثاني 1448هـ",
  eventTime: "الساعة التاسعة والنصف الى الحادية عشرا والنصف مساءً",
  eventEndTimeISO: "2026-09-18T23:30:00+03:00",
  venueName: "قاعات شهرزاد الماسية",
  venueAddress: "اربد طريق الحصن جنوب كلية غرناطة ب٢٠٠ متر",
  mapsUrl: "https://maps.app.goo.gl/ojBHpNhoH3vUyc8z8",
  personalMessage:
    "يا أخي الحبيب، في يومك الأجمل أسأل الله أن يجعل بيتكما سكنًا، وأن يكتب لكما في كل خطوة مودةً ورحمة. فرحتنا بكما لا تكتمل إلا بمن نحب.",
  messageAuthor: "أخوك المحب : ذو الكفــل ربابـعـه",
  audioSrc: undefined,
  images: [],
  showGallery: false,
  showPersonalMessage: true,
  showMonogram: true,
  monogram: "ع  ❈  ر",
  shareImage: "/og-invitation.png",
  siteUrl: "https://thulkflr.github.io/alaa_wedding_invite/",
  colors: {
    ivory: "#F3EBDD",
    emerald: "#0E3028",
    gold: "#B79A62",
    brown: "#2B1D17",
    night: "#071713",
  },
};
