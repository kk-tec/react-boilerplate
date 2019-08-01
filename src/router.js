import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
  return <h2>Home</h2>
}

function Login() {
  return <h2>Login</h2>
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
              <Link to="/login/">Login</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/login/" component={Login} />
      </div>
    </Router>
  )
}

export default AppRouter
