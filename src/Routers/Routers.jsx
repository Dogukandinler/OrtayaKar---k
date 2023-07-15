import React from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";
import SignIn from "../Screens/Login/SignIn/SignIn";
import SignUp from "../Screens/Login/SignUp/SignUp";
import Landing from "./../Screens/Landing/Landing";
import Profile from "./../Screens/Profile/Profile";
import Reservations from "../Screens/Reservations/Reservations";
import Discover from "./../Screens/Discover/Discover";
import Error from "../Screens/Error/Error";
import Comments from "../Screens/Comments/Comments";
import Menu from "../Screens/Menu/Menu";
import RestourantHome from "../Screens/RestourantHome/RestourantHome";
import Favorite from "../Screens/Favorite/Favorite";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<SignIn />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reservations/:id" element={<Reservations />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/comments/:id" element={<Comments />} />
          <Route path="/restoran/:id" element={<RestourantHome />} />
          <Route path="/favrestoran/:id" element={<Favorite />} />
          <Route path="/menu/:id" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
