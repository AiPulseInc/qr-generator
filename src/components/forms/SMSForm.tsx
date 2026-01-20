import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FormInput} from '../common';
import {SMSData} from '../../types';

interface SMSFormProps {
  data: SMSData;
  onChange: (data: SMSData) => void;
}

export const SMSForm: React.FC<SMSFormProps> = ({data, onChange}) => {
  return (
    <View style={styles.container}>
      <FormInput
        label="Phone Number"
        placeholder="+1 234 567 8900"
        value={data.phoneNumber}
        onChangeText={phoneNumber => onChange({...data, phoneNumber})}
        keyboardType="phone-pad"
      />

      <FormInput
        label="Message (optional)"
        placeholder="Enter your message"
        value={data.message}
        onChangeText={message => onChange({...data, message})}
        multiline
        numberOfLines={4}
        style={styles.textArea}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
