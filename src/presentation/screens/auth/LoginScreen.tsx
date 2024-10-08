import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, FAB, Text, TextInput, useTheme} from 'react-native-paper';

export const LoginScreen = () => {
  const theme = useTheme();
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
            New to this site? Sign Up
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
            label="Email"
            style={{backgroundColor: theme.colors.onPrimary}}
          />
          <TextInput
            label="Password"
            secureTextEntry
            style={{backgroundColor: theme.colors.onPrimary}}
          />
          <Button icon={'log-in-outline'} uppercase mode="elevated">
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
    paddingBottom: 20,
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
