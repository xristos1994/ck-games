import React, { FC, MouseEventHandler, ReactElement, ReactChild } from 'react';
import { classnames } from '@utils/component-utils';
import './Button.module.css';

interface IProps {
  children: ReactChild | ReactChild[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  ariaLabel?: string;
  other?: Record<string, unknown>;
}

const Button: FC<IProps> = ({ children, onClick, className = '', ariaLabel, other = {} }): ReactElement => {
  return (
    <button
      className={classnames('main-button-hover-effect', {
        [className]: !!className
      })}
      aria-label={ariaLabel}
      {...other}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
