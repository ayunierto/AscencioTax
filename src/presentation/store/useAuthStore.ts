import type {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AuthStatus} from '../../infrastructure/interfaces/auth.status';
import {create} from 'zustand';
import {
  authCheckStatus,
  authLogin,
  authRegister,
  authSignOut,
} from '../../actions/auth/auth';
import {AuthResponse} from '../../infrastructure/interfaces/AuthResponse';
// import {StorageAdapter} from '../../config/adapter/storage-adapter';

export interface AuthState {
  status: AuthStatus;
  user?: FirebaseAuthTypes.User;

  login: (email: string, password: string) => Promise<AuthResponse>;
  regsiter: (email: string, password: string) => Promise<AuthResponse>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
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

    // await StorageAdapter.setItem('email', email);
    // await StorageAdapter.setItem('password', password);
    // console.log(await StorageAdapter.getItem('email'));
    // console.log(await StorageAdapter.getItem('password'));

    // TODO: almacenar ua variable para verifica en
    // TODO: posteriores inicios de sesion que haya guardadosu datos personales en el profile

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

  checkStatus: async () => {
    const resp = await authCheckStatus();
    if (!resp) {
      set({status: 'unauthenticated', user: undefined});
      return;
    }
    set({status: 'authenticated', user: resp});
  },

  logout: async () => {
    const resp = await authSignOut();
    if (resp.msg === 'error') {
      return;
    }
    set({status: 'unauthenticated', user: undefined});
  },
}));
