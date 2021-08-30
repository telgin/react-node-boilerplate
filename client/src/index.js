import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './ducks'
import thunk from 'redux-thunk';
import {AppRootConnector} from './components/app-root-connector';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <AppRootConnector/>
  </Provider>,
  document.getElementById('root')
);