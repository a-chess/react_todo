import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '@js/pages/home'

const Routing = () => {
  return (
    <Router>
      <div>
        <Route exact path="/app" component={Home} />
      </div>
    </Router>
  )
}

export default Routing
