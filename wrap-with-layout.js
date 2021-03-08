const React = require("react");
const Layout = require("./src/components").Layout;

const wrapWithLayout = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export default wrapWithLayout;
