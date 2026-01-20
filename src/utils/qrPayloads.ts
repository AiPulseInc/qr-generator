import {
  URLData,
  WiFiData,
  CalendarData,
  SMSData,
  EmailData,
} from '../types';

export const generateURLPayload = (data: URLData): string => {
  let url = data.url.trim();
  if (url && !url.match(/^https?:\/\//i)) {
    url = 'https://' + url;
  }
  return url;
};

export const generateWiFiPayload = (data: WiFiData): string => {
  const escapeSpecialChars = (str: string): string => {
    return str.replace(/[\\;,:\"]/g, '\\$&');
  };

  const ssid = escapeSpecialChars(data.ssid);
  const password = escapeSpecialChars(data.password);
  const hidden = data.hidden ? 'true' : 'false';

  return `WIFI:T:${data.security};S:${ssid};P:${password};H:${hidden};;`;
};

const formatDateForICS = (date: Date, allDay: boolean): string => {
  if (allDay) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}${month}${day}T${hours}${minutes}${seconds}`;
};

export const generateCalendarPayload = (data: CalendarData): string => {
  const lines: string[] = [
    'BEGIN:VEVENT',
    `SUMMARY:${data.title}`,
  ];

  if (data.description) {
    lines.push(`DESCRIPTION:${data.description.replace(/\n/g, '\\n')}`);
  }

  if (data.location) {
    lines.push(`LOCATION:${data.location}`);
  }

  if (data.allDay) {
    lines.push(`DTSTART;VALUE=DATE:${formatDateForICS(data.startDate, true)}`);
    lines.push(`DTEND;VALUE=DATE:${formatDateForICS(data.endDate, true)}`);
  } else {
    lines.push(`DTSTART:${formatDateForICS(data.startDate, false)}`);
    lines.push(`DTEND:${formatDateForICS(data.endDate, false)}`);
  }

  lines.push('END:VEVENT');

  return lines.join('\n');
};

export const generateSMSPayload = (data: SMSData): string => {
  const phoneNumber = data.phoneNumber.replace(/[^0-9+]/g, '');
  if (data.message) {
    return `SMSTO:${phoneNumber}:${data.message}`;
  }
  return `SMSTO:${phoneNumber}`;
};

export const generateEmailPayload = (data: EmailData): string => {
  const params: string[] = [];

  if (data.subject) {
    params.push(`subject=${encodeURIComponent(data.subject)}`);
  }

  if (data.body) {
    params.push(`body=${encodeURIComponent(data.body)}`);
  }

  const queryString = params.length > 0 ? `?${params.join('&')}` : '';
  return `mailto:${data.recipient}${queryString}`;
};
