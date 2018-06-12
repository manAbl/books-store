import React, { Component } from 'react';
import '../styles/app-styles.css';
import Header from './common/Header';
import Viewer from './viewer/Viewer';
import Sidebars from './sidebars/Sidebars';
import Carousel from './carousel/Carousel';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Carousel />
        <div className="main-wrapper" id="main">
          <Sidebars />
          <Viewer/>
        </div>
      </div>
    );
  }
}

export default App;
