import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Welcome from './screens/Welcome'
import About from './screens/About'
import ScanQR from './screens/ScanQR'
import Login from './screens/Login'
import AnonymousDonation from './screens/AnonymousDonation'
import SignUp from './screens/SignUp'
import ForgotPassword from './screens/ForgotPassword'
import Donate from './screens/Donate'
import DonateStart from './screens/DonateStart'
import CreditCard from './screens/CreditCard'
import ProjectsRouter from './screens/Projects/Router'
import DonationsRouter from './screens/Donations/Router'
import Profile from './screens/Profile'
import PickChurch from './screens/PickChurch'
import useBodyLock from './utils/useBodyLock'

function App() {
  useBodyLock()

  return (
    <div className="font-sans">
      <Router>
        <Switch>
          <Route path="/" exact>
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
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/anonymous-donation">
            <AnonymousDonation />
          </Route>
          <Route path="/projects">
            <ProjectsRouter />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/donate-start">
            <DonateStart />
          </Route>
          <Route path="/credit-card">
            <CreditCard />
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
        </Switch>
      </Router>
    </div>
  )
}

export default App
