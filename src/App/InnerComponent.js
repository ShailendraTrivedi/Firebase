import React from "react";
import { Outlet } from "react-router-dom";
const InnerComponent = () => {
  return <Outlet />;
};

export default InnerComponent;
