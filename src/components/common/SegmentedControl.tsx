import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useTheme} from '../../contexts';

interface SegmentedControlProps<T extends string> {
  options: {id: T; label: string}[];
  selectedId: T;
  onSelect: (id: T) => void;
}

const PILL_WIDTH = 64;

export function SegmentedControl<T extends string>({
  options,
  selectedId,
  onSelect,
}: SegmentedControlProps<T>) {
  const {colors} = useTheme();

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {options.map(option => {
          const isSelected = option.id === selectedId;
          return (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.segment,
                {backgroundColor: colors.buttonBackground},
                isSelected && {backgroundColor: colors.buttonActiveBackground},
              ]}
              onPress={() => onSelect(option.id)}>
              <Text
                style={[
                  styles.segmentText,
                  {color: colors.buttonText},
                  isSelected && {color: colors.buttonActiveText, fontWeight: '600'},
                ]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexShrink: 0,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
  },
  segment: {
    width: PILL_WIDTH,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentText: {
    fontSize: 12,
    fontWeight: '500',
  },
});
