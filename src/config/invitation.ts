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
  groom: "[اسم العريس]",
  bride: "[اسم العروس]",
  groomFamily: "[اسم والد العريس] وأبناؤه",
  brideFamily: "[اسم والد العروس]",
  formalInvitation: "يتشرف أبناء المرحوم الحاج بدعوتكم لمشاركتهم فرحتهم",
  weddingDateISO: "2027-05-21T19:00:00+03:00",
  arabicDay: "يوم الجمعة",
  writtenGregorianDate: "الحادي والعشرون من أيار 2027",
  hijriDate: "[التاريخ الهجري – اختياري]",
  eventTime: "الساعة السابعة مساءً",
  eventEndTimeISO: "2027-05-21T22:00:00+03:00",
  venueName: "[اسم القاعة]",
  venueAddress: "[عنوان القاعة، المدينة]",
  mapsUrl: "https://maps.google.com/",
  personalMessage:
    "يا صديقي العزيز، في يومك الأجمل أسأل الله أن يجعل بيتكما سكنًا، وأن يكتب لكما في كل خطوة مودةً ورحمة. فرحتنا بكما لا تكتمل إلا بمن نحب.",
  messageAuthor: "[اسم صاحب الرسالة]",
  audioSrc: undefined,
  images: [
    { src: "/images/memory-1.svg", alt: "إطار تذكاري تجريبي يُستبدل بصورة للعروسين" },
    { src: "/images/memory-2.svg", alt: "إطار تذكاري تجريبي ثانٍ يُستبدل بصورة للعروسين" },
    { src: "/images/memory-3.svg", alt: "إطار تذكاري تجريبي ثالث يُستبدل بصورة للعروسين" },
  ],
  showGallery: true,
  showPersonalMessage: true,
  showMonogram: true,
  monogram: "ع  ❈  ع",
  shareImage: "/og-invitation.png",
  siteUrl: undefined,
  colors: {
    ivory: "#F3EBDD",
    emerald: "#0E3028",
    gold: "#B79A62",
    brown: "#2B1D17",
    night: "#071713",
  },
};
