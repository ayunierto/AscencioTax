/* eslint-disable react/react-in-jsx-scope */
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/natigation/StackNavigator';

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
    <NavigationContainer>
      <PaperProvider
        theme={theme}
        settings={{
          // eslint-disable-next-line react/no-unstable-nested-components
          icon: props => <IonIcon {...props} />,
        }}>
        {/* <SafeAreaView style={{flex: 1}}> */}
        <StackNavigator />
        {/* </SafeAreaView> */}
      </PaperProvider>
    </NavigationContainer>
  );
};
