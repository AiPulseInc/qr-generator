import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QRGeneratorScreen} from './src/components/QRGeneratorScreen';
import {ThemeProvider} from './src/contexts';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <QRGeneratorScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
