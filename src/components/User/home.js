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
import UserNav from './UserNav';
import userService from '../services/user-service';
import authService from '../services/auth-service';


const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 240,
    borderColor: "black",
  },
  media: {
    height: 100,
    width: 100,
    margin: "auto",
  },
  banner: {
    position: "relative",
    padding: "100px",
    backgroundColor: "grey",
  },
  body: {
    padding: "15px",
  },
  content: {
    backgroundColor: "grey",
    height: 27,
  },
}));

function MediaCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={2}>
      <Box border={1}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.src}
              title="Name"
            />
            <CardContent className={classes.content}>
              <Typography>
                {props.name} ₹{props.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Grid>
  );
}

class HomeBody extends React.Component {
  constructor(props){
    super(props);

    this.getUserHome = this.getUserHome.bind(this);
    this.setActiveProduct = this.setActiveProduct.bind(this);
    this.state ={
      products: [],
      currentProduct: null
    };
  }
  componentDidMount(){
    this.getUserHome();
  }

  getUserHome(){
    userService.getUserHomes().then(response => {
      this.setState({
        products: response.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }


  setActiveProduct(product, index) {
    this.setState({
      currentProduct: product,
      currentIndex: index
    });
    
    this.handleCart()
  }
handleCart(e){
  userService.addToCart(1, this.state.currentIndex).then(
    ()=>{

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
  console.log(this.state.currentIndex);
 }
  
  
  render(){
  const classes = this.props;
  const { products} = this.state;
  return (
    <>
    <UserNav/>
    
    <div >
      <div style={{position:'relative',padding:"100px",backgroundColor:"grey"}}>
      <Typography component="h1" variant="h3" style={{ fontWeight: 600 }}>
            WELCOME HOME
      </Typography>
      </div>
      <div/>
     
      <div id="instrumentHomeBody" style={{padding:"15px"}} >
      <Grid container spacing={3} direction="row">
      {products.map((product)=> (
       
       <Grid item xs={2}>
       <Box border={1}>
         <Card className={classes.card} onClick={()=>{
           this.setActiveProduct(product,product.productId) 
        
         }}>
           <CardActionArea>
             <CardMedia
               className={classes.media}
               image={product.imageUrl}
               title="Name"
             />
             <CardContent className={classes.content}>
               <Typography>
                 {product.productName} ₹{product.price}
               </Typography>
             </CardContent>
           </CardActionArea>
         </Card>
       </Box>
     </Grid>
       
      ))}
       </Grid>
      </div>
      
    </div>
 
    </>
  );
}
}

HomeBody.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(useStyles)(HomeBody);