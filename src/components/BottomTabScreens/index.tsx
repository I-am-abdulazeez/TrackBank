import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from '@rneui/themed';

import HomeScreen from 'src/screens/Home';
import SendReceiveScreen from 'src/screens/SendReceive';

const BottomTab = createBottomTabNavigator();

const BottomTabScreens = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#00B894',
        tabBarInactiveTintColor: '#B2E1D7',
      }}>
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              type="ionicon"
              color={color}
              size={22}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <BottomTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Send/Receive',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'send' : 'send-outline'}
              type="ionicon"
              color={color}
              size={23}
              iconStyle={{
                transform: [{ rotate: '-40deg' }],
              }}
            />
          ),
        }}
        name="SendRecieve"
        component={SendReceiveScreen}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabScreens;
