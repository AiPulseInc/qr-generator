# QRGenerator - API Documentation

## Table of Contents

1. [Components](#components)
2. [Hooks](#hooks)
3. [Contexts](#contexts)
4. [Utilities](#utilities)
5. [Types](#types)
6. [Constants](#constants)

---

## Components

### QRGeneratorScreen

**Location:** `src/components/QRGeneratorScreen.tsx`

Main screen component that orchestrates the entire QR generation UI.

#### Usage

```typescript
import { QRGeneratorScreen } from './src/components/QRGeneratorScreen';

<QRGeneratorScreen />
```

#### Props

None - This is a root screen component.

#### Features

- QR type selection via SegmentedControl
- Conditional form rendering based on selected type
- QR code display with branding
- Settings panel with error correction, size, and export options
- Theme toggle functionality
- Keyboard-aware scrolling

#### Internal State

- `activeTab` - Current settings tab ('correction' | 'size' | 'share')

#### Dependencies

- `useQRGenerator` - QR generation state and logic
- `useQRActions` - Export/share operations
- `useTheme` - Theme colors and mode

---

### QRCodeDisplay

**Location:** `src/components/QRCodeDisplay.tsx`

Displays the generated QR code with branding elements.

#### Props

```typescript
interface QRCodeDisplayProps {
  payload: string;              // QR code data
  size: number;                 // QR code size in pixels
  errorCorrection: 'L' | 'M' | 'Q' | 'H';
}
```

#### Usage

```typescript
import { QRCodeDisplay } from './src/components/QRCodeDisplay';

const captureRef = useRef<ViewShot>(null);

<QRCodeDisplay
  ref={captureRef}
  payload="https://example.com"
  size={200}
  errorCorrection="M"
/>
```

#### Features

- Renders QR code using `react-native-qrcode-svg`
- Displays placeholder when no payload exists
- Branded tri-color stripe (yellow, green, blue)
- Card-style presentation with shadows
- Supports forwarded ref for image capture

#### Return Value

- Uses `forwardRef<ViewShot>` for parent component access

---

### Form Components

#### URLForm

**Location:** `src/components/forms/URLForm.tsx`

Simple form for URL input.

##### Props

```typescript
interface URLFormProps {
  data: URLData;
  onChange: (data: URLData) => void;
}

interface URLData {
  url: string;
}
```

##### Usage

```typescript
<URLForm data={urlData} onChange={setUrlData} />
```

---

#### WiFiForm

**Location:** `src/components/forms/WiFiForm.tsx`

Form for WiFi network credentials.

##### Props

```typescript
interface WiFiFormProps {
  data: WiFiData;
  onChange: (data: WiFiData) => void;
}

interface WiFiData {
  ssid: string;
  password: string;
  security: SecurityType;
  hidden: boolean;
}

type SecurityType = 'WPA' | 'WEP' | 'nopass';
```

##### Usage

```typescript
<WiFiForm data={wifiData} onChange={setWifiData} />
```

##### Features

- SSID input
- Password input with secure text entry
- Security type selector (WPA/WEP/None)
- Hidden network toggle

---

#### CalendarForm

**Location:** `src/components/forms/CalendarForm.tsx`

Form for calendar event details.

##### Props

```typescript
interface CalendarFormProps {
  data: CalendarData;
  onChange: (data: CalendarData) => void;
}

interface CalendarData {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  allDay: boolean;
}
```

##### Usage

```typescript
<CalendarForm data={calendarData} onChange={setCalendarData} />
```

##### Features

- Title, description, location inputs
- All-day event toggle
- Start/end date pickers
- Conditional time pickers (shown only when not all-day)
- Uses `@react-native-community/datetimepicker`

---

#### SMSForm

**Location:** `src/components/forms/SMSForm.tsx`

Form for SMS message details.

##### Props

```typescript
interface SMSFormProps {
  data: SMSData;
  onChange: (data: SMSData) => void;
}

interface SMSData {
  phoneNumber: string;
  message: string;
}
```

##### Usage

```typescript
<SMSForm data={smsData} onChange={setSmsData} />
```

##### Features

- Phone number input with phone pad keyboard
- Message textarea

---

#### EmailForm

**Location:** `src/components/forms/EmailForm.tsx`

Form for email details.

##### Props

```typescript
interface EmailFormProps {
  data: EmailData;
  onChange: (data: EmailData) => void;
}

interface EmailData {
  recipient: string;
  subject: string;
  body: string;
}
```

##### Usage

```typescript
<EmailForm data={emailData} onChange={setEmailData} />
```

##### Features

- Recipient input with email keyboard
- Subject line input
- Body textarea

---

### Common Components

#### FormInput

**Location:** `src/components/common/FormInput.tsx`

Reusable themed text input component.

##### Props

```typescript
interface FormInputProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  // ...all standard TextInput props
}
```

##### Usage

```typescript
<FormInput
  label="Email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  placeholder="Enter your email"
/>
```

##### Features

- Theme-aware styling
- Label above input
- Supports all TextInput props
- Auto-adjusts colors based on theme

---

#### SegmentedControl

**Location:** `src/components/common/SegmentedControl.tsx`

Generic pill-style tab selector with TypeScript generics.

##### Props

```typescript
interface SegmentedControlProps<T> {
  options: readonly { id: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}
```

##### Usage

```typescript
<SegmentedControl
  options={QR_TYPES}
  value={qrType}
  onChange={setQRType}
/>
```

##### Features

- Type-safe with generics
- Visual feedback for active selection
- Theme-aware colors
- Horizontal scrollable layout

---

#### PillTabs

**Location:** `src/components/common/PillTabs.tsx`

Navigation tabs for settings panel.

##### Props

```typescript
interface PillTabsProps {
  tabs: readonly { id: string; label: string }[];
  activeTab: string;
  onTabChange: (id: string) => void;
}
```

##### Usage

```typescript
<PillTabs
  tabs={SETTINGS_TABS}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>
```

##### Features

- Pill-shaped design
- Active state indication
- Theme-aware colors

---

#### TabContent

**Location:** `src/components/common/TabContent.tsx`

Dynamic content renderer based on active settings tab.

##### Props

```typescript
interface TabContentProps {
  activeTab: 'correction' | 'size' | 'share';
  errorCorrection: ErrorCorrectionLevel;
  onErrorCorrectionChange: (level: ErrorCorrectionLevel) => void;
  sizePreset: SizePreset;
  onSizePresetChange: (preset: SizePreset) => void;
  onCopy: () => void;
  onShare: () => void;
  onSave: () => void;
}
```

##### Usage

```typescript
<TabContent
  activeTab={activeTab}
  errorCorrection={errorCorrection}
  onErrorCorrectionChange={setErrorCorrection}
  sizePreset={sizePreset}
  onSizePresetChange={setSizePreset}
  onCopy={copyToClipboard}
  onShare={shareQRCode}
  onSave={saveToPhotos}
/>
```

##### Features

- Conditional rendering based on activeTab
- Error correction level selection with descriptions
- Size preset selection with pixel values
- Export action buttons with icons

---

#### SettingsPanel

**Location:** `src/components/common/SettingsPanel.tsx`

Alternative horizontal settings layout (currently unused but available).

##### Props

```typescript
interface SettingsPanelProps {
  errorCorrection: ErrorCorrectionLevel;
  onErrorCorrectionChange: (level: ErrorCorrectionLevel) => void;
  sizePreset: SizePreset;
  onSizePresetChange: (preset: SizePreset) => void;
}
```

---

## Hooks

### useQRGenerator

**Location:** `src/hooks/useQRGenerator.ts`

Central hook for QR generation state and logic.

#### Return Value

```typescript
interface UseQRGeneratorReturn {
  // Current QR type
  qrType: QRType;
  setQRType: (type: QRType) => void;

  // Form data for each type
  urlData: URLData;
  setUrlData: (data: URLData) => void;
  wifiData: WiFiData;
  setWifiData: (data: WiFiData) => void;
  calendarData: CalendarData;
  setCalendarData: (data: CalendarData) => void;
  smsData: SMSData;
  setSmsData: (data: SMSData) => void;
  emailData: EmailData;
  setEmailData: (data: EmailData) => void;

  // Configuration
  errorCorrection: ErrorCorrectionLevel;
  setErrorCorrection: (level: ErrorCorrectionLevel) => void;
  sizePreset: SizePreset;
  setSizePreset: (preset: SizePreset) => void;

  // Computed values
  qrPayload: string;    // Memoized QR payload string
  isValid: boolean;     // Memoized validation result

  // Actions
  resetForm: () => void;
}
```

#### Usage

```typescript
import { useQRGenerator } from './src/hooks/useQRGenerator';

function MyComponent() {
  const {
    qrType,
    setQRType,
    urlData,
    setUrlData,
    qrPayload,
    isValid,
    resetForm
  } = useQRGenerator();

  // Use state and computed values
}
```

#### Features

- Manages all form state for 5 QR types
- Computes QR payload based on current type and data
- Validates form data
- Provides reset functionality
- Uses `useMemo` for performance optimization

#### Default Values

- `qrType`: 'url'
- `urlData.url`: 'www.321grow.pl'
- `errorCorrection`: 'M'
- `sizePreset`: 'medium'

---

### useQRActions

**Location:** `src/hooks/useQRActions.ts`

Hook for QR code export and sharing operations.

#### Parameters

```typescript
interface UseQRActionsParams {
  captureRef: React.RefObject<ViewShot>;
  qrPayload: string;
  sizePreset: SizePreset;
}
```

#### Return Value

```typescript
interface UseQRActionsReturn {
  copyToClipboard: () => Promise<void>;
  shareQRCode: () => Promise<void>;
  saveToPhotos: () => Promise<void>;
}
```

#### Usage

```typescript
import { useQRActions } from './src/hooks/useQRActions';

function MyComponent() {
  const captureRef = useRef<ViewShot>(null);
  const { copyToClipboard, shareQRCode, saveToPhotos } = useQRActions({
    captureRef,
    qrPayload,
    sizePreset
  });

  return (
    <View>
      <QRCodeDisplay ref={captureRef} />
      <Button onPress={copyToClipboard} title="Copy" />
      <Button onPress={shareQRCode} title="Share" />
      <Button onPress={saveToPhotos} title="Save" />
    </View>
  );
}
```

#### Methods

##### `copyToClipboard()`

Copies QR code image (if valid) or payload text to clipboard.

- **Success:** Shows alert "QR Code copied!"
- **Error:** Shows alert with error message

##### `shareQRCode()`

Opens native share dialog with QR code image.

- **Captures:** QR code as base64 PNG
- **Shares:** Via platform share sheet
- **Error:** Shows alert if sharing fails

##### `saveToPhotos()`

Saves QR code to device photo library.

- **Captures:** QR code as PNG
- **Saves:** To camera roll/photo library
- **Success:** Shows alert "QR Code saved to photos!"
- **Error:** Shows alert if save fails

#### Dependencies

- `@react-native-clipboard/clipboard`
- `react-native-share`
- `@react-native-camera-roll/camera-roll`
- `react-native-view-shot`

---

### useTheme

**Location:** `src/contexts/ThemeContext.tsx`

Hook to access theme context.

#### Return Value

```typescript
interface ThemeContextValue {
  mode: ThemeMode;              // 'dark' | 'light'
  colors: ThemeColors;          // Current color palette
  isDark: boolean;              // Convenience boolean
  toggleTheme: () => void;      // Switch themes
}
```

#### Usage

```typescript
import { useTheme } from './src/contexts';

function MyComponent() {
  const { colors, isDark, toggleTheme } = useTheme();

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Hello</Text>
      <Button onPress={toggleTheme} title="Toggle Theme" />
    </View>
  );
}
```

#### Error Handling

Throws error if used outside `ThemeProvider`.

---

## Contexts

### ThemeContext

**Location:** `src/contexts/ThemeContext.tsx`

Provides theme state and colors to all components.

#### Provider

```typescript
<ThemeProvider>
  {children}
</ThemeProvider>
```

#### Context Value

See [useTheme](#usetheme) for return value structure.

#### Color Palettes

##### Dark Mode Colors

```typescript
{
  background: '#001437',      // Navy
  surface: '#0e1c36',         // Darker navy
  text: '#ffffff',            // White
  textMuted: '#8a8a8a',       // Gray
  border: '#1e2a44',          // Dark border
  inputBg: '#0e1c36',         // Dark input
  inputBorder: '#2a3a5a',     // Input border
  buttonBg: '#FDE300',        // Yellow
  buttonText: '#001437',      // Navy
  icon: '#ffffff',            // White
  primary: '#001437',         // Navy
  accent: '#FDE300',          // Yellow
  stripeYellow: '#FDE300',    // Brand yellow
  stripeGreen: '#00B65E',     // Brand green
  stripeBlue: '#0038FF',      // Brand blue
}
```

##### Light Mode Colors

```typescript
{
  background: '#ffffff',      // White
  surface: '#f5f5f5',         // Light gray
  text: '#001437',            // Navy
  textMuted: '#666666',       // Gray
  border: '#e0e0e0',          // Light border
  inputBg: '#ffffff',         // White
  inputBorder: '#d0d0d0',     // Input border
  buttonBg: '#001437',        // Navy
  buttonText: '#FDE300',      // Yellow
  icon: '#001437',            // Navy
  primary: '#001437',         // Navy
  accent: '#FDE300',          // Yellow
  stripeYellow: '#FDE300',    // Brand yellow
  stripeGreen: '#00B65E',     // Brand green
  stripeBlue: '#0038FF',      // Brand blue
}
```

---

## Utilities

### qrPayloads.ts

**Location:** `src/utils/qrPayloads.ts`

Functions for generating QR code payload strings.

#### generateURLPayload

```typescript
function generateURLPayload(data: URLData): string
```

Generates URL payload with https:// prefix if missing.

**Example:**
```typescript
generateURLPayload({ url: 'example.com' })
// Returns: 'https://example.com'
```

---

#### generateWiFiPayload

```typescript
function generateWiFiPayload(data: WiFiData): string
```

Generates WiFi QR code format string.

**Format:** `WIFI:T:{security};S:{ssid};P:{password};H:{hidden};;`

**Example:**
```typescript
generateWiFiPayload({
  ssid: 'MyNetwork',
  password: 'secret123',
  security: 'WPA',
  hidden: false
})
// Returns: 'WIFI:T:WPA;S:MyNetwork;P:secret123;H:false;;'
```

**Features:**
- Escapes special characters (`;`, `:`, `\`, `,`) in SSID and password
- Supports WPA, WEP, and open networks
- Hidden network support

---

#### generateCalendarPayload

```typescript
function generateCalendarPayload(data: CalendarData): string
```

Generates iCalendar (VEVENT) format string.

**Example:**
```typescript
generateCalendarPayload({
  title: 'Team Meeting',
  description: 'Discuss Q1 goals',
  location: 'Conference Room A',
  startDate: new Date('2026-01-20T10:00:00'),
  endDate: new Date('2026-01-20T11:00:00'),
  allDay: false
})
// Returns:
// BEGIN:VEVENT
// SUMMARY:Team Meeting
// DESCRIPTION:Discuss Q1 goals
// LOCATION:Conference Room A
// DTSTART:20260120T100000
// DTEND:20260120T110000
// END:VEVENT
```

**Features:**
- All-day event support (date-only format)
- Timed event support (date-time format)
- Optional description and location

---

#### generateSMSPayload

```typescript
function generateSMSPayload(data: SMSData): string
```

Generates SMS URI scheme.

**Format:** `SMSTO:{phoneNumber}:{message}`

**Example:**
```typescript
generateSMSPayload({
  phoneNumber: '+1-234-567-8900',
  message: 'Hello!'
})
// Returns: 'SMSTO:+12345678900:Hello!'
```

**Features:**
- Normalizes phone number (removes non-digits except +)
- Optional message

---

#### generateEmailPayload

```typescript
function generateEmailPayload(data: EmailData): string
```

Generates mailto: URI scheme.

**Format:** `mailto:{recipient}?subject={subject}&body={body}`

**Example:**
```typescript
generateEmailPayload({
  recipient: 'user@example.com',
  subject: 'Meeting Request',
  body: 'Can we meet tomorrow?'
})
// Returns: 'mailto:user@example.com?subject=Meeting%20Request&body=Can%20we%20meet%20tomorrow%3F'
```

**Features:**
- URL-encodes subject and body
- Optional subject and body

---

### constants.ts

**Location:** `src/utils/constants.ts`

App-wide constants and configuration.

#### COLORS

```typescript
const COLORS = {
  navy: '#001437',
  yellow: '#FDE300',
  white: '#ffffff',
  green: '#00B65E',
  blue: '#0038FF',
  // ...additional colors
}
```

#### QR_TYPES

```typescript
const QR_TYPES = [
  { id: 'url', label: 'URL' },
  { id: 'wifi', label: 'WiFi' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'sms', label: 'SMS' },
  { id: 'email', label: 'Email' },
] as const;
```

#### ERROR_CORRECTION_LEVELS

```typescript
const ERROR_CORRECTION_LEVELS = [
  { id: 'L', label: 'Low', description: '~7% recovery' },
  { id: 'M', label: 'Medium', description: '~15% recovery' },
  { id: 'Q', label: 'Quartile', description: '~25% recovery' },
  { id: 'H', label: 'High', description: '~30% recovery' },
] as const;
```

#### SIZE_PRESETS

```typescript
const SIZE_PRESETS = [
  { id: 'small', label: 'Small', size: 150 },
  { id: 'medium', label: 'Medium', size: 200 },
  { id: 'large', label: 'Large', size: 300 },
] as const;
```

#### getSizeFromPreset

```typescript
function getSizeFromPreset(preset: SizePreset): number
```

Converts size preset ID to pixel value.

**Example:**
```typescript
getSizeFromPreset('medium') // Returns: 200
```

---

## Types

**Location:** `src/types/index.ts`

### Type Definitions

```typescript
// QR Types
type QRType = 'url' | 'wifi' | 'calendar' | 'sms' | 'email';
type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
type SizePreset = 'small' | 'medium' | 'large';
type SecurityType = 'WPA' | 'WEP' | 'nopass';

// Data Interfaces
interface URLData {
  url: string;
}

interface WiFiData {
  ssid: string;
  password: string;
  security: SecurityType;
  hidden: boolean;
}

interface CalendarData {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  allDay: boolean;
}

interface SMSData {
  phoneNumber: string;
  message: string;
}

interface EmailData {
  recipient: string;
  subject: string;
  body: string;
}

// Union Type
type QRFormData = URLData | WiFiData | CalendarData | SMSData | EmailData;

// Configuration
interface QRConfig {
  type: QRType;
  errorCorrection: ErrorCorrectionLevel;
  size: SizePreset;
}

// Theme Types
interface ThemeColors {
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  inputBg: string;
  inputBorder: string;
  buttonBg: string;
  buttonText: string;
  icon: string;
  primary: string;
  accent: string;
  stripeYellow: string;
  stripeGreen: string;
  stripeBlue: string;
}

type ThemeMode = 'dark' | 'light';

interface ThemeContextValue {
  mode: ThemeMode;
  colors: ThemeColors;
  isDark: boolean;
  toggleTheme: () => void;
}
```

---

## Constants

### QR Code Standards Reference

| Type | Standard | Documentation |
|------|----------|---------------|
| URL | HTTP/HTTPS URLs | [RFC 3986](https://www.rfc-editor.org/rfc/rfc3986) |
| WiFi | WiFi QR Code | [ZXing WiFi Format](https://github.com/zxing/zxing/wiki/Barcode-Contents#wi-fi-network-config-android-ios-11) |
| Calendar | iCalendar VEVENT | [RFC 5545](https://www.rfc-editor.org/rfc/rfc5545) |
| SMS | SMSTO URI | Android/iOS SMS URI scheme |
| Email | Mailto URI | [RFC 6068](https://www.rfc-editor.org/rfc/rfc6068) |

---

## Usage Examples

### Complete QR Generation Flow

```typescript
import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import { QRCodeDisplay } from './src/components/QRCodeDisplay';
import { URLForm } from './src/components/forms/URLForm';
import { useQRGenerator } from './src/hooks/useQRGenerator';
import { useQRActions } from './src/hooks/useQRActions';
import { getSizeFromPreset } from './src/utils/constants';

function MyQRScreen() {
  const captureRef = useRef(null);

  const {
    qrType,
    urlData,
    setUrlData,
    qrPayload,
    isValid,
    errorCorrection,
    sizePreset
  } = useQRGenerator();

  const { copyToClipboard, shareQRCode, saveToPhotos } = useQRActions({
    captureRef,
    qrPayload,
    sizePreset
  });

  return (
    <View>
      <URLForm data={urlData} onChange={setUrlData} />

      {isValid && (
        <QRCodeDisplay
          ref={captureRef}
          payload={qrPayload}
          size={getSizeFromPreset(sizePreset)}
          errorCorrection={errorCorrection}
        />
      )}

      <Button onPress={copyToClipboard} title="Copy" />
      <Button onPress={shareQRCode} title="Share" />
      <Button onPress={saveToPhotos} title="Save" />
    </View>
  );
}
```

---

## Error Handling

### Common Error Scenarios

1. **Invalid Payload** - Empty or malformed data
   - Solution: Check `isValid` before rendering QRCodeDisplay

2. **Capture Failure** - ViewShot capture fails
   - Handled: `useQRActions` shows alert with error

3. **Permission Denied** - Photo library access denied
   - Handled: Native module shows system permission prompt

4. **Share Cancelled** - User cancels share dialog
   - Handled: Gracefully fails without error

---

## Performance Tips

1. **Use memoization** - All computed values use `useMemo`
2. **Use callbacks** - All action handlers use `useCallback`
3. **Avoid prop drilling** - Use hooks to access shared state
4. **Conditional rendering** - Only render QR when valid

---

## Testing

### Example Component Test

```typescript
import { render } from '@testing-library/react-native';
import { QRCodeDisplay } from '../QRCodeDisplay';

test('renders QR code with payload', () => {
  const { getByText } = render(
    <QRCodeDisplay payload="https://example.com" size={200} errorCorrection="M" />
  );
  // Add assertions
});
```

### Example Hook Test

```typescript
import { renderHook, act } from '@testing-library/react-hooks';
import { useQRGenerator } from '../useQRGenerator';

test('updates URL data', () => {
  const { result } = renderHook(() => useQRGenerator());

  act(() => {
    result.current.setUrlData({ url: 'https://test.com' });
  });

  expect(result.current.urlData.url).toBe('https://test.com');
  expect(result.current.qrPayload).toBe('https://test.com');
});
```

---

## Conclusion

This API documentation provides comprehensive reference for all components, hooks, utilities, and types in the QRGenerator application. For architectural details, see [ARCHITECTURE.md](./ARCHITECTURE.md). For contribution guidelines, see [CONTRIBUTING.md](./CONTRIBUTING.md).
