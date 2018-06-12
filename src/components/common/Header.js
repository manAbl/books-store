import React from 'react';
import '../../styles/navbar-styles.css';

const Header = () => (
  <nav id="navbar">
    <div className="search-options-wrapper">
      <div id="dropdown-category">
        <span>Browse Category</span>
      </div>
      <div className="search-input">
        search box here
      </div>
    </div>
    <span className="name"> read<strong>books</strong> </span>
    <div className="profile-optiones-n-menu-wrapper">
      <div className="user-profile circle">
        <img alt="" />
        user profile img goes here
      </div>
      <div className="sidebar-menu">
        Menu goes here
      </div>
    </div>
  </nav>
);

export default Header;
