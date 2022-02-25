import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import "flowbite";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import MainLandingPage from "MainLandingPage.js";
import HomePage from "./HomePage";
import Signup from "./pages/Signup";

import Login from "./pages/Login";

import "slick-carousel/slick/slick.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // retusrn <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <MainLandingPage />
        </Route>

        <Router path="/login">
          <Login />
        </Router>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
