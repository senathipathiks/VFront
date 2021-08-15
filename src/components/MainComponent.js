import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import authService from './services/auth-service';
import { Switch, Route, Link } from "react-router-dom";


import HomeBody from "./User/home";
import CartBody from "./User/cart";
import Orders from "./Admin/orders"
import EventBus from "../common/EventBus";
import signup from './SignUp/signup';
import login from './Login/login';
import cart from './User/cart';

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

class MainComponent extends React.Component {
  constructor(props){
      super(props);
      
      this.state ={
          showAdmin: false,
          currentUser: undefined,
      };
  }
  componentDidMount() {
    const user = authService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        // showAdmin: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    authService.logout();
    this.setState({
      showAdmin: false,
      currentUser: undefined,
    });
  }

  render(){

  const classes = this.props;
  const {currentUser, showAdmin} = this.state;
  return (
    // <div className={classes.root}>
    //     {/* <Router> */}
    //   <AppBar position="static" id="userNavbar">
    //     <Toolbar>
    //       <Typography align="left" variant="h6" className={classes.title}>
    //         {this.props.name+'       '}
    //         <Link to={"/home"}>
    //       <Button color="inherit" id="instrumentHomeButton" >Home</Button>
    //       </Link>

    //         {currentUser && (
    //         <Link to={"/cart"}>
    //         <Button color="inherit" id="instrumentCartButton">Cart</Button>
    //         </Link>)}
    //       {currentUser && (
    //           <Link to={"/order"}>
    //               <Button color="inherit" id="instrumentOrderButton">My Order</Button>
    //           </Link>
    //       )}
          
    //       </Typography>
    //       {currentUser ? (
    //           <Button color="inherit" id="logoutButton">Logout</Button>
    //       ):(
    //         <div>Hi</div>
    //       )}
          
    //     </Toolbar>
    //   </AppBar>
    <div>
      <Switch>
            <Route exact path={["/home"]} component={HomeBody} />
            <Route exact path="/signin" component={login} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/cart" component={cart}/>
            {/* <Route exact path="/profile" component={Profile} /> */}
            {/* <Route path="/user" component={Orders} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} /> */}
          </Switch>
          {/* </Router> */}
    </div>
  );
}
}

MainComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(useStyles)(MainComponent);