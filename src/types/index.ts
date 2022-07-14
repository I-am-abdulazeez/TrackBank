import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Dashboard: undefined;
  SendReceive: undefined;
  Chart: undefined;
  Settings: undefined;
  Login: undefined;
  Register: undefined;
};

export type NavScreenProps = NativeStackNavigationProp<RootStackParamList>;
