import { Text } from '@rneui/themed';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

import PrimaryWrapper from 'src/components/PrimaryWrapper';

import { AppLogo } from 'src/constants';

const RegisterScreen = () => {
  return (
    <SafeAreaView>
      <PrimaryWrapper>
        <Image style={Styles.appLogo} source={AppLogo} />
        <Text>Signup with the bank</Text>
        <Text>you can track.</Text>
      </PrimaryWrapper>
      <View>
        <Text>Register Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const Styles = StyleSheet.create({
  appLogo: {
    width: 65.5,
    height: 65.5,
    resizeMode: 'contain',
    marginTop: 26,
  },
});
