import React from 'react';
import { Link } from 'react-router-dom';
import "./Topbar.css"

const TopBar = () => {
    const user = false;
    return (
        <div className="top">  
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-linkedin"></i>
            <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/">About</Link></li>
                    <li className="topListItem"><Link className="link" to="/">Contact</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">Write</Link></li>
                    <li className="topListItem">{user && "Logout"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                user ? (
                    <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                ) :(
                    <ul className="topList">
                        <li className="topListItem">
                        <Link className="link" to="/login">Login</Link>
                        </li>
                        <li className="topListItem">
                        <Link className="link" to="/register">Register</Link>
                        </li>
                    </ul>
                )
                } 
                <i className="topSearchIcon fas fa-search"></i>
            </div> 
        </div>
    );
};

export default TopBar;