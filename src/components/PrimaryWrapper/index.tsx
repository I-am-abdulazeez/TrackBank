import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

const PrimaryWrapper = ({ children }: PropsWithChildren) => {
  return <View style={Styles.primaryWrapper}>{children}</View>;
};

export default PrimaryWrapper;

const Styles = StyleSheet.create({
  primaryWrapper: {
    height: '45%',
    textAlign: 'center',
    padding: 40,
    alignItems: 'center',
    backgroundColor: '#218C74',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
});
