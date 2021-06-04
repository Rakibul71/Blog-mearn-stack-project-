import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">about me</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          facere laboriosam provident minima ducimus eos.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Catagories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">life</li>
          <li className="sidebarListItem">music</li>
          <li className="sidebarListItem">sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-linkedin"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
