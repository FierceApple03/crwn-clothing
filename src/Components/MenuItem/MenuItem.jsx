import React from "react";

import "./menuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  const menuItemClass = size ? `${size} menu-item` : "menu-item";
  return (
    <li className={menuItemClass}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </li>
  );
};

export default MenuItem;
