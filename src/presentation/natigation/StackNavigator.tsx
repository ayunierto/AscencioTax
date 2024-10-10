import React from 'react';
import {
  createStackNavigator,
  //   StackCardStyleInterpolator,
} from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import LoadingScreen from '../loading/LoadingScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/home/HomeScreen';
import BookingScreen from '../screens/booking/BookingScreen';
import ResumeScreen from '../screens/booking/ResumeScreen';
import ProfileScreen from '../screens/settings/ProfileScreen';

export type RootStackParams = {
  LoadingScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ProfileScreen: undefined;
  HomeScreen: undefined;
  BookingScreen: undefined;
  ResumeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

// const fadeAnimation: StackCardStyleInterpolator = ({current}) => {
//   return {
//     cardStyle: {
//       opacity: current.progress,
//     },
//   };
// };

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{
        headerShown: false,
        // cardStyleInterpolator: fadeAnimation,
      }}>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
      <Stack.Screen name="ResumeScreen" component={ResumeScreen} />
    </Stack.Navigator>
  );
};
