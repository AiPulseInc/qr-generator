import {ErrorCorrectionLevel, QRType, SizePreset} from '../types';

// 321 GROW Brand Colors
export const COLORS = {
  // Primary colors
  navy: '#001437',
  yellow: '#FDE300',
  white: '#ffffff',

  // Accent colors for tri-color stripe
  greenAccent: '#00B65E',
  blueAccent: '#0038FF',

  // UI colors
  background: '#001437',
  surface: '#0e1c36',
  primary: '#FDE300',
  accent: '#0038FF',
  text: '#ffffff',
  textDark: '#0A0A0A',
  textMuted: '#666666',
  success: '#00B65E',
  qrBackground: '#ffffff',

  // Form colors
  inputBackground: '#ffffff',
  inputBorder: '#e5e7eb',
  inputBorderActive: '#d1d5db',
};

export const QR_TYPES: {id: QRType; label: string}[] = [
  {id: 'url', label: 'URL'},
  {id: 'calendar', label: 'Event'},
  {id: 'sms', label: 'SMS'},
  {id: 'email', label: 'Email'},
  {id: 'wifi', label: 'WiFi'},
];

export const ERROR_CORRECTION_LEVELS: {
  id: ErrorCorrectionLevel;
  label: string;
  description: string;
}[] = [
  {id: 'L', label: 'Low', description: '7% recovery'},
  {id: 'M', label: 'Medium', description: '15% recovery'},
  {id: 'H', label: 'High', description: '30% recovery'},
];

export const SIZE_PRESETS: {id: SizePreset; label: string; size: number}[] = [
  {id: 'small', label: 'Small', size: 150},
  {id: 'medium', label: 'Medium', size: 200},
  {id: 'large', label: 'Large', size: 300},
];

export const getSizeFromPreset = (preset: SizePreset): number => {
  return SIZE_PRESETS.find(s => s.id === preset)?.size ?? 200;
};
