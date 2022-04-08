import React from 'react'
import { Link, useLocation, Router, Route, Redirect, routes } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/first" page={FirstPage} name="first" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
