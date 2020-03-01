import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <Typography variant="h5">Help.com Coding Challenge</Typography>
      </Toolbar>
    </AppBar>
  );
};
