import React, { Component } from "react"
import { Link } from "react-router-dom"
import logo from "./logo.svg"
import "./App.css"
import { Helmet } from "react-helmet"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8"/>
          <title>This is Scrappable</title>
          <meta name="description" content="This is to shows that React is Scrappable"/>
          <meta name="keywords" content="react,scrappable"/>
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to Scrappable React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to={{ pathname: "/about" }}>About Us</Link>
      </div>
    )
  }
}

export default App
