import React from "react";
import { Outlet } from "react-router";

// TODO: Implement theme provider logic if needed here

const ThemeProvider: React.FC<React.PropsWithChildren> = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default ThemeProvider;
