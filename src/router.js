import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from './layouts/login'
import Home from './layouts/home'

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact render={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </Router>
  )
}

export default AppRouter
