import React from "react";
import "./SinglePost.css";
import img2 from "../../images/about.jpg";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={img2} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author <b>Rakibull</b>
          </span>
          <span className="singlePostDate">1hour Ago</span>
        </div>
        <p cassName="singlePostDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugit
          molestias asperiores veritatis voluptates quasi ratione dolorem
          temporibus fugiat Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Dolorum, excepturi esse est consectetur, molestias libero minima
          itaque facilis numquam aliquam, aliquid quod vitae voluptatibus rerum
          dolor et repellat distinctio assumenda!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
