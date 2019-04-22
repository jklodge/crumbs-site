import React, { Component } from 'react';
export default class Crumbs extends Component {
  addImage = (e) => {
          let img = document.createElement("img");
          img.src = this.props.crumbs;
          img.height = 200;
          img.width = 200;
          e.target.appendChild(img);
          console.log(e.target);
  }
  render() {
    return (
    <header className="Nav-header">Jess Lodge</header>
  );
  }
}
