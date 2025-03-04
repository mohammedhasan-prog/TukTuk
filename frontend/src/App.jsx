import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import Home from "./pages/Home";
import UserProtectedWrrapper from "./pages/UserProtectedWrrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedWrarapper from "./pages/CaptainProtectedWrarapper";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";

const App = () => {
  return (
    <div className="text-3xl ">
      <Routes>
        <Route path="/" element={<Start />} />

        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />

        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrrapper>
              <Home />
            </UserProtectedWrrapper>
          }
        />

        <Route
          path="/user/logout"
          element={
            <UserProtectedWrrapper>
              <UserLogout />
            </UserProtectedWrrapper>
          }
        />
        <Route path="/captain-home" element={
          <CaptainProtectedWrarapper>
          <CaptainHome />
          </CaptainProtectedWrarapper>
          
          
          } />

      </Routes>
    </div>
  );
};

export default App;
