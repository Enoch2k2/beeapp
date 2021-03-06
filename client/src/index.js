import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {store} from './store';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
