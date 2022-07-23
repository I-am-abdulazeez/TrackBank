import { DefaultTheme } from '@react-navigation/native';

import { createTheme } from '@rneui/themed';

import { FONTS } from 'src/constants';

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
  Button: {
    radius: 10,
    titleStyle: { fontFamily: FONTS.semiBold },
    buttonStyle: {
      height: 45,
    },
  },
  Input: {
    inputContainerStyle: {
      borderRadius: 10,
      padding: 3,
      borderColor: '#D8EFEA',
      borderWidth: 1,
    },
    inputStyle: {
      fontFamily: FONTS.medium,
      paddingHorizontal: 10,
    },
  },
});
