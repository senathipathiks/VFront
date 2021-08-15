import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from '../styles';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import authService from '../services/auth-service';



class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      mobile:"",
      successful: false,
      message: ""
    };
  }
    onChangeUsername(e){
      this.setState({
        username: e.target.value
      });
    }
  
    onChangeEmail(e) {
      this.setState({
        email: e.target.value
      });
    }
  
    onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }
    onChangeNumber(e) {
      this.setState({
        mobile: e.target.value
      });
    }
  
    handleRegister(e) {
      e.preventDefault();
  
      this.setState({
        message: "",
        successful: false
      });

      authService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.mobile
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  render() {
  const classes = this.props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" color="primary">
          SIGN UP
        </Typography>
        {/* TODO connect backend*/}
        <form className={classes.form} noValidate  onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Email"
            name="email"
            value={this.state.email}
                    onChange={this.onChangeEmail}
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
            value={this.state.username}
            onChange={this.onChangeUsername}
            autoComplete="username"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={this.state.mobile}
                    onChange={this.onChangeNumber}
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
            value={this.state.password}
                    onChange={this.onChangePassword}
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
            <Grid item>
              Already a member? 
              <Link href="#" variant="body2">
                 {" Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SignUp);
