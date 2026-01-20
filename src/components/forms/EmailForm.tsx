import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FormInput} from '../common';
import {EmailData} from '../../types';

interface EmailFormProps {
  data: EmailData;
  onChange: (data: EmailData) => void;
}

export const EmailForm: React.FC<EmailFormProps> = ({data, onChange}) => {
  return (
    <View style={styles.container}>
      <FormInput
        label="Recipient Email"
        placeholder="email@example.com"
        value={data.recipient}
        onChangeText={recipient => onChange({...data, recipient})}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        label="Subject (optional)"
        placeholder="Email subject"
        value={data.subject}
        onChangeText={subject => onChange({...data, subject})}
      />

      <FormInput
        label="Body (optional)"
        placeholder="Email body"
        value={data.body}
        onChangeText={body => onChange({...data, body})}
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
