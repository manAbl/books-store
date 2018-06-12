import React from 'react';
import '../../styles/sidebars-styles.css';


const Sidebars = () => (
  <React.Fragment>
    <div id="authors-week">
      <h3> Authors of the week </h3>
      <React.Fragment>
        <div><img alt="" /> <span> Sebastian Jeremy </span> </div>
        <div><img alt="" /> <span> Jonathan Doe </span></div>
        <div><img alt="" /> <span> Angeline Summer </span></div>
        <div><img alt="" /> <span> Noah Jhones </span></div>
        <div><img alt="" /> <span> Tommy Adam </span></div>
        <div><img alt="" /> <span> Ian  Cassandra </span></div>
      </React.Fragment>
    </div>
    <div id="books-year">
      <h3> Books of the year </h3>
      <React.Fragment>
        <div>
          <img alt="" />
          <div>
            Big Magic: Creative Living Beyond Fear
            <br/>
            <span className="author-gray">by Elizabeth Gilbert</span>
          </div>
        </div>
        <div>
          <img alt="" />
          <div>
            Big Magic: Creative Living Beyond Fear
            <br/>
            <span className="author-gray">by Elizabeth Gilbert</span>
          </div>
        </div>
        <div>
          <img alt="" />
          <div>
            Big Magic: Creative Living Beyond Fear
            <br/>
            <span className="author-gray">by Elizabeth Gilbert</span>
          </div>
        </div>
        <div>
          <img alt="" />
          <div>
            Big Magic: Creative Living Beyond Fear
            <br></br>
            <span className="author-gray">by Elizabeth Gilbert</span>
          </div>
        </div>
        <div>
          <img alt="" />
          <div>
            Big Magic: Creative Living Beyond Fear
            <br/>
            <span className="author-gray">by Elizabeth Gilbert</span>
          </div>
        </div>
        <div>
          <img alt="" />
          <div>
            Big Magic: Creative Living Beyond Fear
            <br/>
            <span className="author-gray">by Elizabeth Gilbert</span>
          </div>
        </div>
      </React.Fragment>
    </div>
  </React.Fragment>
);

export default Sidebars;
