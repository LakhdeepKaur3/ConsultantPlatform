import axios from 'axios';
//import { serverUrl, localUrl } from '../utils/api.js'
import { serverUrl } from '../utils/api.js'
import {
  GET_DASHBOARD,CLEAR_CURRENT_DASHBOARD

} from './types';
//import UserData from '../components/UserData';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  let token= localStorage.getItem('jwtToken');
   let id=localStorage.getItem('id')
  
  axios
    .get(`${serverUrl}/user/?_id=${id}`, {
      
        headers: {
          "Authorization": "Bearer " + token,
        }
    })
    .then(res =>{
        
        console.log("bhai h ji",res)
      dispatch({
          
        type: GET_DASHBOARD,
        payload: res.data.transformedUsers[0]
      })
      
    })
    .catch(err =>
      console.log(err)
    );

};

export const setCurrentProfile = (userData) => dispatch => {
  let token= localStorage.getItem('jwtToken');
   let id=localStorage.getItem('id')
  
  axios
    .put(`${serverUrl}/user/${id}` ,userData, {
      
        headers: {
          "Authorization": "Bearer " + token,
        }
    })
    .then(res =>{
       
        console.log("bhai h",res.data.user)
      dispatch({
          
        type: GET_DASHBOARD,
        payload: res.data.user
      })
      
    })
    .catch(err =>
      console.log(err)
    );

};


export const clearCurrentDashboard = () => {
  return {
    type: CLEAR_CURRENT_DASHBOARD
  };
};