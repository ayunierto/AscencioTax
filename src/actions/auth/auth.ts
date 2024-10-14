import auth from '@react-native-firebase/auth';
import {AuthResponse} from '../../infrastructure/interfaces/AuthResponse';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const authRegister = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  try {
    const resp = await auth().createUserWithEmailAndPassword(email, password);
    return {
      msg: 'ok',
      user: resp.user,
    };
  } catch (error) {
    console.log(error);
    return {
      msg: 'error',
      user: undefined,
    };
  }
};

export const authLogin = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  try {
    const resp = await auth().signInWithEmailAndPassword(email, password);
    return {
      msg: 'ok',
      user: resp.user,
    };
  } catch (error) {
    console.error(error);
    return {
      msg: 'error',
      user: undefined,
    };
  }
};

export const authSignOut = async (): Promise<AuthResponse> => {
  try {
    await auth().signOut();
    return {
      msg: 'ok',
      user: undefined,
    };
  } catch (error) {
    return {
      msg: 'error',
      user: undefined,
    };
  }
};

export const authCheckStatus = () => {
  try {
    const user = auth().currentUser;
    return user;
  } catch (error) {
    return null;
  }
};

GoogleSignin.configure({
  webClientId:
    '595254665638-tjbirrm0g9valqknsj0ctu2pcha4m7te.apps.googleusercontent.com',
});

export const authLoginWithGoogle = async () => {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  // Get the users ID token
  const {data} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(data!.idToken);

  // Sign-in the user with the credential
  const user = await auth().signInWithCredential(googleCredential);
  console.log(user);
  return user;
};
