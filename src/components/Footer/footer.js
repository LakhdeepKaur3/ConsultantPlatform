import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import banner from '../img/banner.png'

class Footer extends Component {
  render() {
    return (  
        <div>
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h5 className="f-head">About <span>Us</span></h5>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h5 className="f-head">Quick<span> links</span></h5>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/howitworks'>How it works</Link></li>
                {
                  localStorage.getItem('jwtToken')?
                  null:
                  <div>
                <li><Link to='/signup'>Sign up as consultant</Link></li>
                <li><Link to='/signup'>Sign up as advertisor</Link></li>
             </div> }
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h5 className="f-head">Help  <span>& Support</span></h5>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h5 className="f-head">Connect <span>With us</span></h5>
              {/* <ul className="socialLinks"> */}
                {/* <li><Link to='/'><span className="fa fa-gmail"></span></Link></li> */}
               <li style={{listStyleType:'none'}}><a href="mailto:zatin.khan@mail.vinove.com?Subject=Hello%20again" target="_top">Click here for mail <span className="fa fa-envelope"></span></a></li> 

              {/* </ul> */}
            </div>
          </div>
        </div>
      </footer>
      <div className="CopyRight">
      <p>© Copyright 2018. All Rights Reserved.</p>
      </div>
             </div> 
            );
          }
        }
        
     

export default Footer;