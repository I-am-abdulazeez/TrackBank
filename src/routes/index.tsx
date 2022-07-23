import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from 'src/types';

// Routes
import WelcomeScreen from 'src/screens/Welcome';
import BottomTabScreens from 'src/components/BottomTabScreens';
import LoginScreen from 'src/screens/Login';
import RegisterScreen from 'src/screens/Register';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        options={{
          headerShown: false,
        }}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Register"
        options={{
          headerShown: false,
        }}
        component={RegisterScreen}
      />
      <Stack.Screen
        name="Dashboard"
        options={{ headerShown: false }}
        component={BottomTabScreens}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
