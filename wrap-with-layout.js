const React = require("react");
const Layout = require("./src/components").Layout;

export default ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
