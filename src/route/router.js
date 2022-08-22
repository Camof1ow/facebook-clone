import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import LoginPage from "../pages/Loginpage";
import SignUp from "../pages/Signuppage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;


