import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Form from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from '../styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import authService from '../services/auth-service';


class Login extends React.Component {
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username : "",
      password : "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e){
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e){
    this.setState({
      password: e.target.value
    });
  }
   handleLogin(e){
     e.preventDefault();
     this.setState({
       message: "",
       loading: true
     });
    //  console.log(this.setState(this.state.username));
    //  console.log(this.state.password);

     authService.login(this.state.username, this.state.password).then(
       ()=>{
        this.props.history.push("/home");
        window.location.reload();
         console.log("loggedin");
       },
       error =>{
         const resMessage = (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        
        this.setState({
          loading: false,
          message: resMessage
        });
       }
     );
   }

  render(){
    const { classes } = this.props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" color="primary">
          LOGIN
        </Typography>
        {/* TODO connect backend*/}
        <form className={classes.form} noValidate  >
          {/* <input value={this.state.username}
            onChange={this.onChangeUsername}> */}
          
          {/* </input> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={this.state.username}
            onChange={this.onChangeUsername}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={this.state.password}
            onChange={this.onChangePassword}
            name="password"
            label="Password"
            type="password"
            id="password"
            
          />
          <Button
            id="submitButton"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleLogin}
            className={classes.submit}>
            
            Login
          </Button>
     
          <Grid container alignItems="center">
            <Grid item>
            Don't have an account? 
              <Link href="#" variant="body2">
                 {" Click here"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(useStyles)(Login);