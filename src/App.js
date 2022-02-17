import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Events from './events'

export default function App () {
  return (
    <div id="app">
      {/* <Events/> */}
      <Router>
        <Switch>
          <Route path="/events" component={Events} />
          <Redirect to="/events" />
        </Switch>
      </Router>
    </div>
  )
}
