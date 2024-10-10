import type {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AuthStatus} from '../../infrastructure/interfaces/auth.status';
import {create} from 'zustand';
import {authLogin, authRegister} from '../../actions/auth/auth';
import {AuthResponse} from '../../infrastructure/interfaces/AuthResponse';

export interface AuthState {
  status: AuthStatus;
  user?: FirebaseAuthTypes.UserCredential;

  login: (email: string, password: string) => Promise<AuthResponse>;
  regsiter: (email: string, password: string) => Promise<AuthResponse>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useAuthStore = create<AuthState>()((set, get) => ({
  status: 'checking',
  user: undefined,

  login: async (email: string, password: string) => {
    const resp = await authLogin(email, password);
    if (resp.msg === 'error') {
      set({status: 'unauthenticated', user: undefined});
      return {
        msg: 'error',
        user: undefined,
      };
    }

    set({status: 'authenticated', user: resp.user});
    return {
      msg: 'ok',
      user: resp.user,
    };
  },

  regsiter: async (email: string, password: string) => {
    const resp = await authRegister(email, password);
    if (resp.msg === 'error') {
      set({status: 'unauthenticated', user: undefined});
      return {
        msg: 'error',
        user: undefined,
      };
    }

    set({status: 'authenticated', user: resp.user});
    return {
      msg: 'ok',
      user: resp.user,
      error: undefined,
    };
  },
}));
