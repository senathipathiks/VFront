import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/';

class UserService {

  getUserHomes() {
    return axios.get(API_URL + 'home',{ headers: authHeader() });
  }


  
    addToCart(quantity,id){
      return axios
        .post(API_URL + "home/"+ id, {
          id,
          quantity
        },{ headers: authHeader() })
        .then(response => {
          return response.data;
        });
    }
  
 

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();