import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Welcome from './screens/Welcome'
import About from './screens/About'
import ScanQR from './screens/ScanQR'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import ForgotPassword from './screens/ForgotPassword'
import Donate from './screens/Donate'
import DonationsRouter from './screens/Donations/Router'
import Profile from './screens/Profile'
import PickChurch from './screens/PickChurch'

function App() {
  return (
    <div className="container font-sans ">
      <Router>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/pick-church">
            <PickChurch />
          </Route>
          <Route path="/scan-qr">
            <ScanQR />
          </Route>
          <Route path="/forgotPassword">
            <ForgotPassword />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/donations">
            <DonationsRouter />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Redirect from="/" to="/welcome" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
