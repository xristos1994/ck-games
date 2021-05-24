import React, { FC, ReactElement, ReactChild } from "react";
import { Background, Header, Menu } from "./components";
import "./layout.css";
import "./colors.css";
import "./fonts.css";
import "./button.css";
import "./variables.css";

interface IProps {
  children: ReactChild | ReactChild[];
}

export const Layout: FC<IProps> = ({ children }): ReactElement => {
  return (
    <>
      <Background />
      <Header />
      <Menu />
      {children}
    </>
  );
};
