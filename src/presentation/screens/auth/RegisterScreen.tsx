import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {View, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, FAB, Text, TextInput, useTheme} from 'react-native-paper';
import {RootStackParams} from '../../natigation/StackNavigator';
import {authRegister} from '../../../actions/auth/auth';

interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

export const RegisterScreen = ({navigation}: Props) => {
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    await authRegister(email, password);
  };

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
            Sign Up
          </Text>
          <Text variant="titleMedium" style={{color: theme.colors.onPrimary}}>
            Already a member?{' '}
            <Text
              style={{color: theme.colors.primaryContainer}}
              onPress={() => navigation.goBack()}>
              Sign In
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
            Or sign up with email
          </Text>
        </View>

        <View style={styles.inputs}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            style={{backgroundColor: theme.colors.onPrimary}}
          />
          <TextInput
            label="Password"
            autoCapitalize="none"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
            style={{backgroundColor: theme.colors.onPrimary}}
          />
          <Button
            icon={'log-in-outline'}
            uppercase
            mode="elevated"
            onPress={register}>
            Sign Up
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

export default RegisterScreen;
