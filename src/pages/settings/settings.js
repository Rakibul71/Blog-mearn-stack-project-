import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import "./Setting.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingsTitle">
          <div className="settingsUpdateTitle">Update your account</div>
          <div className="settingsDeleteTitle">Delete your account</div>
        </div>
        <form action="" className="settingsForm">
          <label htmlFor="">Profile picture</label>
          <div className="settingsPP">
            <img src="" alt="" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fas fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>UserName</label>
          <input type="text" placeholder="rakib" />
          <label>Email</label>
          <input type="Email" placeholder="rakib@email.com" />

          <label>Password</label>
          <input type="Password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar></SideBar>
    </div>
  );
};

export default Settings;
