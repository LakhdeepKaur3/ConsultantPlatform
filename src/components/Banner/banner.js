import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
  class Banner extends Component {
    render() {
        return (
          <div>
            <Carousel >
                <div>

                    <img src="/img/banner.png"  alt="no"/>
                    <div className="caroTxt">
                        <h1>Lorem Ipsum</h1>
                        <p>Options that offer versatility for your home and office with Quality.</p>
                       {
                        localStorage.getItem('jwtToken')?
                        null:
                        <Link to='/signup' className="SignBtn">
                          Sign Up
                        </Link>
                      }
                      </div>
                </div>
                <div>
                    <img src="/img/banner.png" alt="no"/>
                    <div className="caroTxt">
                        <h1>Lorem Ipsum</h1>
                        <p>Options that offer versatility for your home and office with Quality.</p>
                       {
                        localStorage.getItem('jwtToken')?
                        null:
                        <Link to='/signup' className="SignBtn">
                          Sign Up
                        </Link>
                      }
                      </div>
                </div>
                <div>
                    <img src="/img/banner.png" alt="no "/>
                    <div className="caroTxt">
                        <h1>Lorem Ipsum</h1>
                        <p>Options that offer versatility for your home and office with Quality.</p>
                       {
                        localStorage.getItem('jwtToken')?
                        null:
                        <Link to='/signup' className="SignBtn">
                          Sign Up
                        </Link>
                      }
                      </div>
                </div>
            </Carousel>
            
</div>
            
        );
    }
};


export default Banner