import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet"

class AboutUsPage extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8"/>
          <title>About Scrappable</title>
          <meta name="description" content="About Us: This is to shows that React is Scrappable"/>
          <meta name="keywords" content="react,scrappable,about"/>
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">About Scrappable React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default AboutUsPage;
