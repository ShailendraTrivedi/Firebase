import React, { useState } from "react";
import UserDetails from "./userdetails/UserDetails";

const Register = () => {
  return (
    <div className="relative bg-my-image overflow-y-scroll w-screen h-screen ">
      <div className="absolute left-[14rem] top-[3rem] w-[60rem]  bg-white rounded-2xl">
        <UserDetails />
      </div>
    </div>
  );
};

export default Register;
