/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const React = require('react');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Layout = require('./src/components').Layout;

const wrapWithLayout = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export default wrapWithLayout;
