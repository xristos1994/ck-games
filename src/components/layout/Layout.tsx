import React, { FC, ReactElement, ReactChild } from "react";
import "./layout.css";
import "./colors.css";
import "./fonts.css";
import { Header /* Footer */ } from "./components";

interface IProps {
  children: ReactChild | ReactChild[];
}

export const Layout: FC<IProps> = ({ children }): ReactElement => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};
