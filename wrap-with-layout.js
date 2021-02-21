const React = require("react");
const Layout = require("./src/components").Layout;

export default ({ element, props }) => {
  console.log(1111);
  return <Layout {...props}>{element}</Layout>;
};
