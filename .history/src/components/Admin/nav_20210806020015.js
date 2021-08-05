import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ExitToApp, ShoppingCart, LocalShipping } from "@material-ui/icons";

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

export default function AdminNav(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        style={{ backgroundcolor: "orange" }}
        col
        position="static"
        id="adminNavbar"
      >
        <Toolbar>
          <Typography align="left" variant="h6" className={classes.title}>
            {props.name + "       "}
            <Button
              color="inherit"
              id="adminproductButton"
              startIcon={<ShoppingCart />}
            >
              Products
            </Button>
            <Button
              color="inherit"
              id="adminOrderButton"
              startIcon={<LocalShipping />}
            >
              Orders
            </Button>
          </Typography>
          <Button color="inherit" id="logoutButton" startIcon={<ExitToApp />}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
