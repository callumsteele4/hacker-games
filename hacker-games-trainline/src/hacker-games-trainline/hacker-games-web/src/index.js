import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import './index.css';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';
import thunk from 'redux-thunk';
import * as createLogger from 'redux-logger';
import rootReducer from './reducers';

const env = process.env.NODE_ENV;
const middlewares = [ thunk ];

if (env === 'dev') {
  middlewares.push(createLogger());
}

const store = createStore(rootReducer, Map(), applyMiddleware(...middlewares));
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.get('routing')
  });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
