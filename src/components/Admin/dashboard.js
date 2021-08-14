import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { Grid } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton , Button} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PropTypes from 'prop-types';

const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, price, quantity) {
  return { name, price, quantity};
}

// TODO apply data here
const rows = [
  createData('Frozen yoghurt', 159, 6.0,),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0,),
  createData('Cupcake', 305, 3.7,),
  createData('Gingerbread', 356, 16.0),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

class Dashboard extends React.Component {
  
  render(){
    const classes = this.props;

  return (
    <div style={{padding:"80px"}}>
    <Grid container direction={'row'} spacing={4}>
    <Grid item xs={8}>
    <TableContainer component={Paper} style={{borderRadius: 10}} id="adminDashboard">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Instrument Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell><img style={{height:"80px",width:"80px"}} src="https://image.shutterstock.com/image-vector/beautiful-sitar-classical-music-instrument-260nw-1302006586.jpgp"></img></StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">
                 <IconButton style={{backgroundColor:"yellow",color:"gery"}} aria-label="Edit"><EditIcon/></IconButton>&nbsp;&nbsp;
                 <IconButton style={{backgroundColor:"red",color:"white"}} aria-label="Delete"><DeleteIcon /></IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Grid item>
      <Grid container spacing={4} direction={'column'}>
        <Grid item>
        <img src="https://previews.123rf.com/images/yupiramos/yupiramos1803/yupiramos180310134/96901815-young-man-with-shopping-cart-vector-illustration-design.jpg" style={{height:"200px",width:"200px"}} />
        </Grid>
        <Grid item>
        <Button id="addInstrumentButton" style={{borderRadius: 10,backgroundColor:"orange",color:"white"}}> <ShoppingCartIcon/> Add Instrument</Button>
        </Grid>
      </Grid>
    </Grid>
    </Grid>
    </div>
  );
}
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(useStyles)(Dashboard);