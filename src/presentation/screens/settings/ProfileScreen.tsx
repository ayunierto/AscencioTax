/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet} from 'react-native';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';

export const ProfileScreen = () => {
  const theme = useTheme();
  return (
    <View style={{...styles.container, backgroundColor: theme.colors.primary}}>
      <View style={styles.header}>
        <Text
          style={{...styles.title, color: theme.colors.onPrimary}}
          variant="displayLarge">
          Profile
        </Text>
        <Text variant="titleMedium" style={{color: theme.colors.onPrimary}}>
          Please complete your personal information.
        </Text>
      </View>

      <View style={styles.inputs}>
        <TextInput
          label="First Name"
          style={{backgroundColor: theme.colors.onPrimary}}
        />
        <TextInput
          label="Last Name"
          style={{backgroundColor: theme.colors.onPrimary}}
        />
        <TextInput
          label="Email"
          disabled
          value="jhon-doe@gmail.com"
          style={{backgroundColor: theme.colors.onPrimary}}
        />
        <TextInput
          label="Phone Number"
          style={{backgroundColor: theme.colors.onPrimary}}
        />
        <TextInput
          label="Address"
          style={{backgroundColor: theme.colors.onPrimary}}
        />
        <Button icon={'save-outline'} uppercase mode="elevated">
          Save and continue
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  title: {
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

export default ProfileScreen;
