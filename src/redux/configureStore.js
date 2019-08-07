import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; //This is useful only on development
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from '../config/fbConfig';

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //This is useful only on development

  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        thunk.withExtraArgument({ getFirebase, getFirestore }),
        reduxImmutableStateInvariant()
      ),
      reduxFirestore(fbConfig),
      reactReduxFirebase(fbConfig)
    )
  );
}
