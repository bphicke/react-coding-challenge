import React from "react";
import Api from "../api";
import { CssBaseline, Grid } from "@material-ui/core";
import { Header } from "./Header";
import { StyledButton } from "./StyledButton";
import { MessageColumns } from "./MessageColumns";
import { StyledSnackbar } from "./StyledSnackbar";
import { ButtonsLayout } from "./ButtonsLayout";

class MessageList extends React.PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      messages: [],
      cleared: {},
      open: false,
      lastError: {},
    };
  }

  componentDidMount() {
    this.api.start();
  }

  checkForError = newMessage => {
    if (
      newMessage.priority === 1 &&
      newMessage.id !== this.state.lastError.id
    ) {
      if (this.state.open) {
        this.handleSnackbarClose();
      }

      setTimeout(() => {
        this.setState({
          open: true,
          lastError: { ...newMessage },
        });
      }, 0);
    }
  };

  api = new Api({
    messageCallback: message => {
      this.messageCallback(message);
    },
  });

  messageCallback(message) {
    const { messages } = this.state;
    this.checkForError(message);
    this.setState({
      messages: [message, ...messages],
    });
  }

  handleStartStopMessagesClick = () => {
    const isApiStarted = this.api.isStarted();
    if (isApiStarted) {
      this.api.stop();
    } else {
      this.api.start();
    }
    this.forceUpdate();
  };

  handleClearAllClick = () => {
    const cleared = {};
    this.state.messages.forEach(messageProps => {
      cleared[messageProps.id] = true;
    });
    this.setState({ cleared: cleared });
  };

  handleClearMessage = id => () => {
    this.setState(prev => {
      const cleared = { ...prev.cleared };
      cleared[id] = true;
      return {
        cleared: cleared,
      };
    });
  };

  handleSnackbarClose = () => {
    this.setState({ open: false });
  };

  render() {
    const isApiStarted = this.api.isStarted();
    return (
      <>
        <CssBaseline />
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          <Grid container direction="column">
            <ButtonsLayout>
              <StyledButton
                variant="contained"
                onClick={this.handleStartStopMessagesClick}
              >
                {isApiStarted ? "Stop" : "Start"}
              </StyledButton>
              <StyledButton
                variant="contained"
                onClick={this.handleClearAllClick}
              >
                CLEAR
              </StyledButton>
            </ButtonsLayout>
            <Grid container direction="row" spacing={2} justify="center">
              <MessageColumns
                handleClearMessage={this.handleClearMessage}
                cleared={this.state.cleared}
                messages={this.state.messages}
              />
            </Grid>
          </Grid>
        </div>
        <StyledSnackbar
          onClose={this.handleSnackbarClose}
          open={this.state.open}
          errorMessage={this.state.lastError.message}
        />
      </>
    );
  }
}

export default MessageList;
