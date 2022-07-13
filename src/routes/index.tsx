import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Routes
import Welcome from 'src/screens/Welcome';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
