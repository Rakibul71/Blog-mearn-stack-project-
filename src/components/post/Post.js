import React from "react";
import "./Post.css";
import img1 from "../../images/about.jpg";

const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src={img1} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postData">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti culpa
        doloremque labore eveniet! Consequuntur amet possimus hic, debitis sequi
        facere fugiat minus laudantium aliquam velit.
      </p>
    </div>

    // <div className="post">
    //   <img className="postImg" src={img1} alt="" />
    //   <div className="postInfo">
    //     <div className="postCats">
    //       <span className="postCat">Music</span>
    //       <span className="postCat">Life</span>
    //     </div>
    //     <hr />
    //     <span className="postData">1 hour ago</span>
    //   </div>
    // </div>
  );
};

export default Post;
