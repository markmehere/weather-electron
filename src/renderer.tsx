import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
import './index.css'

ReactDOM.render(<Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
    <App />
  </Provider>, document.getElementById('app'));
