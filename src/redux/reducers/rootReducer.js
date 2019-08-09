import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import noteReducer from './noteReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  notes: noteReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
