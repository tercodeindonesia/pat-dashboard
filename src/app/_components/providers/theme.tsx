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
        main: "#516F58",
      },
      background: {
        default: "#F7F8FA",
        paper: "#FFFFFF",
      },
      text: {
        primary: "#737373",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "unset",
            borderRadius: "10px",
            padding: "16px 14px",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: "10px",
          },
        },
      },
      MuiDataGrid: {
        styleOverrides: {
          root: {
            backgroundColor: "#FFFFFF",
          },
          columnHeader: {
            backgroundColor: "#FFFFFF",
          },
        },
      },
      MuiPickersOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: "10px",
          },
        },
      },
    },
  });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
