import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import { Button, Input, Text } from '@rneui/themed';

import PrimaryWrapper from 'src/components/PrimaryWrapper';

import { AppLogo, FONTS } from 'src/constants';

const RegisterScreen = () => {
  const isDark = useColorScheme() === 'dark';

  const inputBgColor = isDark ? '' : 'white';
  const inputColor = isDark ? '#fff' : '#000';

  const inputContainerStyle = {
    backgroundColor: inputBgColor,
  };

  const newTextStyle = {
    ...Styles.newUserText,
    color: isDark ? '#fff' : '#A0AEC0',
  };

  return (
    <KeyboardAvoidingView behavior="height">
      <ScrollView contentContainerStyle={{ justifyContent: 'center' }}>
        <View>
          <PrimaryWrapper>
            <Image style={Styles.appLogo} source={AppLogo} />
            <Text style={Styles.signupText}>Signup with the bank</Text>
            <Text style={Styles.trackText}>you can track.</Text>
          </PrimaryWrapper>
          <View style={{ padding: 20 }}>
            <Text style={newTextStyle}>New user</Text>

            <Input
              inputContainerStyle={inputContainerStyle}
              inputStyle={{ color: inputColor }}
              placeholder="First name"
            />

            <Input
              inputContainerStyle={inputContainerStyle}
              inputStyle={{ color: inputColor }}
              placeholder="Last name"
            />

            <Input
              inputContainerStyle={inputContainerStyle}
              inputStyle={{ color: inputColor }}
              placeholder="Phone number"
            />

            <Input
              inputContainerStyle={inputContainerStyle}
              inputStyle={{ color: inputColor }}
              placeholder="Password"
            />

            <Input
              inputContainerStyle={inputContainerStyle}
              inputStyle={{ color: inputColor }}
              placeholder="Confirm password"
            />

            <View style={{ paddingHorizontal: 10, marginVertical: 20 }}>
              <Button buttonStyle={{ height: 50 }}>Register</Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const Styles = StyleSheet.create({
  appLogo: {
    width: 65.5,
    height: 65.5,
    resizeMode: 'contain',
    marginTop: 20,
  },
  signupText: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: FONTS.medium,
    color: '#fff',
  },
  trackText: {
    fontSize: 20,
    fontFamily: FONTS.medium,
    color: '#fff',
  },
  newUserText: {
    fontSize: 22,
    fontFamily: FONTS.medium,
    marginBottom: 30,
    marginLeft: 8,
  },
});
