export type QRType = 'url' | 'wifi' | 'calendar' | 'sms' | 'email';

export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export type SizePreset = 'small' | 'medium' | 'large';

export type SecurityType = 'WPA' | 'WEP' | 'nopass';

export interface URLData {
  url: string;
}

export interface WiFiData {
  ssid: string;
  password: string;
  security: SecurityType;
  hidden: boolean;
}

export interface CalendarData {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  allDay: boolean;
}

export interface SMSData {
  phoneNumber: string;
  message: string;
}

export interface EmailData {
  recipient: string;
  subject: string;
  body: string;
}

export type QRFormData = URLData | WiFiData | CalendarData | SMSData | EmailData;

export interface QRConfig {
  type: QRType;
  errorCorrection: ErrorCorrectionLevel;
  size: SizePreset;
}
