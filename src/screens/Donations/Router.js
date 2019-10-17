import React from 'react'

import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Details from './Details'
import Donations from './Donations'

function DonationsRouter() {
  const route = useRouteMatch()

  return (
    <Switch>
      <Route path={`${route.url}/`} exact>
        <Donations />
      </Route>
      <Route path={`${route.url}/details`}>
        <Details />
      </Route>
    </Switch>
  )
}

export default DonationsRouter
