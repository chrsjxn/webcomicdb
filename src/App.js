import React, { Component } from 'react';
import './styles/App.css';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import trackerReducer from './reducers/tracker';

import Tracker from './components/tracker';

const store = createStore(combineReducers({tracker: trackerReducer}));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <h1>WebcomicDB</h1>
          <Tracker />
        </div>
      </Provider>
    );
  }
}

export default App;
