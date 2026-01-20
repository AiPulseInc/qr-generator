import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FormInput} from '../common';
import {URLData} from '../../types';

interface URLFormProps {
  data: URLData;
  onChange: (data: URLData) => void;
}

export const URLForm: React.FC<URLFormProps> = ({data, onChange}) => {
  return (
    <View style={styles.container}>
      <FormInput
        label="URL"
        placeholder="https://example.com"
        value={data.url}
        onChangeText={url => onChange({...data, url})}
        keyboardType="url"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
