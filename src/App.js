import React, { Component } from 'react';
import About from './Components/About';
// import Skills from './Components/Skills';
import Nav from './Common/Nav';
import crumbs from './crumbs.png';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Common/Sketches';

class App extends Component {
  state = {
    color:[Math.random()*255, Math.random()*255, Math.random()*255]
  };

  randomColor = () => {
    this.setState(
      {
        color:[Math.random()*255, Math.random()*255, Math.random()*255]
      }
  )
}
  render() {
    return (
      <div className="App">
        <Nav />
        <P5Wrapper crumbs={crumbs} sketch={sketch} image={crumbs}></P5Wrapper>
        {/* <button onClick={this.randomColor}>Random Color</button> */}
        <About crumbs={crumbs}/>
        {/* <Skills /> */}
    </div>
    );
  }
}

export default App;
