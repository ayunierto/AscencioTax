/* eslint-disable react/react-in-jsx-scope */
import {
  PaperProvider,
  // adaptNavigationTheme
} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';

import 'react-native-gesture-handler';
import {
  NavigationContainer,
  // DefaultTheme
} from '@react-navigation/native';
import {
  // RootStackParams,
  StackNavigator,
} from './presentation/natigation/StackNavigator';

import {theme} from './config/theme';
import {AuthProvider} from './presentation/provider/AuthProvider';

// const {LightTheme} = adaptNavigationTheme({reactNavigationLight: DefaultTheme});

export const AscencioTaxApp = () => {
  return (
    <PaperProvider
      theme={theme}
      settings={{
        // eslint-disable-next-line react/no-unstable-nested-components
        icon: props => <IonIcon {...props} />,
      }}>
      <NavigationContainer
        theme={{
          dark: false,
          colors: {
            primary: theme.colors.primary,
            background: theme.colors.primary,
            card: theme.colors.primaryContainer,
            text: theme.colors.onPrimary,
            border: theme.colors.tertiary,
            notification: theme.colors.primaryContainer,
          },
        }}>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
    </PaperProvider>
  );
};
