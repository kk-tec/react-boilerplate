import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './layouts/login'

function Index() {
  return <h2>Home</h2>
}

function App() {
  return <h2>App</h2>
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/app">App</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/app" component={App} />
      </div>
    </Router>
  )
}

export default AppRouter
