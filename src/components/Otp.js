import React, { Component } from 'react';
import axios from 'axios';
import * as getOtp from '../actions/otpAction'
import { connect } from 'react-redux';

 
class Otp extends Component {
  constructor(props){
    super(props)
  this.state = {
    firstname:'',
    contact:'',
    email:'',
    countryCode:'',
    otp:'',
    otpMsg:'',
    otpNum:'',
    otpVerify:'',
    otpData:[],
    boot: true,
    boot2: false
  };
}

submit=(e)=> {
  e.preventDefault()
   const userdata={
   name:this.state.firstname,
   contact:this.state.contact,
   countryCode:this.state.countryCode,
   consultant:[this.props.id]
   }
   axios.post(`http://backendul.n1.iworklab.com:3202/api/otp/send/`,userdata)
     .then(res => {
      console.log('this is res1',res)
      this.setState({openotp:true,otpData:res,boot2:true})
     })
 }

submitOtp=(e,callback)=>{
  const {otpNum}=this.state;
  //this.setState({ open: false });
  e.preventDefault()
  fetch(`http://backendul.n1.iworklab.com:3202/api/otp/verify`,{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({"otp":String(otpNum)})
  })
  .then(res=>res.json())
  .then(responseData => {
   if(responseData.message!=='Thank you for verification')
        {
          this.setState({otpMsg:'Please Insert Correct OTP!!'})
        }
        else
        {
          this.setState({otpVerify:'success',boot:false},this.props.otpAction(this.props.id))
        }
  })
  .catch(err=>console.log("err:  ", err))

}

  onChange=(e)=> {
    this.setState({ [e.target.name]: e.target.value });
  }
 otpGet=(e)=>{
   this.setState({otpNum : e.target.value})
 }


  boot=()=>{
    this.setState({boot:true})
  }
 
  closeModal=()=>{
    this.setState({boot:false, firstname:'',
    contact:'',
    email:'',
    countryCode:''},this.props.changeOtpCheck)}
  
  
    closeModal2=()=>{
    this.setState({boot2:false,otpNum:'',otpMsg:''})
  }

 

  render() {
    const { open,} = this.state;
    console.log(this.props.otpCheck)
    console.log(this.props.id)
    return (
      <div>
       {/* <button onClick={this.boot} className="Cate-btn">click here to contact</button> */}
{(this.state.boot)?
<div>
  <div className='modal fade in show' 
role="dialog"
aria-labelledby="add/edit products"
aria-hidden="true"
style={{'background': '#000000b3'}}
>

<div className="modal-dialog modal-md call-modal" role="document">
<div className="modal-content">
<div className="modal-header" style={{display: 'block'}}>
<button
type="button"
className="close pull-right closeIcon"
data-dismiss="modal"
aria-label="Close"
onClick={(e) => { this.setState({boot: false}) }}
>
<span aria-hidden="true" onClick={this.closeModal}>&times;</span>
</button>
</div>
<div className="modal-body">

<form onSubmit={this.submit} className="modalForm modalformAddNew">
                <label>Name</label>
                <input type="text" required
                      placeholder="Name"
                      name="firstname"
                      value={this.state.firstname}
                      onChange={this.onChange}/>
              <label>phone</label>
              <ul className="contactListing">
                <li>
                <input type="text" required
                    placeholder="+1"
                    name="countryCode"
                    value={this.state.countryCode}
                    onChange={this.onChange}/>
                </li>
                <li>
                <input type="number" required
                    placeholder="phone"
                    name="contact"
                    
                    value={this.state.contact}
                    onChange={this.onChange}/>
                </li>
              </ul>
              
              
               
              
              <button id={this.props.id}  type="submit">Submit</button>
              
          </form>
</div>
       {(this.state.boot2)?
        <div>
        <div className='modal fade in show' 
      role="dialog"
      aria-labelledby="add/edit products"
      aria-hidden="true"
      style={{'background': '#000000b3'}}
      >
      
      <div className="modal-dialog modal-md" role="document">
      <div className="modal-content">
      <div className="modal-header" style={{display: 'block'}}>
<div>
<button
type="button"
className="close pull-right closeIcon"
data-dismiss="modal"
aria-label="Close"
onClick={(e) => { this.setState({boot2: false}) }}
>
<span aria-hidden="true" onClick={this.closeModal2}>&times;</span>
</button>
<form onSubmit={this.submitOtp}>
          <div className="modalForm">
          <input type="text" required
                    placeholder="otp"
                    name="otp"
                    value={this.state.otpNum}
                    onChange={this.otpGet}/>
                    <div>{this.state.otpData.data.data.message}</div>
                    <div>{this.state.otpMsg}</div>
          </div>
              <button id={this.props.id}  type="submit">Submit</button>
          </form> </div></div></div></div></div></div>: null}
</div>
</div>


</div>
</div> : null}
</div>


    
    );
  }
}
 
export default connect (
  state => ({
}),
{ ...getOtp },
)(Otp);










































