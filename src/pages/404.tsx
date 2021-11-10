import React, { FC, ReactElement, useLayoutEffect } from 'react';

const PageNotFound: FC = (): ReactElement => {
  useLayoutEffect(() => {
    if (window && window.location) {
      window.location.href = '/';
    }
  }, []);

  return <>Page Not Found</>;
};

export default PageNotFound;
