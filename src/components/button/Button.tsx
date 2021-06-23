import React, { FC, MouseEventHandler, ReactElement, ReactChild } from "react";
import { classnames } from "@utils/component-utils";
import "./styles.module.css";

interface IProps {
  children: ReactChild | ReactChild[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className: string;
  other?: Record<string, unknown>;
}

const Button: FC<IProps> = ({
  children,
  onClick,
  className = "",
  other,
}): ReactElement => {
  return (
    <button
      className={classnames("main-button-hover-effect", {
        [className]: !!className,
      })}
      {...other}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
