import React, { FC, MouseEventHandler, ReactElement, ReactChild } from "react";
import "./styles.module.css";

interface IProps {
  children: ReactChild | ReactChild[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className: string;
  other?: object;
}
const x = { disabled: true };
const Button: FC<IProps> = ({
  children,
  onClick,
  className = "",
  other,
}): ReactElement => {
  return (
    <button className={className} {...other} onClick={onClick}>
      <div className="left"></div>
      {children}
      <div className="right"></div>
    </button>
  );
};

export { Button };
