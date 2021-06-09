import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./Single.css";

const Single = () => {
  return (
    <div className="single">
      <SinglePost></SinglePost>
      <SideBar></SideBar>
    </div>
  );
};

export default Single;
