import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Otp from '../components/Otp';
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';
import Loading from '../Loader/index';
import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

class AllUser extends Component {
  constructor(props){
    super(props)
    this.state={
      status:'',
      users:[],
      loading:false,
      current: 1,
      btnId:'',
      otpCheck:false
  }
}

componentDidMount(){
  const {current}=this.state
  console.log('did mount page',current)
    fetch('http://backendul.n1.iworklab.com:3202/api/user/search/?category=""&skills=""&region=""&city=""&pageNumber='+current+'&pageSize=10')
    .then(response => response.json())
    .then(data => {
      console.log('hello data users',data);
      this.setState({users:data,loading:true});
  });
} 


componentDidUpdate(prevProps, prevState) {
  console.log('componentDidUpdate')
  const {current}=this.state
  if(prevState.current !== current) {
    fetch('http://backendul.n1.iworklab.com:3202/api/user/search/?category=""&skills=""&region=""&city=""&pageNumber='+current+'&pageSize=10')
    .then(response => response.json())
    .then(data => {
      console.log('hello data did update',data);
      this.setState({users:data,loading:true});
  });
  }
}

itemRender = (current, type, element) => {
  if (type === 'page') {
    return <a href={`#${current}`}>{current}</a>;
  }
  return element;
};

 textItemRender = (current, type, element) => {
  if (type === 'prev') {
    return 'Prev';
  }
  if (type === 'next') {
    return 'Next';
  }
  return element;
};
censorWordForTwo = (str,str1) => {
  return str[0] + "*".repeat(str.length -1)+ "@" + this.censorWord(str1)
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
   
    onChange = (page) => {
      console.log(page);
      this.setState({
        current: page,
      });
      console.log('on change loaded')
 
    }

    setId=(id)=>{
      console.log('target id',id)
      this.setState({btnId:id,otpCheck:true})
    }

    changeOtp=()=>{
      this.setState({otpCheck:false})
    }
  render() {
      const { users }= this.state
      const {dataOtpId}=this.props
       console.log("pagination-->",this.state.current);
    return (  
        <section className="consultantWrap">
        {
          
            (this.state.loading == false)? <Loading/> :
       <div>
           {/* <h2>ALL <span>USERS</span></h2> */}
          <div className="row">
          
       
      {
          users.data.length!==0?(
          users.data.map((datas,index) =>(
           <div className="" key={index}>
             <div className="conWrapInner text-center mr-made">
               <div className="con-img">
                 <img src="img/consult-img.png" alt="profile-img" />
               </div>
               { (datas.roles=='consultant') ?
               <div className="side_icon">
                 <img src="img/C.png" style={{width:'22px'}} alt="icon" className="load" />
                 <img src="img/C.png" style={{width:'22px'}} alt="icon" className="hover"/>
                 </div>
                 :
                 <div className="side_icon">
                 <img src="img/A.png" style={{width:'22px'}} alt="icon" className="load" />
                 <img src="img/A.png" style={{width:'22px'}} alt="icon" className="hover"/>
                 </div>
                 }
               <div className="person_info">
                 <h4>{datas.experience.company}</h4>
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
                 < ul className = "info" >
                   <li><p>Email Id <a>{this.censorEmail(datas.email)}</a></p></li>
                   <li><p>Phone No. <a>{this.censorPhone(datas.contact)}</a></p></li>

                   <li><p className="aboutTxt">{datas.about}</p></li>
                   <li><button className="Cate-btn" onClick={()=>{this.setId(datas._id)}}>Click here to contact</button></li>
                 </ul>
                 }
               </div>
             </div>
           </div>)
      )):<h3>No Advertiser to show</h3>  }
        
      <div className="mr-made">
      <img src="img/consult-img.png" className="remove-img" />
     
      </div>
    
      
          </div>
          {(this.state.otpCheck)? 
      <Otp id={this.state.btnId} otpCheck={this.state.otpCheck} changeOtpCheck={this.changeOtp}/> : null}   
         </div>
      
        }
        <Pagination total={100} onChange={this.onChange}  itemRender={this.textItemRender} />
      </section>
            );
          }
        }
        
     

        export default connect(
            state => ({
              dataOtpId:state.otpReducer.demo
            }),
            null,
          ) (AllUser);

          