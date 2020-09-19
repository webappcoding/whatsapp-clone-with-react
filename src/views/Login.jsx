import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LoginForm from "../components/LoginForm";

const loginStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
  },
  body: {
    width: "40vw",
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[10],
    borderRadius: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    alignItems: "center",

    "& .body__actions": {
      paddingTop: theme.spacing(2),
    },
  },
  header: {
    margin: "0 auto",
    marginBottom: theme.spacing(4),
    "& .logo": {
      width: 150,
    },
  },
}));
const Login = () => {
  const classes = loginStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img src="/whatsapp.png" alt="logo" className="logo" />
      </div>

      <div className={classes.body}>
        <Typography variant="h5">Please Login or signup to start</Typography>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
