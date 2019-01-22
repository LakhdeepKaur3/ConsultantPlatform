import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 import axios from "axios"
//import '../index.css'

//import banner from '../img/banner.png'



class UserData extends Component {
  constructor(){
    super()
    this.state={

      image:'',
      imageview:''
    }
  }

  componentDidMount(){
    console.log('this.props.dashboard.dashboard', this.props.dashboard.dashboard)
   
   
   
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextPropssss', nextProps.dashboard.dashboard.dashboard.pictures[0].key)
    // this.setState({imageview:nextProps.dashboard.dashboard.dashboard.pictures[0].key})
    axios.get(`http://backendul.n1.iworklab.com:3202/api/auth/file?key=${nextProps.dashboard.dashboard.dashboard.pictures[0].key}`)
  
    .then(res=>{
      console.log("api response",res)
      var bytes = new Uint8Array(res.data.d.Body.data);
      console.log(bytes)
      var base64 = btoa(
        new Uint8Array(res.data.d.Body.data)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
          
      );
    this.setState({image:base64})
      
   })
   .catch(err=>{
     console.log(err)
     alert("this user have no profile ")
   })
  }

  render() {
    const {dashboard}=this.props.dashboard.dashboard
    console.log("dashboiajdfh",this.state.imageview)
    
    return (  
            
            <div className="col-sm-4">
        <div className="conWrapInner text-center">
              <div className="con-img">
              <img src={`data:image/jpeg;base64,${this.state.image}`} style={{height:"100px"}}/>
              </div>
              {/* <div className="side_icon">
                <img src="images/cw-badge.png" alt="icon" className="load"/>
                <img src="images/cg-badge.png" alt="icon" className="hover"/>
              </div> */}
              <div className="person_info">
               
                <a href="#" className="Cate-btn">{dashboard && dashboard.category}</a>
                <ul className="info dashinfo">
                  <li><p className="aboutTxt">{dashboard &&dashboard.about}</p></li>
                  <li><a href="#" className="ExDate">Advertised expires on 19-Dec-2018</a></li>
                  <li><a href="#" className="Renew-btn">Renew</a></li>
                  <li className="Tr-His"><Link to="/transaction">Transaction History</Link></li>
                </ul>
              </div>
            </div>
      </div>
              
            );
          }
        }
export default UserData;