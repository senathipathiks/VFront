import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class UserNav extends React.Component {
  
  render(){
  const classes = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static" id="userNavbar">
        <Toolbar>
          <Typography align="left" variant="h6" className={classes.title}>
            {this.props.name+'       '}
          <Button color="inherit" id="instrumentHomeButton">Home</Button>
          <Link to="/cart">
          <Button color="inherit" id="instrumentCartButton">Cart</Button>
          </Link>
          <Button color="inherit" id="instrumentOrderButton">My Order</Button>
          </Typography>
          <Button color="inherit" id="logoutButton">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

UserNav.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(useStyles)(UserNav);