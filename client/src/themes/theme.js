import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.625rem",
    },
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
      },
      underline: {
        "&:before": {
          borderBottom: "1px solid #D5DFEE",
        },
        "&:hover:not(.Mui-focused):before": {
          borderBottom: "1px solid #3A8DFF",
        },
      },
    },
    MuiInputLabel: {
      root: {
        "&$focused": {
          color: "#B0B0B0",
        },
        "&$shrink": {
          color: "#B0B0B0",
          transform: "translate(0.25rem, -1rem)",
        },
      },
    },
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" },
  },
});
