import React from "react";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home">
      <ul className="directory-menu">
        <li className="menu-item">
          <div className="content">
            <h1 className="title">Hats</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </li>
        <li className="menu-item">
          <div className="content">
            <h1 className="title">Jackets</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </li>
        <li className="menu-item">
          <div className="content">
            <h1 className="title">Sneakers</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </li>
        <li className="menu-item">
          <div className="content">
            <h1 className="title">Womens</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </li>
        <li className="menu-item">
          <div className="content">
            <h1 className="title">Mens</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Home;
