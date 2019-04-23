import React, { Component } from 'react';
export default class About extends Component {

  render() {
    return (
      <div className="App-about">
        <h1>Creating<br/><span/>Whilst<br/>Crunching</h1>
        <h2>Welcome to my canvas!</h2>
        <h3>Be careful of crumbs</h3>
        <p>Developer exploring code in JavaScript</p>
        <div class="social-links">
          <a href="https://github.com/jklodge">
            <i class="fab fa-github" title="GitHub"></i>
          </a>
          <a href="mailto:jessicaklodge@gmail.com">
            <i class="far fa-envelope" title="Email"></i>
          </a>
        </div>
      </div>
    );
  }
}
