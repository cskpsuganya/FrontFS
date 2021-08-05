import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import TextField from "material-ui/TextField";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "../../styles";
import { ExitToApp, ShoppingCart, LocalShipping } from "@material-ui/icons";

import Orders from "../../UserOrder/orders";
import CartBody from "../../Cart/cart";

// TODO apply data here
const rows = [
  {
    orderID: "r82hoefiw",
    userID: "sam",
    ProductName: "guitar",
    price: "2000",
    quantity: "1",
  },
];

export default function DashboardPage() {
  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      <Grid item xs={7}>
        <CartBody />
      </Grid>
      <Grid item xs={3}>
        <img
          style={{ padding: "80px" }}
          src="https://www.wikihow.com/images/thumb/1/18/Take-Better-Notes-Step-1-Version-2.jpg/v4-460px-Take-Better-Notes-Step-1-Version-2.jpg.webp"
        ></img>
        <Button
          style={{ background: "orange" }}
          color="inherit"
          id="adminproductButton"
          startIcon={<ShoppingCart />}
        >
          Add Product
        </Button>
      </Grid>
    </Grid>
  );
}
