import React from "react";
import { Route, Routes } from "react-router-dom";
import OuterComponent from "./OuterComponent";
import SignIn from "../signin/SignIn";
import SignUp from "../signup/SignUp";
import Register from "../register/Register";
import Profile from "../profile/Profile";

const AllPagesRoute = () => {
  return (
    <Routes>
      <Route element={<OuterComponent />}>
        <Route path="/" element={<div>Hello</div>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AllPagesRoute;
