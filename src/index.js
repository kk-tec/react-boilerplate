import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router'
import { Provider } from 'mobx-react'
import store from './store'
import './index.css'

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <AppRouter />
      </Provider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
