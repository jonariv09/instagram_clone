import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// components to be load
const Home = lazy(() => import('./pages/Home/index'))
const Login = lazy(() => import('./pages/Login/index'))

function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  )
}

export default AppRoutes
