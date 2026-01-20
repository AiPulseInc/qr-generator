import {useState, useCallback, useMemo} from 'react';
import {
  QRType,
  ErrorCorrectionLevel,
  SizePreset,
  URLData,
  WiFiData,
  CalendarData,
  SMSData,
  EmailData,
} from '../types';
import {
  generateURLPayload,
  generateWiFiPayload,
  generateCalendarPayload,
  generateSMSPayload,
  generateEmailPayload,
} from '../utils/qrPayloads';

const getDefaultURLData = (): URLData => ({
  url: 'www.321grow.pl',
});

const getDefaultWiFiData = (): WiFiData => ({
  ssid: '',
  password: '',
  security: 'WPA',
  hidden: false,
});

const getDefaultCalendarData = (): CalendarData => {
  const now = new Date();
  const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);
  return {
    title: '',
    description: '',
    location: '',
    startDate: now,
    endDate: oneHourLater,
    allDay: false,
  };
};

const getDefaultSMSData = (): SMSData => ({
  phoneNumber: '',
  message: '',
});

const getDefaultEmailData = (): EmailData => ({
  recipient: '',
  subject: '',
  body: '',
});

export const useQRGenerator = () => {
  const [qrType, setQRType] = useState<QRType>('url');
  const [errorCorrection, setErrorCorrection] =
    useState<ErrorCorrectionLevel>('M');
  const [sizePreset, setSizePreset] = useState<SizePreset>('medium');

  const [urlData, setURLData] = useState<URLData>(getDefaultURLData);
  const [wifiData, setWiFiData] = useState<WiFiData>(getDefaultWiFiData);
  const [calendarData, setCalendarData] = useState<CalendarData>(
    getDefaultCalendarData,
  );
  const [smsData, setSMSData] = useState<SMSData>(getDefaultSMSData);
  const [emailData, setEmailData] = useState<EmailData>(getDefaultEmailData);

  const qrPayload = useMemo(() => {
    switch (qrType) {
      case 'url':
        return urlData.url ? generateURLPayload(urlData) : '';
      case 'wifi':
        return wifiData.ssid ? generateWiFiPayload(wifiData) : '';
      case 'calendar':
        return calendarData.title ? generateCalendarPayload(calendarData) : '';
      case 'sms':
        return smsData.phoneNumber ? generateSMSPayload(smsData) : '';
      case 'email':
        return emailData.recipient ? generateEmailPayload(emailData) : '';
      default:
        return '';
    }
  }, [qrType, urlData, wifiData, calendarData, smsData, emailData]);

  const isValid = useMemo(() => {
    switch (qrType) {
      case 'url':
        return urlData.url.trim().length > 0;
      case 'wifi':
        return wifiData.ssid.trim().length > 0;
      case 'calendar':
        return calendarData.title.trim().length > 0;
      case 'sms':
        return smsData.phoneNumber.trim().length > 0;
      case 'email':
        return emailData.recipient.trim().length > 0;
      default:
        return false;
    }
  }, [qrType, urlData, wifiData, calendarData, smsData, emailData]);

  const resetForm = useCallback(() => {
    setURLData(getDefaultURLData());
    setWiFiData(getDefaultWiFiData());
    setCalendarData(getDefaultCalendarData());
    setSMSData(getDefaultSMSData());
    setEmailData(getDefaultEmailData());
  }, []);

  return {
    qrType,
    setQRType,
    errorCorrection,
    setErrorCorrection,
    sizePreset,
    setSizePreset,
    urlData,
    setURLData,
    wifiData,
    setWiFiData,
    calendarData,
    setCalendarData,
    smsData,
    setSMSData,
    emailData,
    setEmailData,
    qrPayload,
    isValid,
    resetForm,
  };
};
