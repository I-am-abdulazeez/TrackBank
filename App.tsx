import React from 'react';
import { useColorScheme } from 'react-native';

import AppContainer from 'src/components/AppContainer';
import AppRoutes from 'src/routes';

const App = () => {
  return (
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  );
};

export default App;
