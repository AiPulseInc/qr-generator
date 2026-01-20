# QRGenerator - Technical Architecture

## Table of Contents

1. [Overview](#overview)
2. [System Architecture](#system-architecture)
3. [Project Structure](#project-structure)
4. [Component Architecture](#component-architecture)
5. [State Management](#state-management)
6. [Data Flow](#data-flow)
7. [Theme System](#theme-system)
8. [QR Code Generation Pipeline](#qr-code-generation-pipeline)
9. [Export & Share Architecture](#export--share-architecture)
10. [Type System](#type-system)
11. [Performance Optimizations](#performance-optimizations)
12. [Platform Considerations](#platform-considerations)
13. [Security Architecture](#security-architecture)

---

## Overview

QRGenerator is a React Native application built with a modular, type-safe architecture that prioritizes separation of concerns, reusability, and maintainability. The app follows modern React patterns including hooks, context, and functional components.

### Key Architectural Principles

1. **Separation of Concerns** - Business logic separated from presentation
2. **Type Safety** - Comprehensive TypeScript coverage
3. **Component Composition** - Modular, reusable components
4. **Unidirectional Data Flow** - Predictable state updates
5. **Performance First** - Memoization and optimization strategies

---

## System Architecture

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                      App.tsx (Entry)                     │
│  ┌────────────────────────────────────────────────────┐ │
│  │           SafeAreaProvider (Wrapper)                │ │
│  │  ┌──────────────────────────────────────────────┐  │ │
│  │  │      ThemeProvider (Context Provider)        │  │ │
│  │  │  ┌────────────────────────────────────────┐  │  │ │
│  │  │  │     QRGeneratorScreen (Main Screen)    │  │  │ │
│  │  │  │                                        │  │  │ │
│  │  │  │  ┌──────────────────────────────┐     │  │  │ │
│  │  │  │  │   useQRGenerator Hook        │     │  │  │ │
│  │  │  │  │   useQRActions Hook          │     │  │  │ │
│  │  │  │  │   useTheme Hook              │     │  │  │ │
│  │  │  │  └──────────────────────────────┘     │  │  │ │
│  │  │  │                                        │  │  │ │
│  │  │  │  ┌──────────────────────────────┐     │  │  │ │
│  │  │  │  │   Forms (URL, WiFi, etc.)    │     │  │  │ │
│  │  │  │  │   QRCodeDisplay              │     │  │  │ │
│  │  │  │  │   Common Components          │     │  │  │ │
│  │  │  │  └──────────────────────────────┘     │  │  │ │
│  │  │  └────────────────────────────────────────┘  │  │ │
│  │  └──────────────────────────────────────────────┘  │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Technology Layers

```
┌─────────────────────────────────────────┐
│         Presentation Layer              │  ← UI Components, Styling
├─────────────────────────────────────────┤
│         Business Logic Layer            │  ← Hooks, Utils, Payload Generators
├─────────────────────────────────────────┤
│         State Management Layer          │  ← React Context, useState, useMemo
├─────────────────────────────────────────┤
│         Native Interaction Layer        │  ← Share, Clipboard, Camera Roll
├─────────────────────────────────────────┤
│         React Native Bridge             │  ← Native Modules (iOS/Android)
└─────────────────────────────────────────┘
```

---

## Project Structure

### Directory Organization

```
src/
├── components/              # UI Components
│   ├── common/              # Reusable components (FormInput, Tabs, etc.)
│   ├── forms/               # QR type-specific forms
│   ├── QRCodeDisplay.tsx    # QR rendering component
│   └── QRGeneratorScreen.tsx # Main screen orchestrator
│
├── contexts/                # React Context providers
│   ├── ThemeContext.tsx     # Theme state & colors
│   └── index.ts             # Context exports
│
├── hooks/                   # Custom React hooks
│   ├── useQRActions.ts      # Export/share operations
│   └── useQRGenerator.ts    # QR generation logic
│
├── types/                   # TypeScript definitions
│   └── index.ts             # All type definitions
│
└── utils/                   # Utility functions
    ├── constants.ts         # App-wide constants
    └── qrPayloads.ts        # Payload generation functions
```

### File Organization Principles

1. **Cohesion** - Related files grouped together
2. **Modularity** - Each file has a single responsibility
3. **Discoverability** - Intuitive naming and structure
4. **Scalability** - Easy to add new features/components

---

## Component Architecture

### Component Hierarchy

```
App (Root)
└── SafeAreaProvider
    └── ThemeProvider
        └── QRGeneratorScreen
            ├── Header
            │   ├── Logo (321 TOOLS)
            │   └── Theme Toggle Button
            ├── SegmentedControl
            │   └── QR Type Selection (URL, WiFi, Calendar, SMS, Email)
            ├── Forms (Conditional Rendering)
            │   ├── URLForm
            │   ├── WiFiForm
            │   ├── CalendarForm
            │   ├── SMSForm
            │   └── EmailForm
            ├── QRCodeDisplay
            │   ├── QRCode (from react-native-qrcode-svg)
            │   └── Brand Stripe (Yellow, Green, Blue)
            ├── PillTabs
            │   └── Tab Navigation (Error Correction, Size, Export)
            ├── TabContent
            │   ├── Error Correction Options
            │   ├── Size Presets
            │   └── Export Actions (Copy, Share, Save)
            └── Footer
                └── Copyright & Branding
```

### Component Categories

#### 1. Container Components
- **QRGeneratorScreen** - Main orchestrator
  - Manages routing between forms
  - Integrates hooks and state
  - Handles layout and keyboard avoidance

#### 2. Presentational Components
- **QRCodeDisplay** - Renders QR code with styling
- **FormInput** - Reusable text input wrapper
- **SegmentedControl** - Generic tab selector
- **PillTabs** - Settings navigation tabs
- **TabContent** - Dynamic content based on active tab

#### 3. Form Components
- **URLForm** - Simple URL input
- **WiFiForm** - SSID, password, security type, hidden toggle
- **CalendarForm** - Event details with date/time pickers
- **SMSForm** - Phone number and message
- **EmailForm** - Recipient, subject, body

### Component Patterns

#### Composition
```typescript
// Example: QRGeneratorScreen composes multiple components
<View>
  <SegmentedControl options={QR_TYPES} value={qrType} onChange={setQRType} />
  {renderForm()} {/* Conditional form rendering */}
  <QRCodeDisplay payload={qrPayload} size={size} />
  <PillTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
  <TabContent activeTab={activeTab} />
</View>
```

#### Props Drilling Avoidance
- Theme accessed via `useTheme()` hook (Context)
- QR state managed in centralized `useQRGenerator` hook
- Actions managed in `useQRActions` hook

#### Controlled Components
All form inputs are controlled via state in `useQRGenerator`

---

## State Management

### State Architecture

```
┌─────────────────────────────────────────────┐
│          Global State (Context)             │
│  ┌────────────────────────────────────────┐ │
│  │  ThemeContext                          │ │
│  │  - mode: 'dark' | 'light'              │ │
│  │  - colors: ThemeColors                 │ │
│  │  - toggleTheme()                       │ │
│  └────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│        Component-Level State (Hooks)        │
│  ┌────────────────────────────────────────┐ │
│  │  useQRGenerator (Custom Hook)          │ │
│  │  - qrType: QRType                      │ │
│  │  - urlData, wifiData, etc.             │ │
│  │  - errorCorrection, sizePreset         │ │
│  │  - qrPayload (computed)                │ │
│  │  - isValid (computed)                  │ │
│  │  - State setters                       │ │
│  │  - resetForm()                         │ │
│  └────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────┐ │
│  │  useQRActions (Custom Hook)            │ │
│  │  - copyToClipboard()                   │ │
│  │  - shareQRCode()                       │ │
│  │  - saveToPhotos()                      │ │
│  └────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│         Local Component State               │
│  - activeTab (PillTabs)                     │
│  - Input focus states                       │
│  - Date picker visibility (CalendarForm)    │
└─────────────────────────────────────────────┘
```

### State Management Strategy

1. **Global State** - Theme (Context API)
2. **Shared Component State** - QR generation logic (Custom Hooks)
3. **Local State** - UI-specific state (useState)

### Why This Approach?

- **Context for Theme** - Accessed by many components, infrequent updates
- **Hooks for QR Logic** - Shared logic without prop drilling
- **Local State** - Isolated UI concerns (tabs, focus, etc.)

---

## Data Flow

### Unidirectional Data Flow

```
User Input (Form)
      ↓
State Update (useState setter)
      ↓
useQRGenerator Hook
      ↓
qrPayload Computation (useMemo)
      ↓
QRCodeDisplay Rendering
      ↓
User Action (Export)
      ↓
useQRActions Hook
      ↓
Native Module (Share/Clipboard/CameraRoll)
```

### Example: WiFi QR Generation Flow

```typescript
1. User enters SSID in WiFiForm
   ↓
2. setWifiData({ ...wifiData, ssid: value })
   ↓
3. useQRGenerator re-computes qrPayload via useMemo
   ↓
4. generateWiFiPayload(wifiData) creates WiFi QR string
   ↓
5. qrPayload prop updates in QRCodeDisplay
   ↓
6. QRCodeDisplay re-renders with new QR code
```

### Example: Share Action Flow

```typescript
1. User taps "Share" button in TabContent
   ↓
2. shareQRCode() from useQRActions called
   ↓
3. captureRef.current.capture() captures QR as base64 PNG
   ↓
4. Share.open({ url: `data:image/png;base64,${uri}` })
   ↓
5. Native share dialog opens
```

---

## Theme System

### Theme Architecture

```typescript
interface ThemeColors {
  background: string;      // Main background
  surface: string;         // Card/container background
  text: string;            // Primary text
  textMuted: string;       // Secondary text
  border: string;          // Borders
  inputBg: string;         // Input background
  inputBorder: string;     // Input border
  buttonBg: string;        // Button background
  buttonText: string;      // Button text
  icon: string;            // Icon color
  primary: string;         // Navy (#001437)
  accent: string;          // Yellow (#FDE300)
  stripeYellow: string;    // Brand yellow
  stripeGreen: string;     // Brand green
  stripeBlue: string;      // Brand blue
}
```

### Theme Provider Implementation

```typescript
const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [mode, setMode] = useState<ThemeMode>('dark');

  const colors = useMemo(
    () => (mode === 'dark' ? darkColors : lightColors),
    [mode]
  );

  const toggleTheme = useCallback(() => {
    setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(
    () => ({ mode, colors, isDark: mode === 'dark', toggleTheme }),
    [mode, colors, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
```

### Theme Consumption

```typescript
// Any component can access theme
const { colors, isDark, toggleTheme } = useTheme();

// Use in styles
<View style={{ backgroundColor: colors.surface }}>
  <Text style={{ color: colors.text }}>Hello</Text>
</View>
```

---

## QR Code Generation Pipeline

### Pipeline Flow

```
Form Data Input
      ↓
Data Validation (isValid check)
      ↓
Payload Generation (utils/qrPayloads.ts)
      ↓
QR Code Rendering (react-native-qrcode-svg)
      ↓
Display with Branding
```

### Payload Generation Functions

Each QR type has a dedicated generator:

```typescript
// utils/qrPayloads.ts

generateURLPayload(data: URLData): string
  → Returns URL with https:// prefix

generateWiFiPayload(data: WiFiData): string
  → Returns "WIFI:T:WPA;S:MyNetwork;P:password;;"

generateCalendarPayload(data: CalendarData): string
  → Returns iCalendar VEVENT format

generateSMSPayload(data: SMSData): string
  → Returns "SMSTO:+1234567890:message"

generateEmailPayload(data: EmailData): string
  → Returns "mailto:user@example.com?subject=..."
```

### QR Code Rendering

```typescript
<QRCode
  value={qrPayload}
  size={getSizeFromPreset(sizePreset)}
  ecl={errorCorrection}
  logo={require('../assets/logo.png')} // Optional
/>
```

---

## Export & Share Architecture

### Native Module Integration

```
useQRActions Hook
      ↓
┌─────────────────────────────────────┐
│  copyToClipboard()                  │
│    → Clipboard.setString()          │
│                                     │
│  shareQRCode()                      │
│    → ViewShot.capture()             │
│    → Share.open()                   │
│                                     │
│  saveToPhotos()                     │
│    → ViewShot.capture()             │
│    → CameraRoll.save()              │
└─────────────────────────────────────┘
      ↓
Native Modules (iOS/Android)
```

### ViewShot Capture Process

```typescript
// 1. QRCodeDisplay uses forwardRef
const QRCodeDisplay = forwardRef<ViewShot, Props>((props, ref) => {
  return (
    <ViewShot ref={ref} options={{ format: 'png', quality: 1.0 }}>
      <QRCode {...props} />
    </ViewShot>
  );
});

// 2. Parent component creates ref
const captureRef = useRef<ViewShot>(null);

// 3. Pass ref to QRCodeDisplay
<QRCodeDisplay ref={captureRef} />

// 4. Capture when needed
const uri = await captureRef.current.capture();
```

---

## Type System

### Type Hierarchy

```typescript
// Core types
type QRType = 'url' | 'wifi' | 'calendar' | 'sms' | 'email';
type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
type SizePreset = 'small' | 'medium' | 'large';
type SecurityType = 'WPA' | 'WEP' | 'nopass';

// Data interfaces
interface URLData { url: string; }
interface WiFiData { ssid, password, security, hidden }
interface CalendarData { title, description, location, dates, allDay }
interface SMSData { phoneNumber, message }
interface EmailData { recipient, subject, body }

// Union type for all form data
type QRFormData = URLData | WiFiData | CalendarData | SMSData | EmailData;

// Configuration
interface QRConfig {
  type: QRType;
  errorCorrection: ErrorCorrectionLevel;
  size: SizePreset;
}

// Theme types
interface ThemeColors { ... }
type ThemeMode = 'dark' | 'light';
```

### Type Guards

```typescript
// Example type guard (if needed)
function isWiFiData(data: QRFormData): data is WiFiData {
  return 'ssid' in data;
}
```

---

## Performance Optimizations

### 1. Memoization

```typescript
// useQRGenerator hook
const qrPayload = useMemo(() => {
  switch (qrType) {
    case 'url': return generateURLPayload(urlData);
    case 'wifi': return generateWiFiPayload(wifiData);
    // ...
  }
}, [qrType, urlData, wifiData, /* ... */]);

const isValid = useMemo(() => {
  // Validation logic
}, [qrPayload, qrType]);
```

### 2. Callback Memoization

```typescript
// useQRActions hook
const copyToClipboard = useCallback(async () => {
  // Implementation
}, [qrPayload, captureRef]);

const shareQRCode = useCallback(async () => {
  // Implementation
}, [captureRef, sizePreset]);
```

### 3. Context Optimization

```typescript
// ThemeContext value is memoized
const value = useMemo(
  () => ({ mode, colors, isDark, toggleTheme }),
  [mode, colors, toggleTheme]
);
```

### 4. Conditional Rendering

```typescript
// Only render date picker when needed
{!calendarData.allDay && (
  <DateTimePicker mode="time" value={calendarData.startDate} />
)}
```

---

## Platform Considerations

### iOS-Specific

- **Safe Area:** Uses `SafeAreaProvider` for notch/home indicator
- **CocoaPods:** Native dependencies via Podfile
- **Permissions:** Photo library access (Info.plist)

### Android-Specific

- **Permissions:** Storage access for saving images
- **Gradle:** Native dependencies via build.gradle
- **Elevation:** Shadow effects via `elevation` prop

### Cross-Platform

- **ViewShot:** Works on both platforms for image capture
- **Share:** Native share dialog on both platforms
- **Clipboard:** Unified API via `@react-native-clipboard/clipboard`

---

## Security Architecture

### Privacy & Data Protection

1. **Local Processing** - All QR generation on-device
2. **No Network Calls** - No data transmitted to servers
3. **No Persistence** - QR data not stored locally
4. **Secure Input** - WiFi passwords use `secureTextEntry`
5. **Character Escaping** - Special characters escaped in WiFi payloads

### Permissions Model

| Permission | Platform | Purpose |
|-----------|----------|---------|
| Photo Library (Write) | iOS/Android | Save QR codes to photos |
| Clipboard | iOS/Android | Copy QR images/data |

### Data Flow Security

```
User Input
  ↓ (Local only)
Payload Generation
  ↓ (In-memory)
QR Code Rendering
  ↓ (Local display)
Export (User-initiated)
  ↓ (Local save or share)
Device Storage / Share Target
```

No data leaves the device unless explicitly shared by user.

---

## Extensibility & Future Architecture

### Adding New QR Types

1. Add type to `QRType` union in `types/index.ts`
2. Create data interface (e.g., `VCardData`)
3. Create payload generator in `utils/qrPayloads.ts`
4. Create form component in `components/forms/`
5. Add state to `useQRGenerator` hook
6. Update `qrPayload` useMemo switch case
7. Add to `QR_TYPES` constant

### Potential Architectural Improvements

- **Redux/Zustand** for more complex state management
- **React Query** for caching generated QR codes
- **Persistent Storage** (AsyncStorage) for favorites/history
- **Backend Integration** for analytics (optional)
- **Plugin System** for custom QR types

---

## Conclusion

The QRGenerator architecture is designed for:

- **Maintainability** - Clear separation of concerns
- **Scalability** - Easy to add new features
- **Performance** - Optimized rendering and state updates
- **Type Safety** - Comprehensive TypeScript coverage
- **Testability** - Modular, testable components and hooks

The architecture follows React Native and React best practices while maintaining simplicity and clarity.
