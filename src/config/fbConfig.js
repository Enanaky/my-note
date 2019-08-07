import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA6D8uvYmVaVYvEfFzNaIgZedBdXXgsm-k',
  authDomain: 'my-notte.firebaseapp.com',
  databaseURL: 'https://my-notte.firebaseio.com',
  projectId: 'my-notte',
  storageBucket: '',
  messagingSenderId: '219524592815',
  appId: '1:219524592815:web:fbbdd335a677c0fd'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
