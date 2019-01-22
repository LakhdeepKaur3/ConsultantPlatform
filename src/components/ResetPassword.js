import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { serverUrl, localUrl } from '../utils/api.js'
import axios from 'axios';
import swal from 'sweetalert';
class ResetPassword extends Component {
  constructor(props){
    super(props)
    this.state={
      oldPassword:'',
      password:''
    }
  }

    submit=()=>{
      const values = {
        oldPassword: this.state.oldPassword,
        password:this.state.password,
      }
      console.log(values)
  let token= localStorage.getItem('jwtToken');
   let id=localStorage.getItem('id')
      if(values.password>=5){

      axios
      .put(`${serverUrl}/user/updatePassword/${id}` ,values,{
      
        headers: {
          "Authorization": "Bearer " + token,
        }
    })
      .then(res=>{
        console.log(res)
        swal("Updated!" , "success");
      })
      .catch(err=>{
        swal("oops!","Incorrect data" , "warning");
      }
      )
    }
    else{
      swal("oops!","error in password " , "warning");
    }
  }
    handleChange = input => e => {
      this.setState({
        [input]: e.target.value
      });
  
    };
  render() {    
  
    return (  
            <div>
           
                        
                       
                        <div className="col-md-6 col-sm-6 col-xs-12">
                        <label>old Password<i className="fa fa-star" aria-hidden="true"></i></label>
                              <TextField type="password" style={{backgroundColor:'#f1eeee'}} className="textfields"              
                              onChange={this.handleChange('oldPassword')}
                             // errorText={errorName.passwordError}
                              defaultValue={this.state.oldPassword}
                             
                          />
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                        <label>New Password<i className="fa fa-star" aria-hidden="true"></i></label>
                            <TextField type="password" style={{backgroundColor:'#f1eeee'}} className="textfields"              
                              onChange={this.handleChange('password')}
                             // errorText={errorName.confirmpasswordError}
                              defaultValue={this.state.password}
                             
                          />
                        </div>
                       
                     
                        <div className="ActiveBtn">
                        {/* <button type="button">CANCEL</button> */}
                        <RaisedButton 
                              label="Update"
                              primary={false}
                              onClick={this.submit}
                            />
                      </div>
                   </div>
              
            );
          }
        }
export default ResetPassword;
 
                        