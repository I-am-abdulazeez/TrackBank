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
import { useNavigation } from '@react-navigation/native';
import { NavScreenProps, RootStackParamList } from 'src/types';

const LoginScreen = () => {
  const isDark = useColorScheme() === 'dark';
  const { theme } = useTheme();
  const { navigate } = useNavigation<NavScreenProps>();

  const inputBgColor = isDark ? '' : 'white';
  const inputColor = isDark ? '#fff' : '#000';

  const inputContainerStyle = {
    backgroundColor: inputBgColor,
  };

  const loginTextStyle = {
    ...Styles.detailsText,
    color: isDark ? '#fff' : '#A0AEC0',
  };

  const stuffStyle: any = {
    color: isDark ? 'white' : '',
    fontFamily: FONTS.mediumItalic,
    textAlign: 'center',
  };

  return (
    <SafeAreaView>
      <PrimaryWrapper>
        <Image style={Styles.appLogo} source={AppLogo} />
        <Text style={Styles.welcomeText}>Welcome back</Text>
        <Text style={Styles.missedText}>You've been missed.</Text>
      </PrimaryWrapper>
      <View style={Styles.secWrapper}>
        <View>
          <Text style={loginTextStyle}>Login your details.</Text>
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

          <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
            <Button buttonStyle={{ height: 50 }}>Login</Button>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={Styles.noAccounText}>
              No account yet?{' '}
              <Text
                onPress={() => navigate('Register')}
                style={{
                  color: theme.colors.primary,
                  textDecorationLine: 'underline',
                }}>
                Register
              </Text>
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 230 }}>
          <Text style={stuffStyle}>Banking with satisfaction...</Text>
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
    fontFamily: FONTS.medium,
    marginTop: 20,
    color: 'white',
  },
  missedText: {
    fontSize: 20,
    fontFamily: FONTS.medium,
    marginTop: 10,
    color: 'white',
  },
  detailsText: {
    fontSize: 22,
    fontFamily: FONTS.medium,
    marginTop: 20,
    marginBottom: 40,
    marginLeft: 8,
  },
  noAccounText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
});
