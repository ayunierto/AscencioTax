import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export interface AuthResponse {
  msg: string;
  user: FirebaseAuthTypes.UserCredential | undefined;
}
