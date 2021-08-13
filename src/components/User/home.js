import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Card} from 'material-ui';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = (theme) => ({
  card: {
    maxWidth: 240,
    borderColor: "black",
  },
  media: {
    height: 100,
    width: 100,
    margin: 'auto',
  },
  banner:{
    position:"relative",
    padding:"100px",
    backgroundColor: "grey",
  },
  body:{
    padding:"15px",
  },
  content:{
    backgroundColor:"grey",
    height: 27,
  }
});

function MediaCard(props) {
  return (
    <Grid item xs={2}>
    <Box border={1}>
    <Card className={props.classes.card}>
      <CardActionArea>
        <CardMedia
          className={props.classes.media}
          image={props.src}
          title="Name"
        />
        <CardContent className={props.classes.content}>
          <Typography>
            {props.name}  ₹{props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    </Grid>
  );
}

class HomeBody extends React.Component {
  
  render(){
  const classes = this.props;
  return (
    <div className={classes.root}>
      <div className={classes.banner}>
      <Typography component="h1" variant="h3" style={{ fontWeight: 600 }}>
            WELCOME HOME
      </Typography>
      </div>
      <div/>
      <div id="instrumentHomeBody" className={classes.body} >
        <Grid container spacing={3} direction="row">
        {/* TODO backend card gen here */}
        {Array(20).fill(1).map((el, i) =>
          <MediaCard classes={classes} price="100" name="ProductName" src="https://m.media-amazon.com/images/I/41eBIiMMjbL._SY355_.jpg"/>
        )}
        </Grid>
      </div>
    </div>
  );
}
}

HomeBody.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(useStyles)(HomeBody);