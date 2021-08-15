import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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


// TODO apply data here
const rows = [
  {"orderID":"r82hoefiw","userID":"sam","ProductName":"guitar","price":"2000","quantity":"1"},
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

class Orders extends React.Component {
  
  render(){
    const { classes } = this.props;
    return (
    <div style={{padding:"80px"}}>
    <TableContainer component={Paper} style={{borderRadius: 10}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order ID</StyledTableCell>
            <StyledTableCell align="right">User ID</StyledTableCell>
            <StyledTableCell align="right">Instrument Name&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Price&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Quantity&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.orderID}</StyledTableCell>
              <StyledTableCell align="right">{row.userID}</StyledTableCell>
              <StyledTableCell align="right">{row.ProductName}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
}

Orders.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(useStyles)(Orders);