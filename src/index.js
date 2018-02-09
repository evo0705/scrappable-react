import React from "react"
import { render } from "react-snapshot"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import AboutUsPage from "./AboutUsPage"

render(
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={AboutUsPage}/>
    </Switch>
  </Router>
  , document.getElementById("root"),
)
registerServiceWorker()
