import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const homeStyle = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
  },
  body: {
    width: "50vw",
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[10],
    borderRadius: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    alignItems: "center",

    "& img": {
      width: 200,
    },
    "& .body__actions": {
      paddingTop: theme.spacing(2),
    },
  },
}));

const Home = () => {
  const classes = homeStyle();
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <img src="/whatsapp.png" alt="logo" />
        <Typography variant="h5">Please Login or signup to start</Typography>
        <Typography align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, illo
          provident laboriosam et ipsam magnam consequuntur neque sint
          recusandae mollitia. Dolores aliquam sint iusto beatae deleniti sed ea
          molestiae vero!
        </Typography>

        <div className="body__actions">
          <Button>Login </Button>
          <Button>Login with Google </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
