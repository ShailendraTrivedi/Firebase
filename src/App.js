import React, { useEffect } from "react";
import AllPagesRoute from "./App/AllPagesRoute";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   localStorage.clear();
  // }, []);
  return <AllPagesRoute />;
};

export default App;
