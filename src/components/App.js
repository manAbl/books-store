import React, { Component } from 'react';
import '../styles/app-styles.css';
import Header from './common/Header';
import Viewer from './viewer/Viewer';
import Sidebars from './sidebars/Sidebars';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <div className="">

        </div>
        <div className="main-wrapper" id="main">
          <Sidebars />
          <Viewer/>
        </div>
      </div>
    );
  }
}

export default App;
