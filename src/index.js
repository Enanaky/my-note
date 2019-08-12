import React from 'react';
import { render } from 'react-dom';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';

const store = configureStore();

store.firebaseAuthIsReady.then(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
