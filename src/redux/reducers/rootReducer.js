import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import noteReducer from './noteReducer';

const rootReducer = combineReducers({
  notes: noteReducer,
  firestore: firestoreReducer
});

export default rootReducer;
