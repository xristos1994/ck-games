import React, { FC, ReactElement, useEffect } from "react";

const PageNotFound: FC = (): ReactElement => {
  useEffect(() => {
    window.location.href = "/";
  }, []);

  return <>Page Not Found</>;
};

export default PageNotFound;
