import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '../../contexts';

export type TabId = 'correction' | 'size' | 'share';

interface Tab {
  id: TabId;
  label: string;
}

const TABS: Tab[] = [
  {id: 'correction', label: 'Error Correction'},
  {id: 'size', label: 'QR Code Size'},
  {id: 'share', label: 'Export QR Code'},
];

interface PillTabsProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export const PillTabs: React.FC<PillTabsProps> = ({activeTab, onTabChange}) => {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.surface}]}>
      {TABS.map(tab => {
        const isActive = tab.id === activeTab;
        return (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tab,
              isActive && {backgroundColor: colors.buttonActiveBackground},
            ]}
            onPress={() => onTabChange(tab.id)}>
            <Text
              style={[
                styles.tabText,
                {color: colors.textMuted},
                isActive && {color: colors.buttonActiveText, fontWeight: '600'},
              ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 25,
    padding: 4,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 21,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});
