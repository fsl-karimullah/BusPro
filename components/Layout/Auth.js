import React, { Children } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "../Navbars/AuthNavbar";
import FooterSmall from "../Footers/FooterSmall";

// views

import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";

export default function Auth({ children }) {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" +
                require("../../assets/img/egister_bg_2.png").default +
                ")",
            }}
          ></div>
          <Switch>{children}</Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
