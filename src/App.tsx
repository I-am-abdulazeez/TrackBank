/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppContainer from './components/AppContainer';
import AppRoutes from './routes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  );
};

export default App;
