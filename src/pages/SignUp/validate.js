
import React, { Component } from 'react';
import '../index.css'
import logo from'../img/logo.png'

class validate extends Component {
  render() {
  	validate = () => {
      
    let isError = false;
    const errors = {
      firstNameError: "",
      lastNameError: "",
       emailError: "",
      passwordError: "",
      confirmpasswordError:"",
      contactError:''
    };

    if (this.state.firstName.length <1) {
      isError = true;
      errors.firstNameError = "FirstName is required";
    }


    if (this.state.lastName.length <1) {
      isError = true;
      errors.lastNameError = "LastName is required";
    }
    if (this.state.password.length <5) {
      isError = true;
      errors.passwordError = "Password must of of atleast 5 number";
    }
    
    if(this.state.password!=this.state.confirmpassword){
      
      isError=true;
      errors.confirmpasswordError="password is not match"
    
    }
   if(this.state.contact.length<10){
      
      isError=true;
      errors.contactError="Phone number must be of 10 digits"
    
    }
    if (this.state.email.indexOf("@") === -1  || this.state.email.indexOf(".")=== -1 ){
      isError = true;
      errors.emailError = "Requires valid email with @ and .";
    }
    

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
    
  };
    return (
    <React.Fragment></React.Fragment>  

      
    );
  }
}

export default validate;