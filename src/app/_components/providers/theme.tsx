import { createTheme, CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";

const ThemeProvider: React.FC<React.PropsWithChildren> = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 14,
    },
    palette: {
      mode: "light",
      primary: {
        main: "#304A36",
      },
      background: {
        default: "#F7F8FA",
        paper: "#FFFFFF",
      },
      text: {
        primary: "#737373",
      },
    },
    components: {},
  });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
