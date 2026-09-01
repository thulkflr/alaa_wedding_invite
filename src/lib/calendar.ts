import type { InvitationConfig } from "@/config/invitation";

const toCalendarDate = (value: string) =>
  new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

const escapeICS = (value: string) =>
  value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");

export const createIcs = (config: InvitationConfig) => {
  const end = config.eventEndTimeISO
    ? new Date(config.eventEndTimeISO)
    : new Date(new Date(config.weddingDateISO).getTime() + 3 * 60 * 60 * 1000);
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Bidaya Ala Mawadda//AR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:wedding-${new Date(config.weddingDateISO).getTime()}@bidaya-ala-mawadda`,
    `DTSTAMP:${toCalendarDate(new Date().toISOString())}`,
    `DTSTART:${toCalendarDate(config.weddingDateISO)}`,
    `DTEND:${toCalendarDate(end.toISOString())}`,
    `SUMMARY:${escapeICS(`زفاف ${config.groom} و${config.bride}`)}`,
    `DESCRIPTION:${escapeICS(config.formalInvitation)}`,
    `LOCATION:${escapeICS(`${config.venueName}، ${config.venueAddress}`)}`,
    `URL:${config.mapsUrl}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
};

export const downloadIcs = (config: InvitationConfig) => {
  const blob = new Blob([createIcs(config)], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "wedding-invitation.ics";
  anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
};

export const googleCalendarUrl = (config: InvitationConfig) => {
  const end = config.eventEndTimeISO
    ? new Date(config.eventEndTimeISO)
    : new Date(new Date(config.weddingDateISO).getTime() + 3 * 60 * 60 * 1000);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `زفاف ${config.groom} و${config.bride}`,
    dates: `${toCalendarDate(config.weddingDateISO)}/${toCalendarDate(end.toISOString())}`,
    details: config.formalInvitation,
    location: `${config.venueName}، ${config.venueAddress}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};
