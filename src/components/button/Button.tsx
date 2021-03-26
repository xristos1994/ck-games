import React, { FC, MouseEventHandler, ReactElement, ReactChild } from "react";
import "./styles.module.css";

interface IProps {
  children: ReactChild | ReactChild[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className: string;
  other?: object;
}

const Button: FC<IProps> = ({
  children,
  onClick,
  className = "",
  ...other
}): ReactElement => {
  return (
    <button className={className} {...other} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
