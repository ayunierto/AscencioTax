import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {PropsWithChildren, useEffect} from 'react';
import {RootStackParams} from '../natigation/StackNavigator';
import {useAuthStore} from '../store/useAuthStore';

export const AuthProvider = ({children}: PropsWithChildren) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const {status, checkStatus} = useAuthStore();

  useEffect(() => {
    checkStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (status !== 'checking') {
      if (status === 'authenticated') {
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeScreen'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'LoginScreen'}],
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return <>{children}</>;
};
