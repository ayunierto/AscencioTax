import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, FAB, Text, TextInput, useTheme} from 'react-native-paper';
import {RootStackParams} from '../../natigation/StackNavigator';
import {FIREBASE_API_KEY} from '@env';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

export const LoginScreen = ({navigation}: Props) => {
  const theme = useTheme();
  console.log(FIREBASE_API_KEY);
  return (
    <View style={{...styles.container, backgroundColor: theme.colors.primary}}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={require('../../../assets/logo.webp')}
            style={styles.banner}
          />
          <Text
            style={{...styles.title, color: theme.colors.onPrimary}}
            variant="displayLarge">
            Sign In
          </Text>
          <Text variant="titleMedium" style={{color: theme.colors.onPrimary}}>
            You don't have an account?{' '}
            <Text
              onPress={() => navigation.navigate('RegisterScreen')}
              style={{color: theme.colors.primaryContainer}}>
              Sign Up
            </Text>
          </Text>
        </View>

        <View style={styles.social}>
          <FAB
            icon={'logo-google'}
            onPress={() => console.log('Pressed')}
            style={{backgroundColor: theme.colors.onPrimary}}
          />
          <FAB
            icon={'logo-apple'}
            onPress={() => console.log('Pressed')}
            style={{backgroundColor: theme.colors.onPrimary}}
          />

          <FAB
            icon={'logo-facebook'}
            onPress={() => console.log('Pressed')}
            style={{backgroundColor: theme.colors.onPrimary}}
          />
        </View>

        <View style={styles.orEmail}>
          <Text variant="titleMedium" style={{color: theme.colors.onPrimary}}>
            Or login with email
          </Text>
        </View>

        <View style={styles.inputs}>
          <TextInput
            autoCapitalize="none"
            placeholder="user@gmail.com"
            label="Email"
            keyboardType="email-address"
            style={{backgroundColor: theme.colors.onPrimary}}
          />
          <TextInput
            label="Password"
            placeholder="*********"
            secureTextEntry
            style={{backgroundColor: theme.colors.onPrimary}}
          />
          <Button
            icon={'log-in-outline'}
            uppercase
            mode="elevated"
            onPress={() => console.log('press login')}>
            Login
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
  },
  banner: {
    width: '100%',
    resizeMode: 'contain',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: '300',
  },
  social: {
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  orEmail: {
    alignItems: 'center',
    marginBottom: 20,
  },
  inputs: {
    gap: 20,
  },
});

export default LoginScreen;
