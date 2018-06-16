import React from 'react';
import '../../styles/carousel-styles.css';

class Carousel extends React.Component {
  render() {
    return (
       <div id="carousel">
    <div className="carousel-item">
      <div className="carousel-item_description">
        <h4> Attack of the planet <br/> by Andrea Jordan </h4>
        <img alt="" />
      </div>
    </div>
  </div>
    );
  }
}

export default Carousel;
