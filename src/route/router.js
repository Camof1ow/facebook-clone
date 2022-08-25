import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import LoginPage from "../pages/Loginpage";
import SignUp from "../pages/Signuppage";
import { getCookieToken } from "../storage/Cookie";
import Kakao from "../components/Kakao";

const Router = () => {
  const usertoken = getCookieToken();
  //Redirection 하는법
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={usertoken ? <Mainpage /> : <Navigate to="/login" replace />}
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/oauth/kakao/callback" element={<Kakao/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
