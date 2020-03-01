import React from "react";
import { Grid, Box } from "@material-ui/core";

export const ButtonsLayout = ({ children }) => {
  return (
    <Grid container item justify="center">
      <Grid item>
        <Box m={2} mr={0} width="150px">
          {children[0]}
        </Box>
      </Grid>
      <Grid>
        <Box m={2} width="150px">
          {children[1]}
        </Box>
      </Grid>
    </Grid>
  );
};
