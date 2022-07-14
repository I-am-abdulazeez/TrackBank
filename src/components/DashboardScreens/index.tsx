import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from 'src/screens/Home';

import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();

const DashboardScreens = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
    </BottomTab.Navigator>
  );
};

export default DashboardScreens;
