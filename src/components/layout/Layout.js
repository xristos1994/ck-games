import React from "react";
import "./layout.css";
// import styles from "./styles.module.css";
import { Header, Footer } from "./components";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
