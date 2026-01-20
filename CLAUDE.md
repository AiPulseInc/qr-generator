# CLAUDE.md - Project Context for AI Assistants

## Project Overview

**QRGenerator** is a production-ready React Native mobile application (iOS/Android) for generating, customizing, and sharing QR codes. The app is built with TypeScript and follows modern React Native best practices with comprehensive documentation.

**Current Status:** App development complete, ready for App Store submission.
**Version:** 0.0.1
**Last Updated:** 2026-01-19

---

## Critical Context for Future Sessions

### Project State (As of 2026-01-19)

1. **Application Development:** COMPLETE
   - Full-featured QR code generator with 5 formats (URL, WiFi, Calendar, SMS, Email)
   - Professional UI with 321 GROW branding (dark/light themes)
   - Export/share functionality fully implemented
   - All native integrations working (clipboard, share, camera roll)

2. **App Store Preparation:** COMPLETE
   - All 5 App Store submission documents created and comprehensive
   - Ready for first-time iOS publisher to begin submission process
   - Privacy policy prepared and ready to host

3. **Documentation Status:** COMPREHENSIVE
   - Technical documentation complete (architecture, API, contributing)
   - App Store documentation package complete (see below)
   - All documentation written for first-time publisher audience

---

## Developer Account & Contact Information

### Apple Developer Account
- **Apple ID:** info@aipulse.pl
- **Previous Apple ID:** maciek@konieczny.pl (changed 2026-01-20)
- **Note:** Update Xcode Preferences → Accounts when setting up for submission

### Contact Information
- **Support Email:** info@aipulse.pl (used in all App Store documentation)
- **Developer Brand:** 321 GROW / 321 Tech Lab
- **Copyright:** © 2025 321 GROW

### Important URLs (To Be Set Up)
- **Privacy Policy URL:** TBD (must host PRIVACY_POLICY.md before submission)
- **Support URL:** TBD (can use GitHub repo or create dedicated page)
- **Marketing URL:** TBD (optional)

---

## Recent Major Changes

### Session: 2026-01-19 (App Store Submission Planning)

**Accomplishment:** Created complete App Store submission documentation package

**Files Created:**
1. `APP_STORE_LISTING.md` (13KB) - Complete App Store metadata and marketing content
2. `APP_STORE_SCREENSHOTS_GUIDE.md` (19KB) - Screenshot requirements and best practices
3. `APP_STORE_SUBMISSION_GUIDE.md` (39KB) - Step-by-step submission walkthrough
4. `APP_STORE_ASSETS_CHECKLIST.md` (19KB) - Interactive checklist with status tracking
5. `PRIVACY_POLICY.md` (14KB) - Production-ready privacy policy

**Design Decisions:**
- All documentation written specifically for first-time iOS app publishers
- Comprehensive step-by-step approach with no assumptions of prior knowledge
- Interactive checklist format for tracking submission progress
- Privacy policy designed to be hosted on GitHub Pages or similar service
- Emphasis on Apple's specific requirements and common pitfalls

---

## Project Architecture

### Technology Stack

**Core:**
- React Native 0.83.1
- React 19.2.0
- TypeScript 5.8.3
- Node.js >= 20

**Key Dependencies:**
- `react-native-qrcode-svg@^6.3.21` - QR code generation
- `react-native-svg@^15.15.1` - SVG rendering
- `@react-native-clipboard/clipboard@^1.16.3` - Clipboard operations
- `react-native-share@^12.2.2` - Native sharing
- `@react-native-camera-roll/camera-roll@^7.10.2` - Photo library access
- `react-native-view-shot@^4.0.3` - Component screenshot capture

### Project Structure

```
QRGenerator/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   ├── forms/           # QR type-specific forms (5 types)
│   │   ├── QRCodeDisplay.tsx
│   │   └── QRGeneratorScreen.tsx
│   ├── contexts/            # ThemeContext for dark/light mode
│   ├── hooks/               # useQRGenerator, useQRActions
│   ├── types/               # TypeScript definitions
│   └── utils/               # Constants and QR payload generators
├── ios/                     # iOS native code
├── android/                 # Android native code
└── App.tsx                  # Application entry point
```

### State Management Pattern

- **React Context API** for global theme state
- **Custom Hooks** for business logic separation
- **Local Component State** for form inputs
- **Memoization** for performance optimization

### Design System

**321 GROW Branding:**
- Primary Colors: Navy (#001437), Yellow (#FDE300)
- Accent Colors: Green (#00B65E), Blue (#0038FF)
- Signature: Tri-color stripe (yellow/green/blue)
- Typography: Montserrat-Bold
- Theme Support: Full dark/light mode implementation

---

## Coding Standards and Conventions

### TypeScript Usage

- Strict mode enabled
- Comprehensive type definitions in `src/types/index.ts`
- No implicit `any` types
- Interface over type for object shapes
- Proper return type annotations on functions

### Component Patterns

```typescript
// Functional components with TypeScript
interface Props {
  value: string;
  onValueChange: (value: string) => void;
}

export const ComponentName: React.FC<Props> = ({ value, onValueChange }) => {
  // Implementation
};
```

### Custom Hook Pattern

```typescript
export const useCustomHook = () => {
  // State and logic

  return {
    // Returned API
  };
};
```

### Styling Convention

- StyleSheet.create for all styles
- Theme-aware styling via useTheme hook
- Consistent spacing using multiples of 4
- Platform-specific adjustments when needed

### File Naming

- Components: PascalCase (e.g., `FormInput.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useQRGenerator.ts`)
- Utils: camelCase (e.g., `qrPayloads.ts`)
- Types: `index.ts` in types directory

---

## QR Code Implementation Details

### Supported Formats

1. **URL QR Codes**
   - Auto-corrects missing https://
   - Default value: www.321grow.pl
   - Standard HTTP/HTTPS format

2. **WiFi QR Codes**
   - Format: `WIFI:T:{type};S:{ssid};P:{password};H:{hidden};;`
   - Types: WPA, WEP, nopass
   - Auto-escapes special characters (\, ;, :, ")
   - Hidden network support

3. **Calendar/Event QR Codes**
   - iCalendar VEVENT format (RFC 5545)
   - All-day event support
   - Date/time pickers for start/end
   - Location and description fields

4. **SMS QR Codes**
   - Format: `SMSTO:{number}:{message}`
   - Phone number keyboard type
   - Auto-formats input

5. **Email QR Codes**
   - Format: `mailto:{email}?subject={}&body={}`
   - URL-encoded subject and body
   - Email keyboard type

### Error Correction Levels

- Low: 7% error correction
- Medium: 15% error correction (default)
- High: 30% error correction

### Size Options

- Small: 150px
- Medium: 200px (default)
- Large: 300px

---

## Important Implementation Notes

### Known Technical Considerations

1. **iOS Permissions Required:**
   - NSPhotoLibraryAddUsageDescription (for saving to camera roll)
   - Already configured in Info.plist

2. **Export Functionality:**
   - Uses `react-native-view-shot` for high-quality PNG capture
   - View-based capture ensures consistent output quality
   - All exports are client-side (no server communication)

3. **Privacy & Security:**
   - No backend/server communication
   - No analytics or tracking
   - All data processing happens on-device
   - No data collection or storage

4. **Performance Optimizations:**
   - Memoized payload generation
   - Optimized re-renders with proper dependency arrays
   - Lazy rendering of date/time pickers

### Common Development Commands

```bash
# Start Metro bundler
npm start

# Run iOS simulator
npm run ios

# Run Android emulator
npm run android

# Lint code
npm run lint

# Run tests
npm test

# iOS: Reinstall pods
cd ios && bundle exec pod install && cd ..
```

---

## Documentation Inventory

### Technical Documentation

1. **README.md** - Getting started, setup, basic usage
2. **PROJECT_SUMMARY.md** - Comprehensive project overview
3. **ARCHITECTURE.md** - Technical architecture deep dive
4. **API_DOCUMENTATION.md** - Component and hook API reference
5. **CONTRIBUTING.md** - Development guidelines and standards

### App Store Documentation (Created 2026-01-19)

1. **APP_STORE_LISTING.md** - App Store metadata template
   - App name, subtitle, description
   - Keywords and promotional text
   - Category and pricing information
   - Screenshots captions and previews

2. **APP_STORE_SCREENSHOTS_GUIDE.md** - Screenshot best practices
   - Required sizes for all iPhone models
   - Design guidelines and recommendations
   - Content suggestions for each QR type
   - Branding consistency guidelines

3. **APP_STORE_SUBMISSION_GUIDE.md** - Complete submission walkthrough
   - Apple Developer Program enrollment
   - Xcode configuration and signing
   - App Store Connect setup
   - TestFlight process
   - Submission and review process
   - Post-submission tasks

4. **APP_STORE_ASSETS_CHECKLIST.md** - Interactive progress tracker
   - Pre-submission checklist
   - Asset preparation checklist
   - Build preparation checklist
   - App Store Connect checklist
   - Submission checklist
   - Status tracking with dates

5. **PRIVACY_POLICY.md** - Production-ready privacy policy
   - Required for App Store submission
   - Formatted for web hosting
   - No-data-collection focus
   - Contact information included

### Design Documentation

1. **design-system.json** - 321 GROW brand color system
2. **brand book 321 grow (expanded version).md** - Full brand guidelines

---

## Next Steps and Priorities

### Immediate Priority: App Store Submission

The application is 100% development-complete. The next phase is **App Store submission preparation**, which requires the developer to:

1. **Create App Icon** (Not yet completed)
   - 1024x1024px PNG required
   - Must follow design guidelines in screenshots guide
   - Should incorporate 321 GROW branding

2. **Generate Screenshots** (Not yet completed)
   - Follow `APP_STORE_SCREENSHOTS_GUIDE.md`
   - Minimum: 6.7" and 6.9" iPhone sizes
   - Recommended: All required sizes

3. **Host Privacy Policy** (Not yet completed)
   - Upload `PRIVACY_POLICY.md` to web host
   - Get public URL for App Store Connect
   - Suggested: GitHub Pages or Netlify

4. **Apple Developer Account** (Status unknown)
   - Enroll in Apple Developer Program ($99/year)
   - Complete enrollment verification
   - Accept agreements in App Store Connect

5. **Configure Xcode Project** (Not yet completed)
   - Set bundle identifier
   - Configure signing certificates
   - Set version and build numbers
   - Test on physical device

6. **Create App Store Connect Listing** (Not yet completed)
   - Follow `APP_STORE_SUBMISSION_GUIDE.md`
   - Use content from `APP_STORE_LISTING.md`
   - Upload screenshots and app icon
   - Complete all required metadata

7. **Build and Submit** (Not yet completed)
   - Archive app in Xcode
   - Upload to App Store Connect
   - Submit for review

### Future Enhancements (Post-Launch)

- QR code scanning functionality (reverse operation)
- QR code history/favorites
- Additional QR formats (vCard, phone calls, crypto wallets)
- Custom QR colors and logo overlays
- Batch QR generation
- Cloud sync for saved QR codes

---

## Common Pitfalls and Solutions

### Development Issues

**Metro Bundler Cache Issues:**
```bash
npm start -- --reset-cache
```

**iOS Pod Installation Problems:**
```bash
cd ios
rm -rf Pods Podfile.lock
bundle exec pod install
cd ..
```

**Android Build Failures:**
```bash
cd android
./gradlew clean
cd ..
```

### App Store Submission Common Issues

1. **Missing Privacy Policy URL** - Must be hosted and accessible
2. **Screenshot Size Mismatches** - Use exact pixel dimensions from guide
3. **App Icon Not Meeting Guidelines** - No transparency, correct size
4. **Incomplete Metadata** - All required fields must be filled
5. **Missing Test Account** - Provide if app requires login (N/A for this app)

---

## Communication Preferences

### Documentation Style

- Clear, professional technical writing
- No emojis unless explicitly requested
- Comprehensive explanations for first-time users
- Step-by-step instructions with examples
- Assume reader may be unfamiliar with iOS development

### Code Style

- Descriptive variable and function names
- Comments for complex logic
- TypeScript for all new code
- Consistent formatting with Prettier

---

## Important File Paths

### Source Code
- Entry point: `/Users/mk/code-sandbox/QRGenerator/App.tsx`
- Components: `/Users/mk/code-sandbox/QRGenerator/src/components/`
- Hooks: `/Users/mk/code-sandbox/QRGenerator/src/hooks/`
- Types: `/Users/mk/code-sandbox/QRGenerator/src/types/`
- Utils: `/Users/mk/code-sandbox/QRGenerator/src/utils/`

### Configuration
- Package: `/Users/mk/code-sandbox/QRGenerator/package.json`
- TypeScript: `/Users/mk/code-sandbox/QRGenerator/tsconfig.json`
- iOS: `/Users/mk/code-sandbox/QRGenerator/ios/QRGenerator.xcworkspace`
- Android: `/Users/mk/code-sandbox/QRGenerator/android/`

### Documentation
- All `.md` files in project root
- App Store docs: `APP_STORE_*.md` and `PRIVACY_POLICY.md`

---

## Project Metadata

**Developer:** 321 Tech Lab
**Copyright:** © 2026 QR Generator
**License:** Private
**Target Markets:** iOS App Store (primary), Google Play Store (future)
**Monetization:** Free (as of v0.0.1)
**Support Contact:** (To be added in privacy policy)

---

## Session History Summary

### 2026-01-19: App Store Documentation Creation
- Created complete App Store submission package
- 5 comprehensive documents totaling ~103KB of content
- All documentation tailored for first-time publishers
- Project now submission-ready pending asset creation

### Prior to 2026-01-19: Application Development
- Full application development completed
- Comprehensive technical documentation created
- All features implemented and tested
- Ready for production deployment

---

## Instructions for AI Assistants

When continuing work on this project:

1. **Read this file first** to understand current state
2. **Check SESSION_LOG.md** for detailed session history
3. **Review NEXT_SESSION.md** for immediate priorities
4. **Follow established patterns** in existing code
5. **Update this file** when making architectural changes
6. **Maintain documentation** alongside code changes
7. **Preserve branding** (321 GROW design system)

### Key Points to Remember

- App is COMPLETE and ready for App Store submission
- User is a first-time iOS publisher (assume minimal prior knowledge)
- All documentation should be comprehensive and beginner-friendly
- No backend or server components (fully client-side)
- Privacy and security are paramount (no data collection)
- Branding must follow 321 GROW design system
- TypeScript strict mode is enforced

---

**Last Updated:** 2026-01-19
**Updated By:** Claude (Session Close-Out)
**Next Review:** After first App Store submission attempt
