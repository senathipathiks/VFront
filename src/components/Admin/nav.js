import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ExitToApp , ShoppingCart,LocalShipping} from '@material-ui/icons';

const styles = (theme) => ({
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

class AdminNav extends React.Component {
  
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <AppBar position="static" id="adminNavbar">
        <Toolbar>
          <Typography align="left" variant="h6" className={classes.title}>
            {this.props.name+'       '}
          <Button color="inherit" id="adminproductButton" startIcon={<ShoppingCart/>}>Products</Button>
          <Button color="inherit" id="adminOrderButton"  startIcon={<LocalShipping/>}>Orders</Button>
          </Typography>
          <Button color="inherit" id="logoutButton" startIcon={<ExitToApp/>}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
      );
  }
}

AdminNav.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AdminNav);