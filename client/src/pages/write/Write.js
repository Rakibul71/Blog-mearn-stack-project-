import React from "react";
import "./Write.css";

const Write = () => {
  return (
    <div className="write">
      <img className="writeImg" src="" alt="" />
      <from className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autofocus="true"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
      </from>
      <button className="writeSubmit">publish</button>
    </div>
  );
};

export default Write;
