import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, ERROR_CORRECTION_LEVELS, SIZE_PRESETS} from '../../utils/constants';
import {ErrorCorrectionLevel, SizePreset} from '../../types';

interface SettingsPanelProps {
  errorCorrection: ErrorCorrectionLevel;
  onErrorCorrectionChange: (level: ErrorCorrectionLevel) => void;
  sizePreset: SizePreset;
  onSizeChange: (size: SizePreset) => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  errorCorrection,
  onErrorCorrectionChange,
  sizePreset,
  onSizeChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Error Correction:</Text>
        <View style={styles.pillContainer}>
          {ERROR_CORRECTION_LEVELS.map(level => (
            <TouchableOpacity
              key={level.id}
              style={[
                styles.pill,
                errorCorrection === level.id && styles.pillSelected,
              ]}
              onPress={() => onErrorCorrectionChange(level.id)}>
              <Text
                style={[
                  styles.pillText,
                  errorCorrection === level.id && styles.pillTextSelected,
                ]}>
                {level.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>QR code size:</Text>
        <View style={styles.pillContainer}>
          {SIZE_PRESETS.map(size => (
            <TouchableOpacity
              key={size.id}
              style={[
                styles.pill,
                sizePreset === size.id && styles.pillSelected,
              ]}
              onPress={() => onSizeChange(size.id)}>
              <Text
                style={[
                  styles.pillText,
                  sizePreset === size.id && styles.pillTextSelected,
                ]}>
                {size.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: '500',
  },
  pillContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  pill: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: '#333',
    minWidth: 64,
    alignItems: 'center',
  },
  pillSelected: {
    backgroundColor: COLORS.yellow,
    borderColor: COLORS.yellow,
  },
  pillText: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: '500',
  },
  pillTextSelected: {
    color: COLORS.navy,
    fontWeight: '600',
  },
});
