import React from 'react';
import "./Topbar.css"

const TopBar = () => {
    return (
        <div className="top">  
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-linkedin"></i>
            <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <div className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About </li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">LogOut</li>
                </div>
            </div>
            <div className="topRight"> 
                <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <i className="topSearchIcon fas fa-search"></i>
            </div> 
        </div>
    );
};

export default TopBar;