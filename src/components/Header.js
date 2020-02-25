import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const Header = () => {
  return (
    <AppBar
      style={{ backgroundColor: "#ffffff", color: "#000000" }}
      position="static"
    >
      <Toolbar>
        <Typography variant="h4">Help.com Coding Challenge</Typography>
      </Toolbar>
    </AppBar>
  );
};
