import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "../pages/Mainpage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
