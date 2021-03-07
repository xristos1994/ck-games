import React from "react";
import "./layout.css";
import "./colors.css";
import "./fonts.css";
import { Header /* Footer */ } from "./components";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};
