import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#00EEC4",
    color: "#000000",
    width: "100%",
    height: "100%",
  },
});

export const StyledButton = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Button {...props} className={classes.button}>
      {children}
    </Button>
  );
};
