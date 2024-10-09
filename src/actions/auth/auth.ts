import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {FirebaseApp} from '../../config/firebase';

// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

const auth = getAuth(FirebaseApp);

export const authLogin = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        errorCode,
        errorMessage,
      };
    });
};

export const authRregister = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed up
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        errorCode,
        errorMessage,
      };
    });
};
