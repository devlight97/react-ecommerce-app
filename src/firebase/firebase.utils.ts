import * as firebase from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import {
  collection,
  getFirestore,
} from 'firebase/firestore';

import { collectionRegister } from './firestore.factory';

// const config = {
//   apiKey: 'AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14',
//   authDomain: 'crwn-db.firebaseapp.com',
//   databaseURL: 'https://crwn-db.firebaseio.com',
//   projectId: 'crwn-db',
//   storageBucket: 'crwn-db.appspot.com',
//   messagingSenderId: '850995411664',
//   appId: '1:850995411664:web:7ddc01d597846f65'
// };

const config = {
  apiKey: 'AIzaSyD6R0st6FCUC3nv0QH_PDe_553nY-iNw34',
  authDomain: 'shop-online-react-app.firebaseapp.com',
  projectId: 'shop-online-react-app',
  storageBucket: 'shop-online-react-app.appspot.com',
  messagingSenderId: '507927460057',
  appId: '1:507927460057:web:f284bac37a5218c10626c8',
  measurementId: 'G-FSDHRWKKR6',
};

const app = firebase.initializeApp(config);
const db = getFirestore(app);

collectionRegister('users', collection(db, 'users'));

export const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const checkAuthStateChanged = (callback: any) => onAuthStateChanged(auth, callback);

export default firebase;
