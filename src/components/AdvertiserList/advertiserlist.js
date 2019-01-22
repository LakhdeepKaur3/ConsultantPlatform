import React, { Component } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { serverUrl, localUrl } from '../../utils/api.js'
import Otp from '../Otp'
import { connect } from 'react-redux';
import Loading from '../../Loader';
import Pictureshow from '../pictureShow'

class AdvertiserList extends Component {
  constructor(props){
    super(props)
    this.state={
      userlist:[],
      show:false,
      authenticate:false,
      id:'',
      loading:false,
      btnId:'',
      otpCheck:false,
      imageshow:''
  }
}


showModal=(id)=>{
  this.setState({show:true})
}
  page=(data)=>{
 
  }
  componentDidMount() {
    axios.get(`${serverUrl}/user/`)
      .then(res => {
        console.log("advertiser data",res.data.transformedUsers)
        this.setState({userlist:res.data.transformedUsers,loading:true})
       
      })

  }
 

  censorWordForTwo = (str,str1) => {
    return str[0] + "*".repeat(str.length -1)+ "@" + this.censorWord(str1)
  }

 censorWord =(str)=>{
return str[0] + "*".repeat(str.length - 1) + str.slice(-1);
}

 censorEmail =  (email)=>{
var arr = email.split("@");
return this.censorWord(arr[0]) + "@" + this.censorWord(arr[1]);
}

  
  censorWordForOne = (str, str1) => {
    return "*".repeat(str.length) + "@" + this.censorWord(str1)
  }
  
  censorWord =(str)=>{
        return str[0] + "*".repeat(str.length - 2 ) + str.slice(-1);
        }
        
         censorEmail =  (email)=>{
        var arr = email.split("@");
        if(arr[0].length == 2){
          return this.censorWordForTwo(arr[0],arr[1]);
        }
        if(arr[0].length ==1 ){
            return this.censorWordForOne(arr[0],arr[1]);      }
        return this.censorWord(arr[0]) + "@" + this.censorWord(arr[1]);
        }
censorPhone=(num)=>{
  var splitNum=num.split('')
  return splitNum[0]+splitNum[1]+"*".repeat(6)+splitNum[8]+splitNum[9];
}
setId=(id)=>{
  console.log('target id',id)
  this.setState({btnId:id,otpCheck:true})
}
encodeimage=(picture)=>{
  // console.log("picture key",picture.key)
  // var bytes = new Uint8Array(picture.key);
  //     console.log(bytes)
  //     var base64 = btoa(
  //       new Uint8Array(picture.key)
  //         .reduce((data, byte) => data + String.fromCharCode(byte), '')
          
  //     );
  //   this.setState({imageshow:base64})
}

changeOtp=()=>{
  this.setState({otpCheck:false})
}

  render() {
   const {dataOtpId} = this.props;
    const { userlist,loading } = this.state;
    let users = [];
    if(userlist && userlist.length !== 0) {
      users  = userlist.filter(user => user.roles === 'advertiser');
    }
    return (  
      <div>
      <section className="consultantWrap">
       <div className="container consultantsCrousal">
          <h2>Featured <span>Advertiser</span></h2>
        {
          (loading==false)? <Loading/> :
          <div className="row">
         <Carousel centerMode centerSlidePercentage={33.33} >
     {

       users.length!==0?(
       users.map((datas,index) =>(
           <div className="" key={index}>
             <div className="conWrapInner1 text-center mr-made">
               <div className="con-img">
               {
                 datas.pictures.length>0?
                  datas.pictures.map((picture,index)=><div key={index}><Pictureshow picturekey={picture.key}/></div>)
                :
                  <img src="img/consult-img.png" alt="profile-img" onClick={this.page.bind(this,datas.id)}/>
                
                }
               </div>
               <div className="side_icon">
                 <img src="img/A.png" style={{width:'20px'}} alt="icon" className="load" />
                 <img src="img/A.png" style={{width:'20px'}} alt="icon" className="hover"/>
               </div>
               <div className="person_info">
               {datas.experience?
                 datas.experience.map((dat,index) =>(
                   <div key={index}>
               <h4>{dat.company}</h4>
                 
                 </div>
                 ))
                   :<p>no</p>}
                
                
                 <a href="#" className="Cate-btn">{datas.category}</a>
                 <span className="Name">{datas.firstName} {datas.lastName}</span>
                 {
                   datas._id===dataOtpId? 
                   <ul className="info">
                   <li><p>Email Idhj <a>{datas.email}</a></p></li>
                   <li><p>Phone No.jk <a>{datas.contact}</a></p></li>
                   <li><p className="aboutTxt">{datas.about}</p></li>
                 </ul>
                   :
                 <ul className="info">
                   <li><p>Email Id <a>{this.censorEmail(datas.email)}</a></p></li>
                   <li><p>Phone No. <a href="tel:+91 9586896524">{this.censorPhone(datas.contact)}</a></p></li>

                   <li><p className="aboutTxt">{datas.about}</p></li>
                   <li><button className="Cate-btn" onClick={(id)=>{this.setId(datas._id)}}>Click here to contact</button></li>
                 </ul>
                 }
               </div>
             </div>
           </div>)
      )):<h3>No Data to show</h3>  }
       
     <div className="mr-made">
     <img src="img/consult-img.png" className="remove-img" />
     
     </div>
     </Carousel>
     
         </div>
        }
       </div>
      
     </section>
     {(this.state.otpCheck)? 
      <Otp id={this.state.btnId} otpCheck={this.state.otpCheck} changeOtpCheck={this.changeOtp}/> : null}
      </div>        
            );
          }
        }
        export default connect(
          state => ({
            dataOtpId:state.otpReducer.demo
          }),
          null,
        ) (AdvertiserList);