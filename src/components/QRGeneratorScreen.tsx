import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {Path, Circle} from 'react-native-svg';
import {useQRGenerator} from '../hooks/useQRGenerator';
import {useQRActions} from '../hooks/useQRActions';
import {SegmentedControl, PillTabs, TabContent} from './common';
import type {TabId} from './common';
import {
  URLForm,
  WiFiForm,
  CalendarForm,
  SMSForm,
  EmailForm,
} from './forms';
import {QRCodeDisplay} from './QRCodeDisplay';
import {QR_TYPES} from '../utils/constants';
import {useTheme} from '../contexts';

interface IconProps {
  color: string;
}

const SunIcon: React.FC<IconProps> = ({color}) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="5" stroke={color} strokeWidth="2" />
    <Path d="M12 2V4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Path d="M12 20V22" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Path d="M4 12H2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Path d="M22 12H20" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Path d="M19.07 4.93L17.66 6.34" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Path d="M6.34 17.66L4.93 19.07" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Path d="M19.07 19.07L17.66 17.66" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Path d="M6.34 6.34L4.93 4.93" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

const MoonIcon: React.FC<IconProps> = ({color}) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const QRGeneratorScreen: React.FC = () => {
  const qrViewRef = useRef<View>(null);
  const [activeTab, setActiveTab] = useState<TabId>('share');
  const {colors, toggleTheme, isDark} = useTheme();

  const {
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
  } = useQRGenerator();

  const {copyToClipboard, shareQRCode, saveToPhotos} = useQRActions(qrViewRef);

  const renderForm = () => {
    switch (qrType) {
      case 'url':
        return <URLForm data={urlData} onChange={setURLData} />;
      case 'wifi':
        return <WiFiForm data={wifiData} onChange={setWiFiData} />;
      case 'calendar':
        return <CalendarForm data={calendarData} onChange={setCalendarData} />;
      case 'sms':
        return <SMSForm data={smsData} onChange={setSMSData} />;
      case 'email':
        return <EmailForm data={emailData} onChange={setEmailData} />;
      default:
        return null;
    }
  };

  const dynamicStyles = {
    container: {
      backgroundColor: colors.background,
    },
    header: {
      backgroundColor: colors.background,
    },
    footer: {
      backgroundColor: colors.background,
    },
    footerTitle: {
      color: colors.textMuted,
    },
    footerDivider: {
      color: colors.textMuted,
    },
    footerSubtitle: {
      color: colors.textMuted,
    },
  };

  return (
    <SafeAreaView style={[styles.container, dynamicStyles.container]}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
        <View style={[styles.header, dynamicStyles.header]}>
          <Text style={[styles.logoText, {color: colors.text}]}>321 TOOLS</Text>
          <TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
            {isDark ? (
              <SunIcon color={colors.iconColor} />
            ) : (
              <MoonIcon color={colors.iconColor} />
            )}
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={true}
          bounces={true}
          alwaysBounceVertical={true}>
          <SegmentedControl
            options={QR_TYPES}
            selectedId={qrType}
            onSelect={setQRType}
          />

          <QRCodeDisplay
            ref={qrViewRef}
            payload={qrPayload}
            errorCorrection={errorCorrection}
            sizePreset={sizePreset}
          />

          <View style={styles.formContainer}>{renderForm()}</View>

          <PillTabs activeTab={activeTab} onTabChange={setActiveTab} />

          <TabContent
            activeTab={activeTab}
            errorCorrection={errorCorrection}
            onErrorCorrectionChange={setErrorCorrection}
            sizePreset={sizePreset}
            onSizeChange={setSizePreset}
            onCopy={() => copyToClipboard(qrPayload)}
            onShare={shareQRCode}
            onSave={saveToPhotos}
          />
        </ScrollView>

        <View style={[styles.footer, dynamicStyles.footer]}>
          <Text style={styles.footerText}>
            <Text style={[styles.footerTitle, dynamicStyles.footerTitle]}>
              © 2026 QR Generator
            </Text>
            <Text style={[styles.footerDivider, dynamicStyles.footerDivider]}>
              {' '}•{' '}
            </Text>
            <Text style={[styles.footerSubtitle, dynamicStyles.footerSubtitle]}>
              Powered by 321 Tech Lab
            </Text>
          </Text>
          <View style={styles.colorStripe}>
            <View style={[styles.stripeSegment, {backgroundColor: colors.yellow}]} />
            <View style={[styles.stripeSegment, {backgroundColor: colors.greenAccent}]} />
            <View style={[styles.stripeSegment, {backgroundColor: colors.blueAccent}]} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '700',
  },
  themeButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  formContainer: {
    marginTop: 8,
  },
  footer: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    marginBottom: 8,
  },
  footerTitle: {
    fontSize: 11,
    fontWeight: '500',
  },
  footerDivider: {
    fontSize: 9,
  },
  footerSubtitle: {
    fontSize: 9,
  },
  colorStripe: {
    flexDirection: 'row',
    width: '25%',
    height: 4,
  },
  stripeSegment: {
    flex: 1,
    height: 4,
  },
});
