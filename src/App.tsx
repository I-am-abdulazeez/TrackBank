import React from 'react';
import { useColorScheme } from 'react-native';

import AppContainer from './components/AppContainer';
import AppRoutes from './routes';

const App = () => {
  return (
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  );
};

export default App;
