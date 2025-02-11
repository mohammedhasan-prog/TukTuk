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

const App = () => {
  return (
    <div className="text-3xl ">
      <Routes>
        <Route path="/" element={<Start />} />

        <Route path="/login" element={<UserLogin />} />
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
      </Routes>
    </div>
  );
};

export default App;
