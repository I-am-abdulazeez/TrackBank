import { DefaultTheme } from '@react-navigation/native';

import { createTheme } from '@rneui/themed';

export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export const RNETheme = createTheme({
  lightColors: {
    primary: '#218C74',
    success: '#00B894',
    error: '#FF7979',
  },
});
