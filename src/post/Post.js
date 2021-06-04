import React from "react";

const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src="" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">sequi non totam ipsa magni?</span>
        <hr />
        <span className="postData">1 hour ago</span>
      </div>
    </div>
  );
};

export default Post;
