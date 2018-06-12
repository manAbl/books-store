import React from 'react';
import '../../styles/viewer-styles.css';
import Card from '../common/Card';

const Viewer = () => (
  <div id="popular-categories">
    <div className="categories-nav_container">
    <h3> Popular by Genre </h3>
    <nav>
      <a href="#" className="active"> All Genres </a>
      <a href="#"> Business </a>
      <a href="#"> Science </a>
      <a href="#"> Fiction </a>
      <a href="#"> Philosophy </a>
      <a href="#"> Biography </a>
    </nav>
    </div>
      <Card />
  </div>
);

export default Viewer;
