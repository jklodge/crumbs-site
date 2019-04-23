import React, { Component } from 'react';
import About from './Components/About';
// import Skills from './Components/Skills';
import Nav from './Common/Nav';
import crumbs from './crumbs.png';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Common/Sketches';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <P5Wrapper crumbs={crumbs} sketch={sketch} image={crumbs}></P5Wrapper>
        <About crumbs={crumbs}/>
        {/* <Skills /> */}
    </div>
    );
  }
}

export default App;
