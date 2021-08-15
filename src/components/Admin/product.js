import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import TextField from 'material-ui/TextField';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from '../styles';
import PropTypes from 'prop-types';

// TODO apply data here
const rows = [
  {"orderID":"r82hoefiw","userID":"sam","ProductName":"guitar","price":"2000","quantity":"1"},
];


class Product extends React.Component {
  
  render() {
    const classes = this.props;
    return (
    
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <img style={{padding:"80px"}} src="https://www.wikihow.com/images/thumb/1/18/Take-Better-Notes-Step-1-Version-2.jpg/v4-460px-Take-Better-Notes-Step-1-Version-2.jpg.webp"></img>
      </Grid>
      <Grid item xs={6}>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" style={{backgroundColor:"orange",color:"white",borderRadius:10,width:"420px"}}>
      ADD A PRODUCT
        </Typography>
        {/* TODO connect backend*/}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Enter Username"
            name="username"
            autoComplete="username"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="mobilenumber"
            label="Enter Mobile Number"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Enter Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            id="confirmpassword"
            autoComplete="current-password"
          />
          <Button
            id="submitButton"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container alignItems="center">
          </Grid>
        </form>
      </div>
    </Container>
    </Grid>
    
    </Grid>
  );
}
}

export default withStyles(useStyles)(Product);
