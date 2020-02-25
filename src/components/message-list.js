import React from "react";
import Button from "@material-ui/core/Button";
import Api from "../api";
import { CssBaseline, Grid, Box } from "@material-ui/core";
import { Header } from "./Header";
import { StyledButton } from "./StyledButton";

class MessageList extends React.PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      messages: [],
    };
  }

  api = new Api({
    messageCallback: message => {
      this.messageCallback(message);
    },
  });

  componentDidMount() {
    this.api.start();
  }

  messageCallback(message) {
    const { messages } = this.state;
    this.setState(
      {
        messages: [...messages.slice(), message],
      },
      () => {
        // Included to support initial direction. Please remove upon completion
        console.log(messages);
      },
    );
  }

  handleClick = () => {
    const isApiStarted = this.api.isStarted();
    if (isApiStarted) {
      this.api.stop();
    } else {
      this.api.start();
    }
    this.forceUpdate();
  };

  render() {
    const isApiStarted = this.api.isStarted();
    return (
      <>
        <CssBaseline />
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          <Grid container column>
            <Grid container item justify="space-around">
              <Box m={2} width="500px">
                <StyledButton variant="contained" onClick={this.handleClick}>
                  {isApiStarted ? "Stop Messages" : "Start Messages"}
                </StyledButton>
              </Box>
            </Grid>
            <Grid></Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default MessageList;
