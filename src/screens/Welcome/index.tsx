import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Button, Text, useTheme } from '@rneui/themed';

import { NavScreenProps } from 'src/types';

const WelcomeScreen = () => {
  const { navigate } = useNavigation<NavScreenProps>();
  const { theme } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.primary, flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <Text>WelcomeScreen 2</Text>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
