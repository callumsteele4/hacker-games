import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

// Import the views
import Root from './components/Root/Root';
import Home from './components/Home/Home';

import FamilyWrapper from './components/FamilyWrapper/FamilyWrapper';
import Family from './components/Family/Family';
import FamilyDetail from './components/FamilyDetail/FamilyDetail';

import QuizWrapper from './components/QuizWrapper/QuizWrapper';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';

const env = process.env.NODE_ENV;
const middlewares = [ thunk ];

middlewares.push(createLogger());

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.routing
  });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
        <IndexRoute component={Home}/>
        {
          // Family section
        }
        <Route path="/family" component={FamilyWrapper}>
          <IndexRoute component={Family}/>
          <Route path="/detail" component={FamilyDetail}/>
        </Route>

        {
          // Quiz section
        }
        <Route path="/quiz" component={QuizWrapper}>
          <IndexRoute component={Quiz}/>
          <Route path="/result" component={Result}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
