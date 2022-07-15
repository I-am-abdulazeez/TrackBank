import React from 'react';
import { StatusBar, SafeAreaView, View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Button, Image, Text, useTheme } from '@rneui/themed';

import { NavScreenProps } from 'src/types';
import { AppLogo, FONTS } from 'src/constants';

const WelcomeScreen = () => {
  const { navigate } = useNavigation<NavScreenProps>();
  const { theme } = useTheme();

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.primary }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <View style={Styles.welcomeWrapper}>
        <View style={Styles.imageTextContainer}>
          <Image style={Styles.appLogo} source={AppLogo} />
          <Text style={Styles.brandText}>Track Bank</Text>
        </View>

        <View>
          <Text style={Styles.lgText}>Build Money,</Text>
          <Text style={Styles.lgText}>the smart way.</Text>
          <Text style={Styles.mdText}>Save and recieve money faster. </Text>
        </View>

        <View>
          <View style={Styles.buttonStack}>
            <Button
              titleStyle={{ color: theme.colors.white }}
              buttonStyle={{
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.white,
                borderWidth: 1.5,
                width: '100%',
              }}
              type="solid">
              Login
            </Button>
            <View style={{ marginHorizontal: 10 }} />
            <Button
              type="solid"
              titleStyle={{ color: theme.colors.primary }}
              buttonStyle={{
                backgroundColor: theme.colors.white,
                width: '100%',
              }}>
              Register
            </Button>
          </View>
          <View style={{ marginTop: theme.spacing.xl }}>
            <Text style={Styles.smText}>Banking with satisfaction...</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const Styles = StyleSheet.create({
  welcomeWrapper: {
    padding: 30,
    justifyContent: 'space-between',
    height: '100%',
  },
  imageTextContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandText: {
    fontFamily: FONTS.medium,
    textAlign: 'center',
    fontSize: 22.5,
    color: 'white',
    marginTop: 7,
  },
  appLogo: {
    width: 70.5,
    height: 70.5,
    resizeMode: 'contain',
  },
  lgText: {
    fontFamily: FONTS.bold,
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
  mdText: {
    fontFamily: FONTS.mediumItalic,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
  smText: {
    fontFamily: FONTS.mediumItalic,
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  buttonStack: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
});
