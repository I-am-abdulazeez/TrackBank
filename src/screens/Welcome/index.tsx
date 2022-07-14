import React from 'react';

import { StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button, Text } from '@rneui/themed';
import { RootStackParamList } from 'src/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavScreenProps = NativeStackNavigationProp<RootStackParamList>;

const WelcomeScreen = () => {
  const navigation = useNavigation<NavScreenProps>();
  return (
    <View>
      <Text>Welcome Page</Text>
      <Button onPress={() => navigation.navigate('Dashboard')}>
        Go to Home
      </Button>
    </View>
  );
};

export default WelcomeScreen;
