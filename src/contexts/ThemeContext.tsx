import React, {createContext, useContext, useState, ReactNode} from 'react';

export type ThemeMode = 'dark' | 'light';

interface ThemeColors {
  // Primary colors
  navy: string;
  yellow: string;
  white: string;

  // Accent colors for tri-color stripe
  greenAccent: string;
  blueAccent: string;

  // UI colors
  background: string;
  surface: string;
  primary: string;
  accent: string;
  text: string;
  textDark: string;
  textMuted: string;
  success: string;
  qrBackground: string;

  // Form colors
  inputBackground: string;
  inputBorder: string;
  inputBorderActive: string;

  // Button colors
  buttonBackground: string;
  buttonText: string;
  buttonActiveBackground: string;
  buttonActiveText: string;

  // Icon color
  iconColor: string;
}

const darkColors: ThemeColors = {
  navy: '#001437',
  yellow: '#FDE300',
  white: '#ffffff',
  greenAccent: '#00B65E',
  blueAccent: '#0038FF',
  background: '#001437',
  surface: '#0e1c36',
  primary: '#FDE300',
  accent: '#0038FF',
  text: '#ffffff',
  textDark: '#0A0A0A',
  textMuted: '#666666',
  success: '#00B65E',
  qrBackground: '#ffffff',
  inputBackground: '#ffffff',
  inputBorder: '#e5e7eb',
  inputBorderActive: '#d1d5db',
  buttonBackground: '#0e1c36',
  buttonText: '#ffffff',
  buttonActiveBackground: '#FDE300',
  buttonActiveText: '#001437',
  iconColor: '#ffffff',
};

const lightColors: ThemeColors = {
  navy: '#001437',
  yellow: '#FDE300',
  white: '#ffffff',
  greenAccent: '#00B65E',
  blueAccent: '#0038FF',
  background: '#ffffff',
  surface: '#f5f5f5',
  primary: '#FDE300',
  accent: '#0038FF',
  text: '#0A0A0A',
  textDark: '#0A0A0A',
  textMuted: '#666666',
  success: '#00B65E',
  qrBackground: '#ffffff',
  inputBackground: '#ffffff',
  inputBorder: '#e5e7eb',
  inputBorderActive: '#001437',
  buttonBackground: '#001437',
  buttonText: '#ffffff',
  buttonActiveBackground: '#FDE300',
  buttonActiveText: '#001437',
  iconColor: '#001437',
};

interface ThemeContextValue {
  mode: ThemeMode;
  colors: ThemeColors;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleTheme = () => {
    setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const colors = mode === 'dark' ? darkColors : lightColors;
  const isDark = mode === 'dark';

  return (
    <ThemeContext.Provider value={{mode, colors, toggleTheme, isDark}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export type {ThemeColors};
