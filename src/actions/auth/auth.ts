import auth from '@react-native-firebase/auth';
import {AuthResponse} from '../../infrastructure/interfaces/AuthResponse';

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

export const authCheckStatus = async () => {
  try {
    const user = auth().currentUser;
    return user;
  } catch (error) {
    return null;
  }
};
