import React, { Component } from 'react'
import thunkMiddleware from 'redux-thunk'
import './App.css';

import { fetchHttpData } from './actions'
import { createStore, applyMiddleware } from 'redux'
import HttpDataApp from './reducers'

const store = createStore(
  HttpDataApp,
  applyMiddleware(
    thunkMiddleware
  )
)

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => store.dispatch(fetchHttpData())}>Get http information</button>
      </div>
    )
  }
}

export default App
