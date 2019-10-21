import React from 'react'

import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Detail from './Detail'
import LocalProjects from './LocalProjects'
import ConferenceProjects from './ConferenceProjects'
import UnionProjects from './UnionProjects'

function ProjectsRouter() {
  const route = useRouteMatch()

  return (
    <Switch>
      <Route path={`${route.url}/`} exact>
        <LocalProjects />
      </Route>
      <Route path={`${route.url}/detail`}>
        <Detail />
      </Route>
      <Route path={`${route.url}/conference`}>
        <ConferenceProjects />
      </Route>
      <Route path={`${route.url}/union`}>
        <UnionProjects />
      </Route>
    </Switch>
  )
}

export default ProjectsRouter
