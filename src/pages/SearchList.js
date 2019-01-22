import React, { Component } from 'react';
import * as searchAction from '../actions/searchAction';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { connect } from 'react-redux';
import Otp from '../components/Otp';
//import Loading from '../Loader/index';
import AllUser from './allUser';
import Pagination from 'rc-pagination';
import * as paginationActions from '../actions/paginationAction';
import 'rc-pagination/assets/index.css';

class SearchList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roleVal: 'advertiser',
      checkBut: false,
      removeOtpBut: false,
      current: 1,
      btnId: '',
      otpCheck: false
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
  selectVal=(e)=>{
    this.setState({roleVal:e.target.value})
    }

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
        console.log('page',page);
        this.setState({
          current: page,
        },
       ()=> this.props.paginationData(this.state.current)
        );
        // console.log("paginationchak__>",this.state.current);
     
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
    const {data}=this.props
    const {roleVal}= this.state;
    const {loadingValue,categ,regionVal,cityVal,skillVal,dataOtpId}=this.props;
  
    return (  
      <div className="container">
     
      { (loadingValue == false)? <AllUser /> :
       <div>  {  data.data != '' ? 
        <div>
           {/* <h1>All search</h1> */}
            <div className="select-type-result" style={{borderColor:'grey',marginTop:20,backgroundColor:'#fff'}}>Sort By : <select style={{backgroundColor:'white'}} onChange={this.selectVal}>
                  <option>advertiser</option>
                  <option>consultant</option>
                </select>
              </div>
       <section className="consultantWrap">
                  <div className="container consultantsCrousal">
                       <div className="row">
                         {  data.data ? (data.data.filter((val,index)=>{
                 return val.roles=== roleVal}).map((datas,i) =>(
            <div key={i}>
                     <div className="conWrapInner text-center mr-made">
                     <div className="con-img">
                 <img src="img/consult-img.png" alt="profile-img" />
               </div>
              
               <div className="side_icon">
               {datas.roles=='consultant' ?
               <div>
                 <img src="img/C.png" style={{width:'22px'}} alt="icon" className="load" />
                 <img src="img/C.png" style={{width:'22px'}} alt="icon" className="hover"/>
                 </div>
                 :
                 <div>
                 <img src="img/A.png" style={{width:'22px'}} alt="icon" className="load" />
                 <img src="img/A.png" style={{width:'22px'}} alt="icon" className="hover"/>
                </div>
                }
               </div>
               <div className="person_info">
                 <h4>{datas.experience.company}</h4>
                 <a href="#" className="Cate-btn">{datas.category}</a>
                 <span className="Name">{datas.firstName} {datas.lastName}</span>
               
                 {
                   datas._id==dataOtpId? 
                   <ul className="info">
                   <li><p>Email Id <a>{datas.email}</a></p></li>
                   <li><p>Phone No.jk <a>{datas.contact}</a></p></li>
                   <li><p className="aboutTxt">{datas.about}</p></li>
                  
                 </ul>
                   :
                 <ul className="info">
                   <li><p>Email Id <a>{this.censorEmail(datas.email)}</a></p></li>
                   <li><p>Phone No. <a>{this.censorPhone(datas.contact)}</a></p></li>
                   <li><p className="aboutTxt">{datas.about}</p></li>
                   <li><button className="Cate-btn" onClick={(id)=>{this.setId(datas._id)}}>Click here to contact</button></li>
                 </ul>
                 }
               </div>
             </div>
           </div>)
                               )): null }
      <div className="mr-made">
      <img src="img/consult-img.png" className="remove-img" />
      
      </div>
    
          </div>
        </div>
       
      </section> 
      {(this.state.otpCheck)? 
      <Otp id={this.state.btnId} otpCheck={this.state.otpCheck} changeOtpCheck={this.changeOtp}/> : null}   
      
           </div> : <span style={{fontSize:'50px',color:'red'}}>There is no data to show!</span>  } 
              
        <Pagination total={100} onChange={this.onChange}  itemRender={this.textItemRender} />
                </div>  }
              
                 </div>
            );
          }
        }
        
     

export default connect(
  state => ({
    data:state.SearchReducer.searchedData,
    categ:state.SearchReducer.categ,
    regionVal:state.SearchReducer.regionVal,
    cityVal:state.SearchReducer.cityVal,
    skillVal:state.SearchReducer.skillVal,
    dataOtpId:state.otpReducer.demo,
    loadingValue :state.SearchReducer.loadingValue,
  }),
 {...paginationActions},
) (SearchList);



















