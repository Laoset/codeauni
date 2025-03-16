import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const Colors = {
  light: {
    title: '#0D0D0D',
    text: '#333333',
    textSecondary: '#666666',
    background: '#F5F5F5',
    backgroundSecondary: 'rgba(31, 150, 255, 0.4)',
    backgroundSecondaryNoOpacity: '#1f96ff',
    tint: '#1f96ff',
    icon: '#555555',
    tabIconDefault: '#555555',
  },
  dark: {
    title: '#FFD700',
    text: '#E0E0E0',
    textSecondary: '#A0A0A0',
    background: '#0D0D0D',
    backgroundSecondary: '#2A2A2A',
    backgroundSecondaryNoOpacity: '#2A2A2A',
    tint: '#fff',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
  },
};
export const CustomLightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.light.tint,
    background: Colors.light.background,
    text: Colors.light.text,
    textSecondary: Colors.light.textSecondary,
    card: Colors.light.background,
    border: Colors.light.textSecondary,
    title: Colors.light.title,
    backgroundSecondary: Colors.light.backgroundSecondary,
    backgroundSecondaryNoOpacity: Colors.light.backgroundSecondaryNoOpacity,
  },
};

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: Colors.dark.tint,
    background: Colors.dark.background,
    text: Colors.dark.text,
    textSecondary: Colors.dark.textSecondary,
    card: Colors.dark.background,
    border: Colors.dark.textSecondary,
    title: Colors.dark.title,
    backgroundSecondary: Colors.dark.backgroundSecondary,
    backgroundSecondaryNoOpacity: Colors.dark.backgroundSecondaryNoOpacity,
  },
};
