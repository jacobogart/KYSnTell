import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/index';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import App from './containers/App/App';

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

