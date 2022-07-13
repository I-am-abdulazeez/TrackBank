import React, { type PropsWithChildren } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from '@rneui/themed';

import { NavigationTheme, RNETheme } from 'src/assets/theme';

const AppContainer = ({ children }: PropsWithChildren) => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <ThemeProvider theme={RNETheme}>{children}</ThemeProvider>
    </NavigationContainer>
  );
};

export default AppContainer;
