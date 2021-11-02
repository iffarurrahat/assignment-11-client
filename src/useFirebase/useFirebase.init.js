import { initializeApp } from 'firebase/app';
import firebaseConfig from './useFirebase.config';

const initializeFirebaseApp = () => {
  initializeApp(firebaseConfig);
};

export default initializeFirebaseApp;
