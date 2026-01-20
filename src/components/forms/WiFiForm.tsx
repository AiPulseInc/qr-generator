import React from 'react';
import {View, Text, TouchableOpacity, Switch, StyleSheet} from 'react-native';
import {FormInput} from '../common';
import {WiFiData, SecurityType} from '../../types';
import {useTheme} from '../../contexts';

interface WiFiFormProps {
  data: WiFiData;
  onChange: (data: WiFiData) => void;
}

const SECURITY_OPTIONS: {id: SecurityType; label: string}[] = [
  {id: 'WPA', label: 'WPA/WPA2'},
  {id: 'WEP', label: 'WEP'},
  {id: 'nopass', label: 'None'},
];

export const WiFiForm: React.FC<WiFiFormProps> = ({data, onChange}) => {
  const {colors, isDark} = useTheme();

  return (
    <View style={styles.container}>
      <FormInput
        label="Network Name (SSID)"
        placeholder="MyNetwork"
        value={data.ssid}
        onChangeText={ssid => onChange({...data, ssid})}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        label="Password"
        placeholder="Enter password"
        value={data.password}
        onChangeText={password => onChange({...data, password})}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />

      <View style={styles.securityContainer}>
        <Text style={[styles.label, {color: colors.text}]}>Security Type</Text>
        <View style={styles.securityOptions}>
          {SECURITY_OPTIONS.map(option => {
            const isSelected = data.security === option.id;
            return (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.securityOption,
                  {
                    backgroundColor: isDark ? colors.surface : colors.inputBackground,
                    borderColor: isDark ? '#333' : colors.inputBorder,
                  },
                  isSelected && {
                    backgroundColor: colors.buttonActiveBackground,
                    borderColor: colors.buttonActiveBackground,
                  },
                ]}
                onPress={() => onChange({...data, security: option.id})}>
                <Text
                  style={[
                    styles.securityOptionText,
                    {color: colors.textMuted},
                    isSelected && {color: colors.buttonActiveText, fontWeight: '600'},
                  ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={styles.switchRow}>
        <Text style={[styles.label, {color: colors.text}]}>Hidden Network</Text>
        <Switch
          value={data.hidden}
          onValueChange={hidden => onChange({...data, hidden})}
          trackColor={{false: '#555', true: colors.yellow}}
          thumbColor={colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: '500',
  },
  securityContainer: {
    marginBottom: 16,
  },
  securityOptions: {
    flexDirection: 'row',
    gap: 8,
  },
  securityOption: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
  },
  securityOptionText: {
    fontSize: 13,
    fontWeight: '500',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
});
