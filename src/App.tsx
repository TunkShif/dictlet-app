import React from 'react'
import Header from './components/Header'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './pages/Home'
import Dict from './pages/Dict'
import CurrentLanguage from './containers/CurrentLanguage'

export default function App() {
  return (
    <Router>
      <CurrentLanguage.Provider>
        <Header />

        <Switch>
          <Route path="/dict/:query">
            <Dict />
          </Route>

          <Route path="/">
              <Home />
          </Route>
        </Switch>
      </CurrentLanguage.Provider>
    </Router>
  )
}
