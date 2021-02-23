import React from "react";
import { Helmet } from "react-helmet";

const Home = ({ websiteStarted, coreStarted }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`My Title ${websiteStarted + ""} ${coreStarted + ""}`}</title>
      </Helmet>
      Hello world!
    </div>
  );
};

export default Home;
