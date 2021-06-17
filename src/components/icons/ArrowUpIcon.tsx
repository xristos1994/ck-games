import React, { FC, ReactElement, SVGProps } from "react";

const ArrowUpIcon: FC<SVGProps<SVGSVGElement>> = (props): ReactElement => {
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
        points="396.6,352 416,331.3 256,160 96,331.3 115.3,352 256,201.5"
        fill="currentColor"
      />
    </svg>
  );
};

export { ArrowUpIcon };
