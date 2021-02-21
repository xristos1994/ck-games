import React from "react";

export const Layout = ({ children }) => {
  return (
    <>
      <header style={{ height: 56, backgroundColor: "yellow" }}>Header</header>
      {children}
    </>
  );
};
