import React, { Component } from 'react';
import trash from '../bin.png';

export default class Nav extends Component {

  clearTrash = () => {
    var c = document.getElementById("defaultCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
  }

  render() {
    return (
      <div>
        <header className="Nav-header">Jess Lodge
        <img src={trash} onClick={this.clearTrash}/></header>
      </div>
  );
  }
}
