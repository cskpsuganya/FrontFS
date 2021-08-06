import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Card } from "material-ui";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 240,
    borderColor: "black",
  },
  media: {
    height: 100,
    width: 100,
    margin: "auto",
  },
  banner: {
    position: "relative",
    padding: "100px",
    backgroundColor: "grey",
  },
  body: {
    padding: "15px",
  },
  content: {
    backgroundColor: "grey",
    height: 27,
  },
}));

function MediaCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={2}>
      <Box border={1}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.src}
              title="Name"
            />
            <CardContent className={classes.content}>
              <Typography>
                {props.name} ₹{props.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Grid>
  );
}

export default class Home extends React.ComponentComponent {
  render() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <div className={classes.banner}>
          <Typography component="h1" variant="h3" style={{ fontWeight: 600 }}>
            WELCOME HOME
          </Typography>
        </div>
        <div />
        <div id="instrumentHomeBody" className={classes.body}>
          <Grid container spacing={3} direction="row">
            {/* TODO backend card gen here */}
            {Array(20)
              .fill(1)
              .map((el, i) => (
                <MediaCard
                  price="100"
                  name="ProductName"
                  src="https://m.media-amazon.com/images/I/41eBIiMMjbL._SY355_.jpg"
                />
              ))}
          </Grid>
        </div>
      </div>
    );
  }
}
