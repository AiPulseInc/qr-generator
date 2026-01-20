# QRGenerator

> A professional React Native mobile application for generating, customizing, and sharing QR codes across multiple formats.

<div align="center">

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)
![React Native](https://img.shields.io/badge/React%20Native-0.83.1-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6.svg)
![License](https://img.shields.io/badge/license-Private-red.svg)

**Powered by 321 Tech Lab**

</div>

---

## Features

### 🔗 Multiple QR Code Types

- **URL** - Generate scannable web links
- **WiFi** - Share network credentials (WPA/WEP/Open)
- **Calendar** - Create iCalendar event invitations
- **SMS** - Pre-filled text messages with phone numbers
- **Email** - Mailto links with subject and body

### ⚙️ Customization

- **Error Correction:** Low (7%), Medium (15%), High (30%)
- **Size Presets:** Small (150px), Medium (200px), Large (300px)
- **Themes:** Dark mode and light mode with 321 GROW branding

### 📤 Export & Share

- Copy QR code image to clipboard
- Share via native platform sharing
- Save to photo library
- Copy QR payload data

---

## Screenshots

*(Coming soon - add screenshots of the app in action)*

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** ≥ 20
- **npm** or **yarn**
- **React Native development environment** - [Setup Guide](https://reactnative.dev/docs/set-up-your-environment)

#### For iOS Development:
- Xcode (latest stable version)
- CocoaPods
- Ruby (for bundler)

#### For Android Development:
- Android Studio
- JDK 11+
- Android SDK

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd QRGenerator
   ```

2. **Install JavaScript dependencies**
   ```bash
   npm install
   ```

3. **Install iOS dependencies** (iOS only, first time setup)
   ```bash
   # Install Ruby bundler
   bundle install

   # Install CocoaPods dependencies
   bundle exec pod install --project-directory=ios
   ```

### Running the App

#### Start Metro Bundler

```bash
npm start
```

#### Run on iOS

```bash
npm run ios
```

Or open `ios/QRGenerator.xcworkspace` in Xcode and run from there.

#### Run on Android

```bash
npm run android
```

Or open the `android` folder in Android Studio and run from there.

---

## Project Structure

```
QRGenerator/
├── src/
│   ├── components/        # React components
│   │   ├── common/        # Reusable UI components
│   │   ├── forms/         # QR type-specific forms
│   │   ├── QRCodeDisplay.tsx
│   │   └── QRGeneratorScreen.tsx
│   ├── contexts/          # React Context (theme)
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Helper functions & constants
├── android/               # Android native code
├── ios/                   # iOS native code
├── __tests__/             # Jest tests
├── App.tsx                # App entry point
└── package.json           # Dependencies
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Metro bundler |
| `npm run ios` | Build and run iOS app |
| `npm run android` | Build and run Android app |
| `npm run lint` | Run ESLint code linter |
| `npm test` | Run Jest unit tests |

---

## Technology Stack

### Core

- **React Native** 0.83.1 - Mobile framework
- **React** 19.2.0 - UI library
- **TypeScript** 5.8.3 - Type safety

### Key Libraries

- **react-native-qrcode-svg** - QR code generation
- **react-native-svg** - SVG rendering
- **@react-native-clipboard/clipboard** - Clipboard operations
- **react-native-share** - Native sharing
- **@react-native-camera-roll/camera-roll** - Photo library
- **react-native-view-shot** - Component capture
- **@react-native-community/datetimepicker** - Date/time pickers
- **react-native-safe-area-context** - Safe area support

---

## Architecture

### State Management

- **React Context API** for theme management
- **Custom Hooks** for business logic:
  - `useQRGenerator` - QR generation state and form data
  - `useQRActions` - Export, share, save operations
  - `useTheme` - Theme context consumer

### Design Patterns

- Component composition and reusability
- Separation of concerns (hooks for logic, components for UI)
- TypeScript for compile-time type safety
- Memoization for performance optimization

### Styling

- **Design System:** 321 GROW brand book
- **Theme Support:** Dark/light modes
- **Colors:** Navy, Yellow, Green, Blue (brand colors)
- **Typography:** Montserrat-Bold font family

---

## QR Code Standards

The app follows industry-standard formats:

| Type | Format | Standard |
|------|--------|----------|
| URL | `https://example.com` | HTTP/HTTPS URLs |
| WiFi | `WIFI:T:WPA;S:SSID;P:password;;` | WiFi QR standard |
| Calendar | iCalendar VEVENT | RFC 5545 |
| SMS | `SMSTO:+1234567890:message` | SMS URI scheme |
| Email | `mailto:email@example.com?subject=...` | Mailto URI scheme |

---

## Development

### Code Quality

- **Linter:** ESLint with React Native config
- **Formatter:** Prettier
- **Type Checking:** TypeScript strict mode

### Testing

```bash
npm test
```

Current test coverage includes:
- Component rendering tests
- Basic smoke tests

### Building for Production

#### iOS

```bash
# Open Xcode
open ios/QRGenerator.xcworkspace

# Select "Generic iOS Device" or your device
# Product > Archive
# Follow App Store submission process
```

#### Android

```bash
cd android
./gradlew assembleRelease

# APK location: android/app/build/outputs/apk/release/
```

---

## Troubleshooting

### Common Issues

#### Metro Bundler Issues

```bash
# Clear cache and restart
npm start -- --reset-cache
```

#### iOS Build Errors

```bash
# Clean and reinstall pods
cd ios
rm -rf Pods Podfile.lock
bundle exec pod install
cd ..
```

#### Android Build Errors

```bash
# Clean build
cd android
./gradlew clean
cd ..
```

### Resources

- [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting)
- [React Native Debugging](https://reactnative.dev/docs/debugging)

---

## Documentation

### Technical Documentation

- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Comprehensive project overview
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical architecture details
- **[API_DOCUMENTATION.md](./API_DOCUMENTATION.md)** - Component and hook API reference
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Development guidelines

### App Store Submission Documentation

- **[APP_STORE_SUBMISSION_GUIDE.md](./APP_STORE_SUBMISSION_GUIDE.md)** - Complete step-by-step submission guide
- **[APP_STORE_LISTING.md](./APP_STORE_LISTING.md)** - App Store metadata and marketing content
- **[APP_STORE_SCREENSHOTS_GUIDE.md](./APP_STORE_SCREENSHOTS_GUIDE.md)** - Screenshot requirements and best practices
- **[APP_STORE_ASSETS_CHECKLIST.md](./APP_STORE_ASSETS_CHECKLIST.md)** - Interactive submission checklist
- **[PRIVACY_POLICY.md](./PRIVACY_POLICY.md)** - Privacy policy for App Store submission

### Project Management

- **[CLAUDE.md](./CLAUDE.md)** - AI assistant context and project guidelines
- **[SESSION_LOG.md](./SESSION_LOG.md)** - Development session history
- **[NEXT_SESSION.md](./NEXT_SESSION.md)** - Next steps and priorities

---

## Performance

- **QR Generation:** Instant, client-side rendering
- **Export:** High-quality PNG capture at specified sizes
- **Theming:** Optimized re-renders with React Context
- **Memoization:** Payload generation and action handlers cached

---

## Security & Privacy

- **Local Processing:** All QR generation happens on-device
- **No Backend:** No server communication
- **No Tracking:** No analytics or data collection
- **Secure Storage:** WiFi passwords and sensitive data never leave device

---

## Accessibility

- Safe area support for modern devices
- Keyboard avoidance for input forms
- Dark/light theme support
- Clear labels and adequate touch targets

---

## Roadmap

Potential future enhancements:

- [ ] QR code scanning functionality
- [ ] QR code history/favorites
- [ ] Additional formats (vCard, phone calls, crypto)
- [ ] Custom QR code colors and logos
- [ ] Batch QR generation
- [ ] Cloud sync for saved QR codes

---

## License

Private - All rights reserved

---

## Credits

**Developed by:** 321 Tech Lab
**Copyright:** © 2026 QR Generator
**Brand Design:** 321 GROW Design System

---

## Support

For issues, questions, or feature requests, please contact the development team.

---

## Acknowledgments

Built with the following open-source projects:

- [React Native](https://reactnative.dev/)
- [react-native-qrcode-svg](https://github.com/awesomejerry/react-native-qrcode-svg)
- [react-native-share](https://github.com/react-native-share/react-native-share)
- And many more amazing open-source libraries

---

<div align="center">

**Made with ❤️ by 321 Tech Lab**

</div>
