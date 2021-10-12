import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  hero: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    backgroundImage:
      "linear-gradient(to bottom, #3A8DFFD9, #86B9FFD9),  url(https://res.cloudinary.com/diswlgneg/image/upload/v1633815148/bg-img_i2xyym.png) ",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2.5rem",
    color: "white",
    textAlign: "center",
    width: "45%",
  },
  speechBubble: {
    position: "absolute",
    top: "28%",
    width: "5rem",
  },
  main: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    height: "100vh",
    width: "55%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  top: {
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
      gap: "1rem",
    },
    padding: "2rem 3rem",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "2.5rem",
    position: "absolute",
    top: 0,
  },
  lightText: {
    color: "#B0B0B0",
  },
  loginBtn: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1rem",
    marginTop: "2rem",
    padding: "1.25rem 4rem",
    boxShadow: "none",
  },
  switchBtn: {
    boxShadow: "0px 3px 5px -3px #3A8DFF66",
    padding: "1rem 2rem",
  },
  form: {
    width: "60%",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2.375rem",
  },
  formTitle: {
    margin: "3rem 0",
    fontWeight: 600,
  },
  inputContainer: {
    gap: "3rem",
  },
}));
