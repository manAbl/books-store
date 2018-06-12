import React from 'react';
import '../../styles/sidebars-styles.css';


const Sidebars = () => (
  <React.Fragment>
    <div id="authors-week">
      <h3> Authors of the week </h3>
      <React.Fragment>
        <div><img alt="" /> <span> Sebastian Jeremy </span> </div>
        <div><img alt="" /> <span> Jonathan Doe </span></div>
        <div><img alt="" /> <span> Angedivne Summer </span></div>
        <div><img alt="" /> <span> Noah Jhones </span></div>
        <div><img alt="" /> <span> Tommy Adam </span></div>
        <div><img alt="" /> <span> Ian  Cassandra </span></div>
      </React.Fragment>
    </div>
    <div id="books-year">
      <h3> Books of the year </h3>
    </div>
  </React.Fragment>
);

export default Sidebars;
