import React, { Component } from 'react';
import '../index.css'

import banner from '../img/banner.png'

class Banner extends Component {
  render() {
    return (  
            <section className="BannerSection">
                <div id="one" className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="itemWrap">
                        <img src={banner} alt="banner"/>
                      </div>
                      <div className="caroTxt">
                        <h1>Lorem Ipsum</h1>
                        <p>Options that offer versatility for your home and office with Quality.</p>
                        <a href="#" className="SignBtn">
                          Sign Up
                        </a>
                      </div>
                    </div>
                    <div className="item">
                      <div className="itemWrap">
                        <img src={banner} alt="banner"/>
                      </div>
                      <div className="caroTxt">
                        <h1>Lorem Ipsum</h1>
                        <p>Options that offer versatility for your home and office with Quality.</p>
                        <a href="#" className="SignBtn">
                          Sign Up
                        </a>
                      </div>
                    </div>
                    <div className="item">
                      <div className="itemWrap">
                        <img src={banner} alt="banner"/>
                      </div>
                      <div className="caroTxt">
                        <h1>Lorem Ipsum</h1>
                        <p>Options that offer versatility for your home and office with Quality.</p>
                        <a href="#" className="SignBtn">
                          Sign Up
                        </a>
                      </div>
                    </div>              
               </div>
            
          </section>
              
            );
          }
        }
        
     

export default Banner;