import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from '@rneui/themed';

import HomeScreen from 'src/screens/Home';

const BottomTab = createBottomTabNavigator();

const BottomTabScreens = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home-outline"
              type="ionicon"
              color={color}
              size={size}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabScreens;
