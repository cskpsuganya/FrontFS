import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
UserNav extends React.ComponentComponent {
  render() {  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        style={{ background: "orange" }}
        position="static"
        id="userNavbar"
      >
        <Toolbar>
          <Typography align="left" variant="h6" className={classes.title}>
            {props.name + "       "}
            <Button color="inherit" id="instrumentHomeButton">
              Home
            </Button>
            <Button color="inherit" id="instrumentCartButton">
              Cart
            </Button>
            <Button color="inherit" id="instrumentOrderButton">
              My Order
            </Button>
          </Typography>
          <Button color="inherit" id="logoutButton">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
