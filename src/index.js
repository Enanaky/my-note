import React, { Suspense } from 'react';
import { render } from 'react-dom';
import configureStore from './redux/configureStore';
// const configureStore = React.lazy(() => import('./redux/configureStore'));
import { Provider } from 'react-redux';

import './index.css';
// const App = React.lazy(() => import('./components/App'));
import App from './components/App';

const store = configureStore();

store.firebaseAuthIsReady.then(() => {
  render(
    <Provider store={store}>
      <Suspense fallback={<p>loading...</p>}>
        <App />
      </Suspense>
    </Provider>,
    document.getElementById('root')
  );
});
