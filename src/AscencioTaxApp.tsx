/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView, View} from 'react-native';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';

// Screens
import LoginScreen from './presentation/screens/auth/LoginScreen';
import RegisterScreen from './presentation/screens/auth/RegisterScreen';
import ProfileScreen from './presentation/screens/settings/ProfileScreen';
import HomeScreen from './presentation/screens/home/HomeScreen';
import BookingScreen from './presentation/screens/booking/BookingScreen';
import ResumeScreen from './presentation/screens/booking/ResumeScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#002e5d',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
  },
};

export const AscencioTaxApp = () => {
  return (
    <PaperProvider
      theme={theme}
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      {/* <SafeAreaView style={{flex: 1}}> */}
      <View>
        <RegisterScreen />
      </View>
      {/* </SafeAreaView> */}
    </PaperProvider>
  );
};
