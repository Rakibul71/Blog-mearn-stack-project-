import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="home">
        <Posts></Posts>
        <SideBar></SideBar>
      </div>
    </>
  );
};

export default Home;
