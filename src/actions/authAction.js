import {SET_CURRENT_USER} from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import { serverUrl, localUrl } from '../utils/api'
import swal from 'sweetalert';

export const registeruser=(value,history)=> dispatch=>{

    axios
     .post(`${serverUrl}/auth/register`,value)
     
     .then(res=>{
       console.log(res)
       if(res.data.errors){
        swal("Oops!","Mendatory Fields are missing", "warning");
       }
      else if(res.data.errmsg){
        swal("Oops!","User Already exist", "warning");
       }
       else{
       swal("Submitted!", "Thankyou", "success");
           
     }})
     .catch(err=>{
      console.log(err)
      // swal("Oops!","Mendatory Fields are missing", "warning");
       //console.log(err)
      })
    

    }
//Set logged in user
export const loginUser = userData => dispatch => {
  
  return axios.post(`${serverUrl}/auth/login`, userData)
  .then(res => {
   
    // Save to localStorage
    let responceData = res.data;
   
    const token = responceData.token.accessToken;
    // Set token to ls
     localStorage.setItem('jwtToken', token);
    localStorage.setItem('id',res.data.user._id );
    // Set { serverUrl, localUrl } to Auth header
    setAuthToken(token);
    
    // Decode token to get user data
   // const decoded = jwt_decode(token);
    // Set current user
   // console.log('decoded data',decoded)
   const decoded=res.data.user
    dispatch(setCurrentUser(decoded));


  })
.catch(err=>{
swal("oops!", "Invalid Email or Password!", "warning");
 console.log("error")
 console.log("err is",err)

})
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
    
  };
  
};
export const logoutUser = (history) => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('id')
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
   
};  
