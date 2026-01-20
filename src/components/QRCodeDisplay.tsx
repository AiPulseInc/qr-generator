import React, {forwardRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {getSizeFromPreset} from '../utils/constants';
import {ErrorCorrectionLevel, SizePreset} from '../types';
import {useTheme} from '../contexts';

interface QRCodeDisplayProps {
  payload: string;
  errorCorrection: ErrorCorrectionLevel;
  sizePreset: SizePreset;
}

export const QRCodeDisplay = forwardRef<View, QRCodeDisplayProps>(
  ({payload, errorCorrection, sizePreset}, ref) => {
    const {colors} = useTheme();
    const size = getSizeFromPreset(sizePreset);

    if (!payload) {
      return (
        <View style={styles.container}>
          <View
            style={[
              styles.placeholder,
              {width: size, height: size, backgroundColor: colors.surface},
            ]}>
            <Text style={[styles.placeholderText, {color: colors.textMuted}]}>
              Fill in the form to generate a QR code
            </Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.cardWrapper}>
          <View
            ref={ref}
            collapsable={false}
            style={[styles.qrWrapper, {backgroundColor: colors.qrBackground}]}>
            <QRCode
              value={payload}
              size={size}
              ecl={errorCorrection}
              backgroundColor={colors.qrBackground}
              color={colors.navy}
            />
          </View>
          <View style={styles.colorStripe}>
            <View style={[styles.stripeSegment, {backgroundColor: colors.yellow}]} />
            <View style={[styles.stripeSegment, {backgroundColor: colors.greenAccent}]} />
            <View style={[styles.stripeSegment, {backgroundColor: colors.blueAccent}]} />
          </View>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  cardWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.15,
    shadowRadius: 32,
    elevation: 8,
  },
  qrWrapper: {
    padding: 16,
  },
  colorStripe: {
    flexDirection: 'row',
    height: 4,
  },
  stripeSegment: {
    flex: 1,
  },
  placeholder: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderText: {
    fontSize: 14,
    textAlign: 'center',
  },
});
