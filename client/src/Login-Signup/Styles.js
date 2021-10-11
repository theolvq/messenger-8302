import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  hero: {
    backgroundImage:
      "linear-gradient(to bottom, #3A8DFFD9, #86B9FFD9),  url(https://res.cloudinary.com/diswlgneg/image/upload/v1633815148/bg-img_i2xyym.png) ",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2.5rem",
    color: "white",
    textAlign: "center",
    width: "45%",
  },
  main: {
    height: "100vh",
    width: "55%",
    justifyContent: "center",
  },
  top: {
    padding: "1.875rem 2.625rem",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  lightText: {
    color: "#B0B0B0",
  },
  loginBtn: {
    fontFamily: "Montserrat",
    margin: "2rem",
    padding: "1rem 3.5rem",
    boxShadow: "none",
  },
  switchBtn: {
    boxShadow: "0px 3px 5px -3px #3A8DFF66",
    marginLeft: "4rem",
  },
  form: {
    width: "358px",
    margin: "0 auto",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2.375rem",
  },
  formTitle: {
    marginBottom: "2rem",
    fontWeight: 600,
  },
  inputContainer: {
    gap: "2.625rem",
  },
}));
