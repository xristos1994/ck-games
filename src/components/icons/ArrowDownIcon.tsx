import React, { FC, ReactElement, SVGProps } from "react";

const ArrowDownIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactElement => {
  return (
    <svg
      height="100%"
      {...props}
      version="1.1"
      viewBox="0 0 512 512"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5"
        fill="currentColor"
      />
    </svg>
  );
};

export { ArrowDownIcon };
