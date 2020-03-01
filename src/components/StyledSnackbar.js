import React from "react";
import { Snackbar, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

export const StyledSnackbar = ({ onClose, open, errorMessage }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
    >
      <Alert severity="error" variant="filled" onClose={onClose}>
        <Typography>{errorMessage}</Typography>
      </Alert>
    </Snackbar>
  );
};
