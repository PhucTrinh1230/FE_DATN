import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import React from "react";
import SidebarProfile from "./ContentProfile/SidebarProfile";
import { Route, Routes } from "react-router-dom";
import ContentProfile1 from "./ContentProfile/ContentProfile1";
import ContentProfile2 from "./ContentProfile/ContentProfile2";

const Profile = () => {
  return (
    <div className="row">
      <div className="col-4">
        <SidebarProfile />
      </div>
      <div className="col-8">
        <Routes>
          <Route path="" element={<ContentProfile1 />}></Route>
          <Route path="profile1" element={<ContentProfile1 />} />
          <Route path="profile2" element={<ContentProfile2 />} />
        </Routes>
      </div>
    </div>
  );
};
export default Profile;
