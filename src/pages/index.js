import React from "react";
import { Helmet } from "react-helmet";

import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { coreStarted } from "./../@core/models/core/props";
import { websiteStarted } from "./../models/website/props";
const TestComponent = ({ websiteStarted, coreStarted }) => {
  return (
    <div>
      <h2>Core Started: {coreStarted + ""}</h2>
      <h2>Website Started: {websiteStarted + ""}</h2>
    </div>
  );
};
const EnhancedTest = compose(
  connect(
    createStructuredSelector({
      coreStarted,
      websiteStarted,
    })
  )
)(TestComponent);

const Home = ({ websiteStarted, coreStarted }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`My Title ${websiteStarted + ""} ${coreStarted + ""}`}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      Hello world!
      <EnhancedTest />
    </div>
  );
};

export default compose(
  connect(
    createStructuredSelector({
      coreStarted,
      websiteStarted,
    })
  )
)(Home);
