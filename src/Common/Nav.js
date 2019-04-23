import React, { Component } from 'react';
import trash from '../bin.png';

export default class Nav extends Component {

  trashEmptied = () => {
    const c = document.getElementById("defaultCanvas0");
    let ctx = c.getContext("2d");
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }

  render() {
    return (
      <div className="Nav">
      <header className="Nav-header">Jess Lodge</header>
      <img className="trash" src={trash} alt="trash" onClick={this.trashEmptied}/>
      </div>
    );
  }
}
