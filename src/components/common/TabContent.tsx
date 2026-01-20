import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';
import {ERROR_CORRECTION_LEVELS, SIZE_PRESETS} from '../../utils/constants';
import {ErrorCorrectionLevel, SizePreset} from '../../types';
import {TabId} from './PillTabs';
import {useTheme} from '../../contexts';

interface IconProps {
  size?: number;
  color?: string;
}

const CopyIcon: React.FC<IconProps> = ({size = 24, color = '#ffffff'}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="9" y="9" width="13" height="13" rx="2" stroke={color} strokeWidth="2" />
    <Path
      d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
      stroke={color}
      strokeWidth="2"
    />
  </Svg>
);

const ShareIcon: React.FC<IconProps> = ({size = 24, color = '#ffffff'}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path d="M12 2L12 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Path
      d="M8 6L12 2L16 6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const SaveIcon: React.FC<IconProps> = ({size = 24, color = '#ffffff'}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M12 2L12 13" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <Path
      d="M8 9L12 13L16 9"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

interface TabContentProps {
  activeTab: TabId;
  errorCorrection: ErrorCorrectionLevel;
  onErrorCorrectionChange: (level: ErrorCorrectionLevel) => void;
  sizePreset: SizePreset;
  onSizeChange: (size: SizePreset) => void;
  onCopy: () => void;
  onShare: () => void;
  onSave: () => void;
}

export const TabContent: React.FC<TabContentProps> = ({
  activeTab,
  errorCorrection,
  onErrorCorrectionChange,
  sizePreset,
  onSizeChange,
  onCopy,
  onShare,
  onSave,
}) => {
  const {colors} = useTheme();

  if (activeTab === 'correction') {
    return (
      <View style={styles.container}>
        <Text style={[styles.description, {color: colors.textMuted}]}>
          Higher = more readable if damaged
        </Text>
        <View style={styles.optionsRow}>
          {ERROR_CORRECTION_LEVELS.map(level => {
            const isSelected = errorCorrection === level.id;
            return (
              <TouchableOpacity
                key={level.id}
                style={[
                  styles.option,
                  {backgroundColor: colors.buttonBackground},
                  isSelected && {backgroundColor: colors.buttonActiveBackground},
                ]}
                onPress={() => onErrorCorrectionChange(level.id)}>
                <Text
                  style={[
                    styles.optionText,
                    {color: colors.buttonText},
                    isSelected && {color: colors.buttonActiveText},
                  ]}>
                  {level.label}
                </Text>
                <Text
                  style={[
                    styles.optionDescription,
                    {color: colors.textMuted},
                    isSelected && {color: colors.buttonActiveText, opacity: 0.7},
                  ]}>
                  {level.description}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }

  if (activeTab === 'size') {
    return (
      <View style={styles.container}>
        <Text style={[styles.description, {color: colors.textMuted}]}>
          Choose the size of your QR code for different use cases.
        </Text>
        <View style={styles.optionsRow}>
          {SIZE_PRESETS.map(size => {
            const isSelected = sizePreset === size.id;
            return (
              <TouchableOpacity
                key={size.id}
                style={[
                  styles.option,
                  {backgroundColor: colors.buttonBackground},
                  isSelected && {backgroundColor: colors.buttonActiveBackground},
                ]}
                onPress={() => onSizeChange(size.id)}>
                <Text
                  style={[
                    styles.optionText,
                    {color: colors.buttonText},
                    isSelected && {color: colors.buttonActiveText},
                  ]}>
                  {size.label}
                </Text>
                <Text
                  style={[
                    styles.optionDescription,
                    {color: colors.textMuted},
                    isSelected && {color: colors.buttonActiveText, opacity: 0.7},
                  ]}>
                  {size.size}px
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }

  if (activeTab === 'share') {
    return (
      <View style={styles.container}>
        <Text style={[styles.description, {color: colors.textMuted}]}>
          Export your QR code to share or save for later use.
        </Text>
        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={[styles.actionButton, {backgroundColor: colors.buttonBackground}]}
            onPress={onCopy}>
            <CopyIcon color={colors.buttonText} />
            <Text style={[styles.actionText, {color: colors.buttonText}]}>
              Copy to{'\n'}Clipboard
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, {backgroundColor: colors.buttonActiveBackground}]}
            onPress={onShare}>
            <ShareIcon color={colors.buttonActiveText} />
            <Text style={[styles.primaryActionText, {color: colors.buttonActiveText}]}>
              Share{'\n'}QR Code
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, {backgroundColor: colors.buttonBackground}]}
            onPress={onSave}>
            <SaveIcon color={colors.buttonText} />
            <Text style={[styles.actionText, {color: colors.buttonText}]}>
              Save to{'\n'}Photos
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return null;
};

const BUTTON_HEIGHT = 80;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  description: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 16,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  option: {
    flex: 1,
    height: BUTTON_HEIGHT,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  optionDescription: {
    fontSize: 12,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    height: BUTTON_HEIGHT,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  actionText: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },
  primaryActionText: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },
});
