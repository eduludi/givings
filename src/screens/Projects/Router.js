import React from 'react'

import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Detail from './Detail'
import Projects from './Projects'

function ProjectsRouter() {
  const route = useRouteMatch()

  return (
    <Switch>
      <Route path={`${route.url}/`} exact>
        <Projects />
      </Route>
      <Route path={`${route.url}/detail`}>
        <Detail />
      </Route>
    </Switch>
  )
}

export default ProjectsRouter
