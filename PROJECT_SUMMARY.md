# QRGenerator - Project Summary

## Overview

**QRGenerator** is a professional-grade React Native mobile application that enables users to generate, customize, and share QR codes across multiple formats. Built with TypeScript and modern React Native (v0.83.1), the app provides an intuitive interface for creating QR codes for URLs, WiFi networks, calendar events, SMS messages, and emails.

**Version:** 0.0.1
**Platform:** iOS and Android
**License:** Private
**Branding:** Powered by 321 Tech Lab

---

## Key Features

### QR Code Types (5 Formats)

1. **URL QR Codes**
   - Generate scannable links to websites
   - Auto-corrects URL format (adds https:// if missing)
   - Default: www.321grow.pl

2. **WiFi QR Codes**
   - Share WiFi credentials via QR scan
   - Supports WPA/WPA2, WEP, and open networks
   - Option for hidden network support
   - Auto-escapes special characters

3. **Calendar/Event QR Codes**
   - Create iCalendar (ICS) format event data
   - All-day event support
   - Date and time pickers
   - Includes title, description, location

4. **SMS QR Codes**
   - Pre-populate phone number and message
   - Auto-formats phone numbers
   - Scannable text message links

5. **Email QR Codes**
   - Mailto: links with optional subject and body
   - URL-encoded parameters
   - Email keyboard support

### Customization Options

- **Error Correction Levels:** Low (7%), Medium (15%), High (30%)
- **QR Code Sizes:** Small (150px), Medium (200px), Large (300px)
- **Theme Support:** Dark mode and light mode with 321 GROW branding

### Export & Sharing

- **Copy to Clipboard:** Copy QR image or payload text
- **Native Sharing:** Share via system share sheet
- **Save to Photos:** Export to camera roll/photo library
- **View-based Capture:** High-quality PNG export

---

## Technical Stack

### Core Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| React Native | 0.83.1 | Cross-platform mobile framework |
| React | 19.2.0 | UI component library |
| TypeScript | 5.8.3 | Type-safe development |
| Node.js | ≥20 | Runtime environment |

### Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react-native-qrcode-svg | ^6.3.21 | QR code generation engine |
| react-native-svg | ^15.15.1 | SVG rendering |
| @react-native-clipboard/clipboard | ^1.16.3 | Clipboard operations |
| react-native-share | ^12.2.2 | Native share dialog |
| @react-native-camera-roll/camera-roll | ^7.10.2 | Photo library access |
| react-native-view-shot | ^4.0.3 | Component-to-image capture |
| @react-native-community/datetimepicker | ^8.6.0 | Date/time selection |
| react-native-safe-area-context | ^5.5.2 | Safe area handling |

### Development Tools

- **Linting:** ESLint with React Native config
- **Formatting:** Prettier (v2.8.8)
- **Testing:** Jest with React Test Renderer
- **Build:** Metro bundler
- **Package Manager:** npm

---

## Architecture Overview

### Project Structure

```
QRGenerator/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   │   ├── FormInput.tsx
│   │   │   ├── PillTabs.tsx
│   │   │   ├── SegmentedControl.tsx
│   │   │   ├── SettingsPanel.tsx
│   │   │   └── TabContent.tsx
│   │   ├── forms/           # QR type-specific forms
│   │   │   ├── CalendarForm.tsx
│   │   │   ├── EmailForm.tsx
│   │   │   ├── SMSForm.tsx
│   │   │   ├── URLForm.tsx
│   │   │   └── WiFiForm.tsx
│   │   ├── QRCodeDisplay.tsx    # QR rendering component
│   │   └── QRGeneratorScreen.tsx # Main screen
│   ├── contexts/
│   │   ├── ThemeContext.tsx     # Theme management
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useQRActions.ts      # Export/share logic
│   │   └── useQRGenerator.ts    # QR generation state
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   └── utils/
│       ├── constants.ts         # App constants
│       └── qrPayloads.ts        # Payload generators
├── android/                 # Android native code
├── ios/                     # iOS native code
├── __tests__/               # Jest tests
└── App.tsx                  # Entry point
```

### State Management

- **React Context API:** Theme management via `ThemeContext`
- **Custom Hooks:**
  - `useQRGenerator`: Form state and QR generation logic
  - `useQRActions`: Export, share, and save operations
  - `useTheme`: Theme context consumer
- **Local Component State:** Form inputs via `useState`
- **Memoization:** Performance optimization via `useMemo` and `useCallback`

### Design Patterns

1. **Component Composition:** Modular, reusable components
2. **Separation of Concerns:** Business logic in hooks, presentation in components
3. **Type Safety:** Comprehensive TypeScript interfaces and types
4. **Theme Abstraction:** Centralized color management
5. **Form Specialization:** Dedicated forms for each QR type

---

## Design System

### 321 GROW Branding

The app uses the **321 GROW brand book** design system:

**Primary Colors:**
- Navy: `#001437`
- Yellow: `#FDE300`
- White: `#ffffff`

**Accent Colors:**
- Green: `#00B65E`
- Blue: `#0038FF`

**Signature Element:**
- Tri-color stripe (yellow, green, blue) appearing on QR display and footer

### Theme Modes

**Dark Mode (Default):**
- Navy background
- Dark surface colors
- White text
- Yellow accents

**Light Mode:**
- White background
- Light gray surfaces
- Dark text
- Navy buttons with yellow highlights

### Typography

- **Font:** Montserrat-Bold (logo)
- **Weights:** 500-700
- **Sizes:** 11-18px

---

## QR Code Standards

The app follows industry-standard QR code formats:

1. **URL:** Standard HTTP/HTTPS URLs
2. **WiFi:** `WIFI:T:{type};S:{ssid};P:{password};H:{hidden};;`
3. **Calendar:** iCalendar VEVENT format (RFC 5545)
4. **SMS:** `SMSTO:{number}:{message}`
5. **Email:** `mailto:{email}?subject={subject}&body={body}`

---

## Development Workflow

### Prerequisites

- Node.js ≥20
- React Native development environment
- iOS: Xcode, CocoaPods
- Android: Android Studio, JDK

### Setup

```bash
# Install dependencies
npm install

# iOS: Install CocoaPods
bundle install
bundle exec pod install

# Start Metro
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

### Scripts

- `npm start` - Start Metro bundler
- `npm run ios` - Build and run iOS app
- `npm run android` - Build and run Android app
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests

---

## Performance Considerations

- **Memoization:** `useMemo` for payload generation, `useCallback` for action handlers
- **Lazy Rendering:** Conditional rendering of date pickers
- **Optimized Re-renders:** Theme context prevents unnecessary re-renders
- **Native Modules:** Leverage native APIs for sharing and clipboard

---

## Security & Privacy

- **No Backend:** All QR generation happens locally on device
- **No Data Collection:** No analytics or tracking
- **Private Data:** WiFi passwords, emails never leave device
- **Safe Escaping:** Special characters properly escaped in WiFi payloads
- **URL Validation:** Auto-correction for URL format

---

## Accessibility

- **Safe Area Support:** Handles notches and system UI
- **Keyboard Avoidance:** KeyboardAvoidingView for input forms
- **Theme Support:** Dark/light modes for visual accessibility
- **Clear Labels:** All inputs have descriptive labels
- **Touch Targets:** Adequate button sizing for touch interaction

---

## Future Roadmap

Potential enhancements:
- QR code scanning (reverse functionality)
- History/favorites of generated QR codes
- Additional QR types (vCard, phone calls, crypto wallets)
- Custom color/logo overlay on QR codes
- Batch QR generation
- Cloud sync for saved QR codes

---

## Testing

### Current Coverage

- **Unit Tests:** Basic smoke test for App component
- **Testing Framework:** Jest + React Test Renderer

### Testing Strategy

- Component rendering tests
- Hook logic tests
- Payload generation validation
- Theme switching tests
- Export/share functionality tests

---

## Maintenance & Support

**Powered by:** 321 Tech Lab
**Copyright:** © 2026 QR Generator

For issues, feature requests, or contributions, refer to the development team.

---

## File Inventory

### Source Files (20 files)

**Components:** 11 files
**Hooks:** 2 files
**Contexts:** 1 file
**Types:** 1 file
**Utils:** 2 files
**Tests:** 1 file
**Root:** 2 files (App.tsx, index.js)

### Total Lines of Code

- **TypeScript/TSX:** ~2,000 lines
- **Configuration:** ~300 lines
- **Documentation:** ~200 lines (with this summary)

---

## Conclusion

QRGenerator is a production-ready, feature-rich QR code generation tool built with modern React Native best practices. Its modular architecture, comprehensive type safety, and adherence to industry standards make it maintainable, scalable, and user-friendly.

**Built with ❤️ by 321 Tech Lab**
