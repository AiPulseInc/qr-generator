# App Store Submission Guide - QRGenerator

## Complete Step-by-Step Guide for First-Time Publishers

This guide walks you through the entire App Store submission process from start to finish. As this is your first iOS app submission, every step is explained in detail.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Apple Developer Program Enrollment](#apple-developer-program-enrollment)
3. [App Store Connect Setup](#app-store-connect-setup)
4. [Xcode Project Configuration](#xcode-project-configuration)
5. [Building and Archiving](#building-and-archiving)
6. [Uploading to App Store Connect](#uploading-to-app-store-connect)
7. [Completing App Store Information](#completing-app-store-information)
8. [Submitting for Review](#submitting-for-review)
9. [Review Process](#review-process)
10. [After Approval](#after-approval)
11. [Common Rejection Reasons](#common-rejection-reasons)
12. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have:

### Required

- [ ] **Mac computer** with macOS 12.0 or later
- [ ] **Xcode 14.0+** installed from Mac App Store
- [ ] **React Native development environment** set up
- [ ] **QRGenerator app** building successfully in Xcode
- [ ] **Test iPhone device** (physical device recommended)
- [ ] **Apple ID** (your existing one or create a new one)
- [ ] **Payment method** (credit/debit card for $99/year enrollment)
- [ ] **Legal entity information** (individual or company)
- [ ] **Government-issued ID** (for identity verification)
- [ ] **Phone number** with SMS capability (for two-factor authentication)

### Recommended

- [ ] Test device with latest iOS version
- [ ] Backup of your project
- [ ] Git repository with committed code
- [ ] Privacy policy hosted online
- [ ] Support page/email set up
- [ ] App screenshots prepared (see APP_STORE_SCREENSHOTS_GUIDE.md)
- [ ] App icon finalized (1024x1024px)

### Estimated Costs

- **Apple Developer Program:** $99/year (required)
- **App submission:** Free (included in membership)
- **Design tools (optional):** $0-50 for screenshot design tools

### Estimated Time

- **Apple Developer enrollment:** 1-2 days (includes verification)
- **App Store Connect setup:** 2-4 hours (first time)
- **Xcode configuration:** 1-2 hours
- **Build and upload:** 30 minutes to 1 hour
- **Metadata entry:** 1-2 hours
- **Review process:** 1-7 days (typically 24-48 hours)
- **Total:** ~1-2 weeks from start to App Store

---

## Apple Developer Program Enrollment

### Step 1: Visit Apple Developer Website

1. Go to https://developer.apple.com/programs/
2. Click **"Enroll"** button
3. Click **"Start Your Enrollment"**

### Step 2: Sign In with Apple ID

1. Sign in with your existing Apple ID
   - **Recommendation:** Use a professional email if submitting as a business
   - Can use personal Apple ID for individual developer account

2. Enable **Two-Factor Authentication** (if not already enabled)
   - Go to https://appleid.apple.com
   - Security → Two-Factor Authentication
   - Follow prompts to set up

### Step 3: Choose Account Type

**Individual Account:**
- Uses your personal name as developer name
- You as individual are the legal entity
- Simpler process
- Apps show your name as developer
- **Choose this if:** Indie developer, side project, personal app

**Organization Account:**
- Uses company/organization name
- Requires D-U-N-S number (free but takes 1-2 weeks)
- More verification required
- Apps show company name
- **Choose this if:** Registered business, want company branding

**For QRGenerator (321 Tech Lab/321 GROW):**
- If 321 GROW is a registered business → Organization account
- If personal project using 321 GROW as brand → Individual account (you can still brand the app as 321 GROW)

### Step 4: Accept Apple Developer Agreement

1. Read the Apple Developer Program License Agreement
2. Check the box to agree
3. Click **"Continue"**

### Step 5: Complete Enrollment Form

Fill out:
- **Legal Entity Name:** Your name or company name
- **Contact Information:** Email, phone, address
- **Developer Name:** How you want to appear on App Store
  - For individual: Your name
  - For organization: Company name

### Step 6: Purchase Membership

1. Review order ($99/year)
2. Enter payment information
3. Complete purchase
4. **Save receipt** for tax records

### Step 7: Wait for Verification

- **Processing time:** Few hours to 2 days
- You'll receive email confirmation
- May require additional verification:
  - Phone call from Apple
  - Identity document upload
  - D-U-N-S verification (for organizations)

### Step 8: Enrollment Complete

You'll receive:
- Welcome email from Apple
- Access to App Store Connect
- Ability to download provisioning profiles
- Team ID (keep this handy)

---

## App Store Connect Setup

Once enrolled, set up App Store Connect.

### Part 1: Initial Access

1. Go to https://appstoreconnect.apple.com
2. Sign in with your Apple ID
3. **First-time setup wizard will appear**

### Part 2: Agreements, Tax, and Banking

**This is required before you can submit apps.**

#### Paid Applications Agreement

1. Click **"Agreements, Tax, and Banking"** in App Store Connect
2. Find **"Paid Applications"** agreement
3. Click **"Request"** (even if app is free, this is required)
4. Review terms and accept
5. Status should change to "Processing" then "Active"

#### Tax Forms (US developers)

1. Under "Tax Forms" section
2. Click **"Set Up"**
3. **For US individuals:**
   - Fill out W-9 form
   - Provide SSN or EIN
   - Confirm tax residency

4. **For non-US individuals:**
   - Fill out W-8BEN form
   - Provide tax identification number
   - Claim treaty benefits if applicable

5. Submit electronically

#### Banking Information

**Required even for free apps** (in case you add In-App Purchases later):

1. Under "Bank Info" section
2. Click **"Set Up"**
3. Select currency (USD for US)
4. Enter bank account information:
   - Bank name
   - Account holder name
   - Routing number (for US banks)
   - Account number
   - Account type (checking/savings)

5. Verify information is correct
6. Submit

**Note:** Banking info is needed even for free apps. Apple requires it for tax reporting and future monetization.

#### Contact Information

1. Under "Contact Information"
2. Add required contacts:
   - **Senior Management:** Legal contact
   - **Financial:** Billing contact
   - **Technical:** App support contact
   - **Marketing:** Optional

3. Can use same person for multiple roles

**Wait for processing:** This can take 24-48 hours to fully process.

---

### Part 3: Create App ID and Bundle Identifier

#### In App Store Connect

1. Go to **"Apps"** tab (or **"My Apps"**)
2. Click the **"+" button** (Add Apps)
3. Select **"New App"**

#### Fill Out New App Form

**Platform:**
- Select **"iOS"**

**Name:**
- Enter your app name (from APP_STORE_LISTING.md)
- Example: "QR Code Generator Pro"
- **Must be unique** across entire App Store
- Can change later if needed
- 30 character limit

**Primary Language:**
- Select **"English (U.S.)"**

**Bundle ID:**
- Click **"Select..."**
- If no Bundle IDs exist, click **"Register a new Bundle ID"**

**Creating Bundle ID:**
1. You'll be redirected to Certificates, Identifiers & Profiles
2. Click **"+"** to create new Identifier
3. Select **"App IDs"** → Continue
4. Select **"App"** → Continue
5. **Description:** "QRGenerator iOS App"
6. **Bundle ID:** Choose "Explicit"
7. **Enter Bundle ID:**
   - Recommendation: `com.321grow.qrgenerator`
   - Or: `com.321techlab.qrgenerator`
   - Or: `com.yourname.qrgenerator`
   - **Format:** Reverse domain notation
   - **Must be unique** to your developer account
   - **Cannot be changed** after submission

8. **Capabilities:** Leave as defaults for now (can enable later)
9. Click **"Continue"** → **"Register"**

10. Return to App Store Connect
11. Refresh Bundle ID dropdown
12. Select your newly created Bundle ID

**SKU:**
- Internal identifier for your app
- Not visible to users
- Example: "QRGENERATOR001" or "321-QR-001"
- Can be anything unique to your account
- Cannot be changed later

**User Access:**
- **Full Access** (recommended)
- Or limit access to specific team members

**Click "Create"**

---

### Part 4: App Information

After creating the app, you'll be taken to the app's page. Complete the **App Information** section:

1. **Subtitle:** (30 chars)
   - "Create & Share QR Codes Fast"

2. **Privacy Policy URL:**
   - **Required:** Link to your privacy policy
   - Example: `https://yourusername.github.io/qrgenerator-privacy`
   - See PRIVACY_POLICY.md for content
   - **Must be publicly accessible**

3. **Category:**
   - **Primary:** Utilities
   - **Secondary:** Productivity (optional)

4. **License Agreement:**
   - Use **Standard Apple EULA** (recommended)
   - Or upload custom EULA if needed

5. **Save** changes

---

### Part 5: Pricing and Availability

1. Navigate to **"Pricing and Availability"**

2. **Price:**
   - Select **"Free"** (for initial release)

3. **Availability:**
   - Select territories where app will be available
   - **"Available in all countries"** (recommended)
   - Or manually select specific countries

4. **Pre-Order:**
   - Leave unchecked for first submission

5. **Save** changes

---

## Xcode Project Configuration

Now configure your Xcode project for App Store submission.

### Step 1: Open Xcode Project

```bash
cd /Users/mk/code-sandbox/QRGenerator/ios
open QRGenerator.xcworkspace
```

**Important:** Open the `.xcworkspace` file, NOT the `.xcodeproj` file.

### Step 2: Select Project Settings

1. In Xcode, click **"QRGenerator"** project in left sidebar (blue icon)
2. Select **"QRGenerator"** target under TARGETS
3. Select **"Signing & Capabilities"** tab

### Step 3: Configure Signing

#### Automatic Signing (Recommended for beginners)

1. Check **"Automatically manage signing"**
2. **Team:** Select your Apple Developer team from dropdown
   - Should show your name or company name
   - If not visible, ensure you're signed in to Xcode with your Apple ID

3. **Bundle Identifier:**
   - Enter the EXACT Bundle ID you created in App Store Connect
   - Example: `com.321grow.qrgenerator`
   - **Must match exactly** (case-sensitive)

4. **Signing Certificate:**
   - Should automatically show "Apple Development" for debug
   - Will use "Apple Distribution" for release

5. **Provisioning Profile:**
   - Should show "Xcode Managed Profile"
   - Xcode will create necessary profiles automatically

**If you see errors:**
- Ensure you're signed in to Xcode with the correct Apple ID
- Go to Xcode → Preferences → Accounts
- Add your Apple ID if not present
- Select your account → Download Manual Profiles

#### Manual Signing (Advanced users only)

If you prefer manual control:
1. Uncheck "Automatically manage signing"
2. Create Distribution certificate manually
3. Create Distribution provisioning profile
4. Select them in Xcode

**Recommendation:** Use automatic signing for first submission.

### Step 4: General Settings

Select **"General"** tab:

#### Identity

1. **Display Name:**
   - "QRGenerator" (or your preferred name)
   - This is what users see under the app icon
   - Can be different from App Store name

2. **Bundle Identifier:**
   - Should match what you set in Signing & Capabilities
   - Example: `com.321grow.qrgenerator`

3. **Version:**
   - Change from "0.0.1" to **"1.0.0"**
   - This is the public-facing version number
   - Users see this in App Store

4. **Build:**
   - Set to **"1"** for first submission
   - Increment for each upload (even if same version)
   - Example: Version 1.0.0, Build 1

#### Deployment Info

1. **Minimum iOS Version:**
   - Set to **"13.0"** or higher
   - Check `package.json` for React Native iOS minimum
   - **Recommendation:** iOS 13.0 (covers ~95% of devices)

2. **Supported Destinations:**
   - Check **"iPhone"**
   - Uncheck "iPad" if not supporting iPad
   - Uncheck "Mac" (Catalyst) unless needed

3. **Orientation:**
   - **Portrait:** Checked ✓
   - **Upside Down:** Unchecked (recommended)
   - **Landscape Left:** Optional (your preference)
   - **Landscape Right:** Optional (your preference)
   - **For QRGenerator:** Probably portrait-only is fine

#### App Icons and Launch Screen

1. **App Icon:**
   - Should show your icon if configured
   - Icon set location: `QRGenerator/Images.xcassets/AppIcon.appiconset`
   - **Requirement:** 1024x1024px icon (no transparency)

2. **Launch Screen:**
   - Configured via `LaunchScreen.storyboard`
   - Should already be set up from React Native template

### Step 5: Build Settings

Select **"Build Settings"** tab:

1. **Search for "ENABLE_BITCODE"**
   - Set to **"No"** (React Native doesn't support Bitcode)
   - This might already be set

2. **Search for "DEAD_CODE_STRIPPING"**
   - Set to **"Yes"** for Release (reduces app size)

3. **Other settings:**
   - Leave as defaults unless you have specific requirements

### Step 6: Capabilities

Select **"Signing & Capabilities"** tab:

Review required capabilities for your app:

**For QRGenerator:**
- **No special capabilities needed**
- Photo Library access is configured in Info.plist (not here)

**Common capabilities for other apps:**
- Push Notifications
- In-App Purchase
- Sign in with Apple
- App Groups
- etc.

### Step 7: Info.plist Verification

1. Open `Info.plist` file
   - Location: `QRGenerator/Info.plist`

2. **Verify required keys exist:**

```xml
<key>CFBundleDisplayName</key>
<string>QRGenerator</string>

<key>CFBundleIdentifier</key>
<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>

<key>CFBundleShortVersionString</key>
<string>1.0.0</string>

<key>CFBundleVersion</key>
<string>1</string>

<key>NSPhotoLibraryUsageDescription</key>
<string>Allow QRGenerator to save QR codes to your photo library.</string>
```

3. **Verify privacy permission descriptions are clear:**
   - `NSPhotoLibraryUsageDescription` should clearly explain why you need photo access
   - Example: "Allow QRGenerator to save QR codes to your photo library."

4. **Remove any unused permission keys:**
   - If you have Camera, Microphone, Location keys but don't use them, remove them
   - App Review will reject if you request permissions you don't use

### Step 8: Update package.json Version

Back in your project root:

1. Open `package.json`
2. Update version:
   ```json
   "version": "1.0.0"
   ```
3. Save file

### Step 9: Clean Build

Before archiving, clean the build:

1. In Xcode: **Product → Clean Build Folder** (Shift+Cmd+K)
2. Or via terminal:
   ```bash
   cd /Users/mk/code-sandbox/QRGenerator/ios
   xcodebuild clean -workspace QRGenerator.xcworkspace -scheme QRGenerator
   ```

---

## Building and Archiving

### Step 1: Select Build Destination

In Xcode:
1. At the top of Xcode window, click the device/simulator selector
2. Select **"Any iOS Device (arm64)"**
   - **Do not** select a simulator
   - **Do not** select a specific device
   - Must be "Any iOS Device" for App Store submission

### Step 2: Select Release Scheme (Important!)

1. Click **"QRGenerator"** scheme next to device selector
2. Click **"Edit Scheme..."**
3. Select **"Run"** in left sidebar
4. **Build Configuration:** Change from "Debug" to **"Release"**
5. Click **"Close"**

**Why this matters:**
- Debug builds include debugging symbols, are larger, and slower
- Release builds are optimized, smaller, and what users should get
- App Store requires release builds

### Step 3: Build the App (Test Run)

Before archiving, do a test build:

1. **Product → Build** (Cmd+B)
2. Wait for build to complete
3. **Check for errors:**
   - Fix any compilation errors
   - Fix any warnings (yellow triangles)
   - **Goal:** Zero errors, minimal warnings

**Common issues:**
- Missing pods: Run `pod install` in ios/ directory
- React Native bundle issue: Run packager separately
- Signing issues: Check Signing & Capabilities settings

### Step 4: Run on Physical Device (Recommended)

Test on a real device before archiving:

1. Connect iPhone via USB
2. Select your device from device selector
3. **Product → Run** (Cmd+R)
4. **Test thoroughly:**
   - All QR code types generate correctly
   - Colors work
   - Save to library works
   - Share works
   - No crashes
   - Test on both WiFi and cellular (if applicable)
   - Test on different iOS versions if possible

### Step 5: Create Archive

Once testing is complete:

1. **Important:** Select **"Any iOS Device (arm64)"** again (not your physical device)

2. **Product → Archive** (or Cmd+B then select Archive)

3. **Wait for archive process:**
   - This can take 5-15 minutes for first archive
   - Progress shown in Xcode
   - React Native bundling happens during this step

4. **Archive complete:**
   - Xcode Organizer window will open automatically
   - Your archive will appear in the list
   - Shows app name, version, and date

### Step 6: Validate Archive

Before uploading, validate the archive:

1. In **Xcode Organizer**, select your archive
2. Click **"Validate App"** button on right side

3. **Distribution options:**
   - **App Store Connect:** Selected
   - Click **"Next"**

4. **Distribution certificate:**
   - **Automatically manage signing:** Selected (recommended)
   - Or manually select if you prefer
   - Click **"Next"**

5. **Re-sign options:**
   - **Automatically manage signing:** Checked
   - Click **"Next"**

6. **Review app info:**
   - Verify bundle ID, version, build number
   - Click **"Validate"**

7. **Wait for validation:**
   - Takes 1-5 minutes
   - Checks for common issues:
     - Invalid signing
     - Missing assets
     - Info.plist issues
     - App Store requirements

8. **Validation results:**
   - **Success:** "Archive successfully validated"
   - **Warnings:** Review and address if critical
   - **Errors:** Must fix before uploading

**Common validation errors:**
- Missing app icon
- Invalid bundle ID
- Missing privacy permission descriptions
- Bitcode issues
- Invalid provisioning profile

**Fix errors and create a new archive if needed.**

---

## Uploading to App Store Connect

### Step 1: Upload Archive

Once validation succeeds:

1. In **Xcode Organizer**, select your validated archive
2. Click **"Distribute App"** button

3. **Distribution method:**
   - Select **"App Store Connect"**
   - Click **"Next"**

4. **Destination:**
   - Select **"Upload"**
   - (Not "Export" - that's for manual upload)
   - Click **"Next"**

5. **Distribution options:**
   - **App Store Connect distribution options:**
     - **Upload your app's symbols:** Checked ✓ (recommended for crash reports)
     - **Manage Version and Build Number:** Checked ✓ (recommended)
   - Click **"Next"**

6. **Signing:**
   - **Automatically manage signing:** Selected
   - Click **"Next"**

7. **Review archive summary:**
   - App name
   - Bundle ID
   - Version: 1.0.0
   - Build: 1
   - Signing identity
   - Provisioning profile
   - Click **"Upload"**

8. **Wait for upload:**
   - Progress bar appears
   - Can take 5-20 minutes depending on:
     - Archive size
     - Internet speed
     - App Store Connect processing
   - **Do not close Xcode during upload**

9. **Upload complete:**
   - "Successfully uploaded" message
   - Click **"Done"**

### Step 2: Wait for Processing

**Important:** Your build is uploaded but not immediately available.

1. Go to https://appstoreconnect.apple.com
2. Navigate to your app
3. Select **"TestFlight"** tab (or **"Activity"** tab)
4. You should see your build with status:
   - **"Processing"** - Apple is processing your build
   - **"Missing Compliance"** - Needs export compliance info
   - **"Ready to Submit"** - Processing complete

**Processing time:**
- Usually 5-30 minutes
- Can take up to 24 hours in rare cases
- You'll receive email when processing completes

**While waiting:**
- Continue to next section
- Start filling out App Store metadata
- You can complete most fields while build processes

### Step 3: Export Compliance (When Build Finishes Processing)

When build shows "Missing Compliance":

1. In App Store Connect, click **"Provide Export Compliance Information"**

2. **Does your app use encryption?**
   - **Answer: NO** (for most apps)
   - QRGenerator doesn't use encryption beyond iOS standard HTTPS

3. If you answered YES (rare):
   - Follow additional questions about encryption type
   - May require additional documentation

4. **Submit** export compliance

5. Build status changes to **"Ready to Submit"**

---

## Completing App Store Information

While waiting for build to process (or after), complete your App Store listing.

### Step 1: Navigate to App Store Tab

1. In App Store Connect, select your app
2. Click **"App Store"** tab
3. Select **"1.0 Prepare for Submission"** (left sidebar)

### Step 2: App Information

Complete all required fields (see APP_STORE_LISTING.md for content):

#### Screenshots and App Preview

**6.7" Display (Required):**
1. Click **"+"** to add screenshots
2. Drag and drop your prepared screenshots
3. **Order matters** - first screenshot appears in search results
4. Add 2-10 screenshots

**Repeat for 6.5" and 5.5" displays if you created them**

**App Preview Video (Optional):**
- Add if you created one
- Max 30 seconds

#### Promotional Text (170 chars)

Copy from APP_STORE_LISTING.md:
```
Generate professional QR codes in seconds! Create codes for URLs, WiFi networks, calendar events, SMS, and email. All processing happens locally—your data stays private.
```

#### Description (4000 chars)

Copy the full description from APP_STORE_LISTING.md.

**Tips:**
- Use line breaks for readability
- Include emojis if desired (sparingly)
- Highlight key features
- Mention privacy/security
- Include call to action

#### Keywords (100 chars)

Copy from APP_STORE_LISTING.md:
```
qr,code,generator,wifi,scanner,share,barcode,calendar,sms,email,url,create,maker,free,professional
```

**Important:**
- Comma-separated, no spaces
- No app name (waste of space)
- No repeated keywords
- Think like users searching

#### Support URL (Required)

Enter your support URL:
```
https://yourusername.github.io/qrgenerator-support
```

Or GitHub repo:
```
https://github.com/yourusername/QRGenerator
```

#### Marketing URL (Optional)

If you have a landing page:
```
https://www.321grow.com/qrgenerator
```

Otherwise, leave blank.

### Step 3: What's New in This Version

For version 1.0.0:

Copy from APP_STORE_LISTING.md:
```
Welcome to QRGenerator!

Create professional QR codes instantly with our privacy-first generator.

✨ FEATURES IN THIS RELEASE:
• URL QR codes for websites and links
• WiFi QR codes for easy network sharing
• Calendar event QR codes for invitations
• SMS QR codes with pre-filled messages
• Email QR codes with custom content
• Custom color selection for branding
• High-resolution export to photo library
• Universal sharing options
• Beautiful, intuitive interface
• Complete offline functionality

🔒 PRIVACY:
All QR code generation happens locally on your device. No data collection, no tracking, no accounts required.

Thank you for choosing QRGenerator! We'd love to hear your feedback.
```

### Step 4: General App Information

Scroll to **"General App Information"** section:

#### App Icon

- Should auto-populate from your archive
- Shows 1024x1024px icon
- **Verify it looks correct**
- No transparency allowed
- Square with rounded corners (Apple adds automatically)

#### Version

- Shows "1.0.0"
- Should match your archive

#### Copyright

Enter:
```
2025 321 GROW
```

Or:
```
2025 Your Name
```

#### Age Rating

Click **"Edit"** next to Age Rating:

**For QRGenerator:**
- All answers should be **"None"**:
  - Cartoon/Fantasy Violence: None
  - Realistic Violence: None
  - Sexual Content: None
  - Profanity: None
  - Horror/Fear: None
  - Mature/Suggestive Themes: None
  - Alcohol/Tobacco/Drugs: None
  - Simulated Gambling: None
  - Medical/Treatment Info: None
  - Unrestricted Web Access: **None** (important!)
  - User Generated Content: None

**Result:** Age Rating 4+

Click **"Done"**

### Step 5: App Review Information

This section is for the App Store review team.

#### Sign-in Required

- **No** (QRGenerator doesn't require login)

#### Contact Information

- **First Name:** Your first name
- **Last Name:** Your last name
- **Phone Number:** +1 (XXX) XXX-XXXX
- **Email:** info@aipulse.pl

#### Notes

Helpful information for reviewers:

```
Thank you for reviewing QRGenerator.

TESTING INSTRUCTIONS:
1. Launch the app
2. Select any QR code type from the main screen
3. Fill in sample information (e.g., URL: https://apple.com)
4. Preview the generated QR code
5. Tap "Save to Library" to test photo library access
6. Test other QR code types: WiFi, Calendar, SMS, Email

PHOTO LIBRARY PERMISSION:
The app requests photo library access only when the user chooses to save a QR code. This is clearly explained in the permission prompt.

PRIVACY:
All QR code generation happens locally. No data is transmitted, collected, or stored by the app beyond what the user explicitly saves to their device.

TESTING TIPS:
- To verify QR codes work, use the iOS Camera app to scan generated codes
- WiFi QR codes can be tested with sample network details
- All features work offline

Contact: info@aipulse.pl for any questions during review.
```

#### Attachment (Optional)

If you have:
- Demo video
- Special instructions
- Screenshots of specific features

You can attach files here.

### Step 6: Version Release

Choose how your app is released after approval:

- **Manually release this version:** (Recommended for first app)
  - Gives you control over release timing
  - You click "Release" button when ready
  - Can coordinate with marketing

- **Automatically release this version:**
  - App goes live immediately after approval
  - No control over timing

- **Schedule release:**
  - Choose specific date/time
  - Useful for coordinating launches

**Recommendation:** Choose "Manually release" for first submission.

### Step 7: App Clip (Optional)

Skip this - App Clips are advanced feature not needed for initial release.

### Step 8: Save Changes

Click **"Save"** button at top right frequently.

---

## Submitting for Review

### Final Pre-Submission Checklist

Before clicking submit, verify:

- [ ] Build is selected (shows "Build 1" or your build number)
- [ ] All screenshots uploaded (at least one device size)
- [ ] Description is complete and compelling
- [ ] Keywords are optimized
- [ ] Privacy policy URL is working
- [ ] Support URL is working
- [ ] Age rating is set (4+)
- [ ] Export compliance completed
- [ ] App review information filled out
- [ ] "What's New" section completed
- [ ] No placeholder text anywhere
- [ ] All required fields have green checkmarks ✓

### Select Build

If not already selected:

1. Scroll to **"Build"** section
2. Click **"Select a build before you submit your app"**
3. Select **"Build 1"** (or your uploaded build)
4. Click **"Done"**

**If you don't see your build:**
- Check that processing is complete (App Store Connect → TestFlight)
- Export compliance may need to be completed
- Wait a few more minutes and refresh

### Submit for Review

1. **Final review** of all information
2. Click **"Add for Review"** button (top right)
3. **Confirmation dialog** appears
4. Review final checklist
5. Click **"Submit for Review"**

### Submission Confirmation

You'll see:
- Status changes to **"Waiting for Review"**
- You receive confirmation email
- App appears in your app list with "Waiting for Review" badge

**What happens next:**
1. **Waiting for Review** (few hours to 2 days)
   - Your app is in queue
   - Apple reviewers will pick it up

2. **In Review** (1-48 hours, typically <24 hours)
   - Apple is actively reviewing your app
   - Testing functionality
   - Checking metadata
   - Verifying compliance with guidelines

3. **Pending Developer Release** (if approved)
   - Review successful!
   - Waiting for you to release (if you chose manual release)

4. **Ready for Sale** (after release)
   - App is live on App Store
   - Users can download

---

## Review Process

### What to Expect

#### Timeline

- **Average review time:** 24-48 hours
- **Range:** Few hours to 7 days
- **First submission:** Often faster (1-2 days)
- **Updates:** Usually very fast (<24 hours)

#### Status Tracking

Monitor status in App Store Connect:

1. **Waiting for Review**
   - In queue
   - No action needed

2. **In Review**
   - Being tested right now
   - Usually lasts few hours to 1 day

3. **Pending Developer Release**
   - ✅ APPROVED!
   - Click "Release this version" when ready

4. **Ready for Sale**
   - 🎉 Live on App Store!

### What Reviewers Check

Apple reviewers will:

1. **Install and launch** your app
2. **Test all features:**
   - Try all 5 QR code types
   - Test save to library
   - Test share functionality
   - Check color picker
   - Verify app doesn't crash

3. **Verify metadata:**
   - Screenshots match actual app
   - Description accurately describes features
   - Privacy policy is accessible
   - Support info is valid

4. **Check technical compliance:**
   - App doesn't crash
   - UI is responsive
   - Permissions are justified
   - No placeholder content
   - No broken links

5. **Review content:**
   - No objectionable content
   - Age rating is appropriate
   - Copyright is valid

### Email Notifications

You'll receive emails for:

- Submission received
- In Review
- Approved (Pending Developer Release)
- Rejected (with reasons)
- Released (Ready for Sale)

### Developer Rejection

If your app is rejected:

1. **Don't panic** - very common, especially for first app
2. **Read rejection reason carefully**
3. **Check Resolution Center** in App Store Connect
4. **Common rejection reasons** listed below
5. **Fix the issue**
6. **Resubmit** (usually reviews faster the second time)

---

## Common Rejection Reasons

### 1. Metadata Doesn't Match App

**Issue:** Screenshots or description show features not in the app.

**Solution:**
- Ensure screenshots are from actual app
- Remove any mentions of unreleased features
- Update description to match reality

### 2. Privacy Policy Missing or Inaccessible

**Issue:** Privacy policy URL doesn't work or isn't comprehensive.

**Solution:**
- Verify URL is publicly accessible (not requiring login)
- Ensure privacy policy covers data collection, usage, sharing
- See PRIVACY_POLICY.md for template

### 3. App Crashes or Has Bugs

**Issue:** Reviewer encountered crash or major bug.

**Solution:**
- Test thoroughly on multiple devices/iOS versions
- Fix reported bugs
- Submit new build with fixes

### 4. Missing Usage Descriptions

**Issue:** App requests permissions without clear explanation.

**Solution:**
- Verify Info.plist has clear `NSPhotoLibraryUsageDescription`
- Explanation should be user-friendly, not technical
- Should clearly state why permission is needed

### 5. Requesting Unused Permissions

**Issue:** App asks for permissions it doesn't actually use.

**Solution:**
- Remove unused permission keys from Info.plist
- Only request permissions you actively use
- For QRGenerator: only Photo Library is needed

### 6. Incomplete App

**Issue:** App appears to be incomplete or has placeholder content.

**Solution:**
- Remove all "Lorem ipsum" or "Test" text
- Ensure all buttons work
- No "Coming soon" features mentioned

### 7. App Name Already Taken

**Issue:** App name conflicts with existing app.

**Solution:**
- Choose different name
- Add modifier (Pro, Plus, Tool, etc.)
- Update in App Store Connect

### 8. Misleading Keywords

**Issue:** Keywords include competitors' names or misleading terms.

**Solution:**
- Remove brand names
- Remove misleading keywords
- Focus on descriptive, relevant terms

### 9. Age Rating Incorrect

**Issue:** App contains content not matching age rating.

**Solution:**
- Review content carefully
- Adjust age rating if needed
- Remove objectionable content if necessary

### 10. Export Compliance Not Completed

**Issue:** Build shows "Missing Compliance."

**Solution:**
- Complete export compliance questions
- Usually just answering "No" to encryption question

---

## After Approval

### Release Your App

If you chose "Manually release this version":

1. Go to App Store Connect
2. Navigate to your app
3. Status shows **"Pending Developer Release"**
4. Click **"Release this Version"** button
5. Confirm release
6. App goes live within 1-24 hours (usually 1-2 hours)

### App Goes Live

When status changes to **"Ready for Sale"**:

1. **Search for your app** in App Store
   - May take 1-2 hours to appear in search
   - Direct link works immediately

2. **Get your App Store URL:**
   - App Store Connect → App Information → View on App Store
   - Format: `https://apps.apple.com/us/app/your-app-name/idXXXXXXXXXX`
   - Share this link!

3. **Test download:**
   - Search for app on iPhone
   - Download and install
   - Verify it works as expected

### Marketing Your App

**Immediate actions:**

- Share App Store link on social media
- Email to friends/family/network
- Post on Product Hunt, Reddit (relevant subreddits)
- Update your website/portfolio
- Add to your email signature

**Ongoing promotion:**

- Ask satisfied users to leave reviews
- Respond to all reviews (positive and negative)
- Create landing page
- Share on LinkedIn
- Blog about development journey
- Create demo videos

### Monitor Performance

In App Store Connect:

1. **Sales and Trends**
   - Daily downloads
   - Updates
   - Re-downloads

2. **Ratings and Reviews**
   - User ratings (1-5 stars)
   - Written reviews
   - Respond to reviews!

3. **Crashes and Diagnostics**
   - Crash reports
   - Performance metrics
   - Fix issues in updates

### Encourage Reviews

**Good practices:**

- Ask satisfied users to leave review (in-app prompt)
- Use `SKStoreReviewController` (native iOS review prompt)
- Don't ask too frequently (iOS limits this automatically)
- Respond to all reviews professionally

**Don't:**

- Offer incentives for reviews (against App Store rules)
- Fake reviews
- Ask friends/family to leave fake reviews
- Respond negatively to bad reviews

### Plan Next Update

Start planning version 1.1.0:

- Review user feedback
- Fix reported bugs
- Add requested features
- Improve based on crash reports
- Update screenshots if UI changes

---

## Updating Your App

For future updates:

### Version Numbering

**Semantic Versioning:**
- **Major.Minor.Patch**
- Example: 1.2.3

**Increment based on:**
- **Major (1.0.0 → 2.0.0):** Major redesign, breaking changes
- **Minor (1.0.0 → 1.1.0):** New features, improvements
- **Patch (1.0.0 → 1.0.1):** Bug fixes only

### Update Process

1. **Make changes** in code
2. **Update version** in Xcode (General tab)
   - Version: 1.1.0
   - Build: Increment (2, 3, 4, etc.)
3. **Archive** new build
4. **Upload** to App Store Connect
5. **Create new version** in App Store Connect
6. **Update "What's New"** section
7. **Update screenshots** if UI changed
8. **Submit** for review

**Updates usually review faster than initial submission** (often <24 hours).

---

## Troubleshooting

### Build Won't Archive

**Common causes:**

1. **Scheme set to Debug instead of Release**
   - Edit Scheme → Build Configuration → Release

2. **Invalid code signing**
   - Check Signing & Capabilities
   - Try "Automatically manage signing"

3. **Missing dependencies**
   - Run `pod install` in ios/ directory
   - Clean build folder

4. **React Native bundler issue**
   - Close and restart Metro bundler
   - Clear React Native cache: `npx react-native start --reset-cache`

### Upload Fails

**Common causes:**

1. **Network timeout**
   - Try again with stable internet
   - Upload from different network

2. **Invalid bundle ID**
   - Must match App Store Connect exactly
   - Check for typos

3. **Invalid provisioning profile**
   - Try automatic signing
   - Or regenerate profiles in Developer portal

### Build Stuck "Processing"

**Usually resolves in 15-30 minutes.**

If stuck >1 hour:
- Check email for errors
- Contact Apple Developer Support
- Try uploading again

### Can't Find Build to Select

**Reasons:**

1. Still processing - wait longer
2. Build failed processing - check email
3. Export compliance not completed
4. Build uploaded to wrong app ID

**Solution:**
- Check TestFlight tab for build status
- Complete export compliance if needed
- Verify bundle ID matches

### App Rejected

**Steps:**

1. Read rejection email carefully
2. Check Resolution Center in App Store Connect
3. Understand the issue
4. Fix the problem
5. Increment build number
6. Upload new build
7. Resubmit (will review faster)

### Reviews Taking Too Long

**If >7 days:**

1. Check App Store Connect for updates
2. Contact Apple Developer Support
3. Be patient - holidays/high volume can cause delays

**Expedite review (rare):**
- Only for critical fixes
- Request via App Store Connect
- Usually only approved for time-sensitive issues

---

## Resources

### Official Apple Documentation

- **App Store Connect:** https://appstoreconnect.apple.com
- **Developer Portal:** https://developer.apple.com
- **App Store Review Guidelines:** https://developer.apple.com/app-store/review/guidelines/
- **Human Interface Guidelines:** https://developer.apple.com/design/human-interface-guidelines/
- **App Store Marketing:** https://developer.apple.com/app-store/marketing/

### Support

- **Apple Developer Support:** https://developer.apple.com/support/
- **Developer Forums:** https://developer.apple.com/forums/
- **Phone Support:** Available with paid developer account

### Tools

- **Xcode:** Mac App Store
- **Transporter:** Upload builds (alternative to Xcode)
- **TestFlight:** Beta testing
- **Fastlane:** Automation tools

---

## Success Checklist

You've successfully submitted when:

- ✅ App status is "Waiting for Review" or "In Review"
- ✅ You received confirmation email
- ✅ Build is selected in App Store listing
- ✅ All metadata is complete
- ✅ Screenshots are uploaded
- ✅ Export compliance is complete

**Now wait for approval!**

---

## First Submission Tips

1. **Don't rush** - Take time to review everything
2. **Test thoroughly** - More testing = fewer rejections
3. **Read guidelines** - Understand what Apple requires
4. **Be patient** - Review process takes time
5. **Expect rejection** - Very common for first app, easy to fix
6. **Ask for help** - Developer forums are friendly
7. **Learn from feedback** - Rejections make you better
8. **Celebrate milestones** - First submission is huge!

---

## Congratulations!

Submitting your first app to the App Store is a major accomplishment. You've:

- ✅ Enrolled in Apple Developer Program
- ✅ Set up App Store Connect
- ✅ Configured Xcode project
- ✅ Created archive
- ✅ Uploaded build
- ✅ Completed App Store listing
- ✅ Submitted for review

**What's next:**
- Wait for review (1-7 days)
- Monitor email for updates
- Prepare for launch marketing
- Plan next update

**You did it!** 🎉

---

**Document Version:** 1.0
**Last Updated:** January 2025
**Status:** Complete submission guide for first-time publishers

For questions or issues, refer to:
- APP_STORE_LISTING.md (for metadata)
- APP_STORE_SCREENSHOTS_GUIDE.md (for screenshots)
- PRIVACY_POLICY.md (for privacy requirements)
- APP_STORE_ASSETS_CHECKLIST.md (for asset requirements)
