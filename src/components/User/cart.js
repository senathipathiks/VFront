import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton , Button} from '@material-ui/core';
import PropTypes from 'prop-types';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "orange",
    color: theme.palette.common.white,
  },
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

class CartBody extends React.Component {
  
  constructor(props){
    super(props);

    this.getUserCart = this.getUserCart.bind(this);
    this.state ={
      cart: [],
    };
  }

  componentDidMount(){
    this.getUserCart();
  }

  // getUserCart(){
  //   userService.getUserHomes().then(response => {
  //     this.setState({
  //       products: response.data
  //     });
  //     console.log(response.data);
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });
  // }
  render(){
    const classes = this.props;

  return (
    <div style={{padding:"80px"}}>
    <TableContainer component={Paper} style={{borderRadius: 10}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity&nbsp;</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right"><IconButton style={{backgroundColor:"red",color:"white"}} aria-label="Delete"><DeleteIcon /></IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    <Button style={{borderRadius: 10,position:"absolute",left:80,padding:"20px",backgroundColor:"orange",color:"white"}}>Place your Order</Button>
    </div>
  );
}
}

CartBody.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(useStyles)(CartBody);