import React from 'react';
import {
  useColorScheme,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import { Button, Input, Text, useTheme } from '@rneui/themed';

import PrimaryWrapper from 'src/components/PrimaryWrapper';

import { AppLogo, FONTS } from 'src/constants';

const LoginScreen = () => {
  const isDark = useColorScheme() === 'dark';
  const { theme } = useTheme();
  return (
    <SafeAreaView>
      <PrimaryWrapper>
        <Image style={Styles.appLogo} source={AppLogo} />
        <Text style={Styles.welcomeText}>Welcome back</Text>
        <Text style={Styles.missedText}>You've been missed.</Text>
      </PrimaryWrapper>
      <View style={Styles.secWrapper}>
        <View>
          <Text
            style={{
              ...Styles.detailsText,
              color: isDark ? '#fff' : '#A0AEC0',
            }}>
            Login your details.
          </Text>
          <Input
            inputContainerStyle={{
              backgroundColor: isDark ? '' : 'white',
            }}
            inputStyle={{ color: isDark ? '#fff' : '#000' }}
            placeholder="Phone number"
          />
          <Input
            inputContainerStyle={{
              backgroundColor: isDark ? '' : 'white',
            }}
            inputStyle={{ color: isDark ? '#fff' : '#000' }}
            placeholder="Password"
          />

          <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
            <Button buttonStyle={{ height: 50 }}>Login</Button>
          </View>
        </View>

        <View style={{ marginTop: 150 }}>
          <Text
            style={{
              color: isDark ? 'white' : '',
              fontFamily: FONTS.mediumItalic,
              textAlign: 'center',
            }}>
            Banking with satisfaction...
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const Styles = StyleSheet.create({
  secWrapper: {
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '45%',
  },
  appLogo: {
    width: 65.5,
    height: 65.5,
    resizeMode: 'contain',
    marginTop: 26,
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: FONTS.mediumItalic,
    marginTop: 20,
    color: 'white',
  },
  missedText: {
    fontSize: 25,
    fontFamily: FONTS.medium,
    marginTop: 10,
    color: 'white',
  },
  detailsText: {
    fontSize: 22.5,
    fontFamily: FONTS.medium,
    marginTop: 20,
    marginBottom: 40,
    marginLeft: 8,
  },
});
