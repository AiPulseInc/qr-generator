# App Store Screenshots Guide - QRGenerator

## Overview

Screenshots are critical for App Store conversion. They're the first visual impression potential users get of your app. This guide covers requirements, recommendations, and best practices for creating compelling App Store screenshots.

---

## Screenshot Requirements

### Required Sizes for iPhone

For App Store submission, you must provide screenshots for at least ONE of these display sizes:

#### 6.7" Display (iPhone 14 Pro Max, 15 Pro Max, 15 Plus, 16 Pro Max, etc.)
- **Resolution:** 1290 x 2796 pixels (portrait) or 2796 x 1290 pixels (landscape)
- **Status:** REQUIRED (if targeting latest devices)
- **Models:** iPhone 12 Pro Max, 13 Pro Max, 14 Plus, 14 Pro Max, 15 Plus, 15 Pro Max, 16 Pro Max

#### 6.5" Display (iPhone XS Max, 11 Pro Max, etc.)
- **Resolution:** 1242 x 2688 pixels (portrait) or 2688 x 1242 pixels (landscape)
- **Status:** Acceptable alternative to 6.7"
- **Models:** iPhone XS Max, 11 Pro Max

#### 5.5" Display (iPhone 8 Plus, 7 Plus, etc.)
- **Resolution:** 1242 x 2208 pixels (portrait) or 2208 x 1242 pixels (landscape)
- **Status:** For backwards compatibility
- **Models:** iPhone 6s Plus, 7 Plus, 8 Plus

### iPad Screenshots (Optional for iPhone-only apps)
If you want to support iPad:
- **12.9" Display:** 2048 x 2732 pixels
- **11" Display:** 1668 x 2388 pixels

### General Requirements
- **Format:** PNG or JPEG (PNG recommended for quality)
- **Color Space:** sRGB or P3
- **Quantity:** 2-10 screenshots per device size
- **File Size:** Under 500 MB per screenshot (realistically <5 MB)
- **Orientation:** Choose portrait OR landscape (must be consistent)
- **Content:** Must show actual app functionality (no mockups of unreleased features)

---

## Recommended Approach

### Option 1: Minimum Viable (Fastest)
**Create screenshots for 6.7" display only**

Pros:
- Fastest to create
- Covers most modern devices
- Apple scales down for smaller devices

Cons:
- May look less sharp on older devices
- No optimization for different screen sizes

### Option 2: Recommended (Best Quality)
**Create separate screenshots for 6.7", 6.5", and 5.5" displays**

Pros:
- Optimal display on all devices
- Better conversion across device types
- Professional appearance

Cons:
- 3x the work
- More files to manage

### Option 3: Marketing Screenshots (Highest Conversion)
**Create designed marketing screenshots with device frames, text overlays, and branding**

Pros:
- Highest conversion rate
- Professional appearance
- Clearly communicates features
- Stands out in App Store

Cons:
- Requires design skills or tools
- More time intensive
- Must update when app UI changes

**RECOMMENDATION:** Start with Option 1 for initial submission, upgrade to Option 3 for updates.

---

## Screenshots to Capture

### Recommended Screenshot Sequence

You can include 2-10 screenshots. Here's a recommended 5-screenshot sequence:

#### Screenshot 1: Hero Shot (Main Screen with URL QR Code)
**Purpose:** Show the app's primary function immediately

**What to show:**
- Main screen with QR code type selection buttons
- A generated URL QR code prominently displayed
- Clean, professional look
- Ideally in light mode for initial impression

**Why it's first:**
- Immediately shows what the app does
- QR code is recognizable
- Simple and clear

**Caption suggestion:** "Create QR Codes Instantly"

---

#### Screenshot 2: WiFi QR Code Feature
**Purpose:** Highlight the most valuable unique feature

**What to show:**
- WiFi QR code input form filled out
- Generated WiFi QR code
- Labels showing network name
- Clean form layout

**Why it's second:**
- WiFi sharing is a killer feature
- Solves a real pain point
- Differentiates from basic QR apps

**Caption suggestion:** "Share WiFi Without Typing Passwords"

---

#### Screenshot 3: Calendar Event QR Code
**Purpose:** Show versatility and use cases

**What to show:**
- Calendar event form with sample event details
- Generated calendar QR code
- All fields filled (title, location, dates, description)
- Professional event example (business meeting, conference, etc.)

**Why it's third:**
- Shows second major use case
- Appeals to business users
- Demonstrates app depth

**Caption suggestion:** "Shareable Event Invitations"

---

#### Screenshot 4: Customization & Export
**Purpose:** Show flexibility and output options

**What to show:**
- Color picker interface showing color customization
- A colorful QR code (matching brand colors)
- Share sheet OR save confirmation
- Shows the export/save functionality

**Why it's fourth:**
- Demonstrates customization
- Shows save/share capabilities
- Appeals to users who care about branding

**Caption suggestion:** "Customize Colors & Export Anywhere"

---

#### Screenshot 5: All QR Types Overview or Dark Mode
**Purpose:** Show complete feature set or design quality

**Option A - All Types:**
- Grid or list showing all 5 QR code types
- Small preview of each type
- Labels for URL, WiFi, Calendar, SMS, Email

**Option B - Dark Mode:**
- Main screen in dark mode
- Generated QR code in dark mode
- Shows app supports system appearance

**Why it's last:**
- Comprehensive overview
- Shows you haven't missed anything
- Dark mode appeals to many users

**Caption suggestion:**
- Option A: "5 Essential QR Code Types"
- Option B: "Beautiful in Light or Dark Mode"

---

## Screenshot Specifications by Device

### 6.7" Display (Primary Target)

**Dimensions:** 1290 x 2796 pixels

**How to capture:**
1. Run app on iPhone 14 Pro Max or later simulator
2. Use simulator's screenshot feature (Cmd+S)
3. Or use device screenshot (power + volume up)

**Simulator command:**
```bash
# Open simulator for iPhone 15 Pro Max
xcrun simctl list devices
xcrun simctl boot "iPhone 15 Pro Max"
open -a Simulator
```

### 6.5" Display

**Dimensions:** 1242 x 2688 pixels

**How to capture:**
1. Run app on iPhone 11 Pro Max simulator
2. Capture same screens as 6.7" version

### 5.5" Display

**Dimensions:** 1242 x 2208 pixels

**How to capture:**
1. Run app on iPhone 8 Plus simulator
2. Capture same screens as other versions

---

## Design Recommendations

### Basic Screenshots (No Design Tools Required)

If you're taking plain screenshots:

1. **Use Light Mode** for most screenshots (better contrast)
2. **Fill out forms completely** with realistic data
3. **Use professional examples:**
   - URL: https://www.example-business.com
   - WiFi: "Office WiFi" or "Guest Network"
   - Calendar: Business meeting or professional event
   - SMS: Professional context (appointment reminder)
   - Email: Contact/support context

4. **Avoid:**
   - Test data like "test123" or "asdf"
   - Personal information
   - Offensive or inappropriate content
   - Lorem ipsum text
   - Debug information or test IDs

5. **Clean device state:**
   - Full battery
   - Good signal strength
   - Clean time (like 9:41 AM - Apple's default)
   - No notifications in status bar

### Enhanced Screenshots (With Design Tools)

For better conversion, create marketing screenshots:

#### Recommended Tools

**Free Options:**
1. **Figma** (Free tier)
   - Device frames available
   - Text overlay capabilities
   - Export at exact sizes
   - Template: "App Store Screenshot Template"

2. **Canva** (Free tier)
   - Mobile app templates
   - Easy text overlays
   - Device mockups available

3. **Screenshot Creator** (Online)
   - https://theapplaunchpad.com (free tier)
   - Quick device frame wrapping

**Paid Options (Higher Quality):**
1. **Previewed** ($11.99/month)
   - Professional templates
   - Animated screenshots
   - Device frames for all sizes

2. **AppLaunchpad** ($29 one-time)
   - Quick screenshot generation
   - Templates for App Store

3. **RokoMotion** ($12.99/month)
   - Animated app previews
   - Professional quality

#### Design Best Practices

1. **Device Frames:**
   - Use realistic iPhone frames
   - Match frame color to app design (white/black)
   - Centered on canvas

2. **Text Overlays:**
   - **Headline:** 2-5 words, large and bold
   - **Subtext:** One sentence explanation (optional)
   - Use readable fonts (San Francisco, Helvetica, Roboto)
   - High contrast (dark text on light background or vice versa)
   - Don't cover important UI elements

3. **Background:**
   - Solid color matching brand (321 GROW colors)
   - Subtle gradient
   - Clean and uncluttered
   - Consistent across all screenshots

4. **Branding:**
   - Include small logo or brand mark
   - Use brand colors consistently
   - Professional and clean

5. **Layout:**
   - Leave space around device frame
   - Top or bottom area for text
   - Consistent positioning across screenshots

#### Example Layout

```
┌─────────────────────────────┐
│                             │
│   CREATE QR CODES           │ ← Headline (40-60pt)
│   INSTANTLY                 │
│                             │
│   ┌─────────────────────┐   │
│   │                     │   │
│   │   [iPhone Frame]    │   │ ← Device with screenshot
│   │   [App Screenshot]  │   │
│   │                     │   │
│   └─────────────────────┘   │
│                             │
│   Share URLs, WiFi,         │ ← Subtext (20-30pt)
│   events, and more          │
│                             │
└─────────────────────────────┘
```

---

## Sample Text Overlays for Each Screenshot

### Screenshot 1
**Headline:** "Create QR Codes Instantly"
**Subtext:** "5 essential types for every need"

### Screenshot 2
**Headline:** "Share WiFi Networks"
**Subtext:** "No more typing passwords"

### Screenshot 3
**Headline:** "Event Invitations Made Easy"
**Subtext:** "Calendar QR codes with full details"

### Screenshot 4
**Headline:** "Customize & Export"
**Subtext:** "Choose any color, save anywhere"

### Screenshot 5
**Headline:** "Privacy First"
**Subtext:** "Everything stays on your device"

---

## Color Scheme Suggestions

### Based on 321 GROW Branding

If your brand uses specific colors, use them. Otherwise, consider:

**Professional Blue:**
- Background: #F0F4F8 (light blue-grey)
- Accent: #2563EB (professional blue)
- Text: #1E293B (dark grey-blue)

**Modern Purple:**
- Background: #FAF5FF (light purple)
- Accent: #7C3AED (vibrant purple)
- Text: #1E293B (dark grey)

**Clean Minimal:**
- Background: #FFFFFF (white)
- Accent: #000000 (black)
- Text: #1F2937 (charcoal)

**Tech Green:**
- Background: #F0FDF4 (light green)
- Accent: #059669 (professional green)
- Text: #064E3B (dark green)

---

## How to Capture Screenshots

### Method 1: iOS Simulator (Recommended for consistency)

1. **Open Xcode**
   ```bash
   cd /Users/mk/code-sandbox/QRGenerator/ios
   open QRGenerator.xcworkspace
   ```

2. **Select device:**
   - iPhone 15 Pro Max (for 6.7" screenshots)
   - Run the app (Cmd+R)

3. **Prepare the screen:**
   - Navigate to desired screen
   - Fill in sample data
   - Remove any debug information

4. **Take screenshot:**
   - **Simulator menu:** Device → Screenshot (Cmd+S)
   - Saves to Desktop by default

5. **Repeat for each screenshot**

6. **Repeat for other device sizes:**
   - Switch to iPhone 11 Pro Max (6.5")
   - Switch to iPhone 8 Plus (5.5")
   - Capture same sequence

### Method 2: Physical Device

1. **Install app on device** (via Xcode or TestFlight)

2. **Take screenshots:**
   - **iPhone with Face ID:** Press Side Button + Volume Up
   - **iPhone with Home Button:** Press Home + Power Button

3. **Transfer to Mac:**
   - AirDrop to Mac
   - Or sync via Photos app

4. **Verify dimensions:**
   - Check that screenshots match required dimensions
   - Use Preview or Image editor to verify

### Method 3: Third-Party Tools

**Fastlane Snapshot:**
Automate screenshot capture across multiple devices.

```bash
# Install fastlane
sudo gem install fastlane

# Generate screenshots
fastlane snapshot
```

Requires setup but saves time if you update frequently.

---

## Screenshot Editing

### Minimal Editing (Quick)

If using plain screenshots:

1. **Verify dimensions** match App Store requirements
2. **Crop if needed** to exact specifications
3. **Verify orientation** (all portrait or all landscape)
4. **Check quality** - no blurriness or artifacts
5. **Save as PNG** for best quality

### Enhanced Editing (Professional)

If creating marketing screenshots:

1. **Import to design tool** (Figma, Canva, etc.)
2. **Add device frame** (choose matching iPhone model)
3. **Place screenshot** in device frame
4. **Add background** (solid color or gradient)
5. **Add text overlays** (headline, subtext)
6. **Add branding** (small logo, if desired)
7. **Export at exact dimensions** required by App Store
8. **Verify file size** (<500 MB, ideally <5 MB)

---

## App Preview Video (Optional but Recommended)

### Requirements

- **Duration:** 15-30 seconds
- **Format:** .mov, .m4v, or .mp4
- **Resolution:** Same as screenshot sizes (e.g., 1290x2796 for 6.7")
- **File Size:** Up to 500 MB
- **Audio:** Optional (recommended for narration)
- **Captions:** Recommended for accessibility

### What to Show

**Recommended 30-second flow:**

1. **Seconds 0-5:** App launch, show main screen
2. **Seconds 5-12:** Select URL QR code, fill in URL, watch QR generate
3. **Seconds 12-18:** Show WiFi QR code generation
4. **Seconds 18-23:** Demonstrate color customization
5. **Seconds 23-28:** Save to library and share
6. **Seconds 28-30:** Show app icon and tagline

### Tools for Creating App Previews

**Free:**
- **QuickTime Player** - Basic screen recording
- **iMovie** - Simple editing and trimming

**Paid:**
- **Final Cut Pro** - Professional editing
- **Adobe Premiere** - Advanced editing
- **ScreenFlow** - Screen recording and editing

### Recording Tips

1. **Use simulator** for perfect screen recording
2. **Plan your flow** before recording
3. **Move slowly** - users need time to see
4. **Show key features** only (don't try to show everything)
5. **Add subtle music** (optional, use royalty-free)
6. **Add text callouts** to highlight features
7. **Test on mute** - many users watch without sound

---

## Localization

### Initial Release
Start with **English (US)** only.

### Future Updates
Consider adding screenshots for:

1. **Spanish** - Second largest market in US
2. **Chinese (Simplified)** - Large iOS market
3. **Japanese** - High-spending iOS users
4. **German, French, Italian** - European markets

**Note:** You'll need to:
- Localize all app text
- Retake screenshots in each language
- Translate marketing text overlays

---

## Quality Checklist

Before uploading screenshots to App Store Connect:

- [ ] All screenshots are at correct dimensions
- [ ] File format is PNG or JPEG
- [ ] Screenshots show actual app functionality (no mockups)
- [ ] No placeholder or test data visible
- [ ] All text is readable and professional
- [ ] Consistent orientation (all portrait or all landscape)
- [ ] Clean status bar (time, battery, signal)
- [ ] All screenshots are in same order across device sizes
- [ ] Marketing text (if used) has no typos
- [ ] Colors match brand guidelines
- [ ] Screenshots don't show unreleased features
- [ ] Images are high quality (no blurriness or pixelation)
- [ ] File sizes are reasonable (<5 MB each)
- [ ] Screenshots accurately represent the app

---

## Upload Process

### In App Store Connect

1. **Login** to https://appstoreconnect.apple.com
2. **Navigate** to your app → App Store tab
3. **Scroll** to "App Preview and Screenshots"
4. **Select device size** (6.7", 6.5", or 5.5")
5. **Drag and drop** screenshots in desired order
6. **Reorder** if needed (first screenshot is most important!)
7. **Repeat** for other device sizes (if applicable)
8. **Save** changes

**Important:**
- First screenshot appears in search results
- Order matters for conversion
- You can update screenshots with any app update

---

## Testing Your Screenshots

### A/B Test Ideas (After Launch)

1. **Headline variations** - Test different value propositions
2. **Screenshot order** - Try different feature sequences
3. **Design style** - Plain vs. device frames vs. graphic design
4. **Text vs. no text** - Compare conversion rates
5. **Light vs. dark mode** - See which performs better

**Note:** App Store doesn't have built-in A/B testing, but you can:
- Update screenshots with app updates
- Monitor download rates before/after changes
- Use external attribution tools to measure impact

---

## Common Mistakes to Avoid

1. **Wrong dimensions** - Uploads will fail
2. **Inconsistent orientation** - Choose portrait OR landscape, not mixed
3. **Too much text** - Screenshots should show the app, not be ads
4. **Outdated screenshots** - Update when UI changes
5. **Test/debug data** - Looks unprofessional
6. **Poor quality images** - Blurry or pixelated screenshots hurt conversion
7. **Feature mismatch** - Screenshots must match current app version
8. **Too many screenshots** - 5-7 is optimal; 10 is overwhelming
9. **Boring first screenshot** - Lead with your best feature
10. **No call to action** - Screenshots should guide the eye

---

## Resources

### Official Apple Documentation
- **Screenshot Specifications:** https://help.apple.com/app-store-connect/#/devd274dd925
- **App Preview Specifications:** https://help.apple.com/app-store-connect/#/dev4e413fcb8
- **Marketing Guidelines:** https://developer.apple.com/app-store/marketing/guidelines/

### Design Tools
- **Figma:** https://www.figma.com (free tier available)
- **Canva:** https://www.canva.com (free tier available)
- **Previewed:** https://previewed.app (paid, high quality)
- **AppLaunchpad:** https://theapplaunchpad.com (freemium)

### Device Frame Resources
- **Facebook Design:** https://facebook.design/devices (free device mockups)
- **Apple Design Resources:** https://developer.apple.com/design/resources/

### Screenshot Inspiration
- Browse top apps in Utilities category
- Look at featured apps on App Store
- Check competitors' screenshot strategies

---

## Timeline Estimate

### Basic Screenshots (Plain, no design)
- **Capturing:** 30 minutes to 1 hour
- **Light editing:** 15-30 minutes
- **Upload:** 15 minutes
- **Total:** ~2 hours

### Enhanced Screenshots (With design/frames)
- **Capturing:** 30 minutes
- **Design work:** 2-4 hours (first time)
- **Iterations:** 1-2 hours
- **Upload:** 15 minutes
- **Total:** ~4-7 hours

### With App Preview Video
- **Recording:** 1 hour
- **Editing:** 2-3 hours
- **Export and upload:** 30 minutes
- **Total:** Add ~4 hours

**Recommendation:** Start with basic screenshots for initial submission. Upgrade to enhanced screenshots after launch when you have more time.

---

## Next Steps

1. **Decide on approach:** Basic vs. Enhanced screenshots
2. **Prepare sample data:** Create realistic examples for each QR type
3. **Set up simulator:** Choose device sizes to target
4. **Capture screenshots:** Follow the 5-screenshot sequence
5. **Edit if desired:** Add frames, text, branding
6. **Verify quality:** Check all requirements
7. **Upload to App Store Connect:** Add to your app listing

---

**Document Version:** 1.0
**Last Updated:** January 2025
**Status:** Ready to use for screenshot creation
