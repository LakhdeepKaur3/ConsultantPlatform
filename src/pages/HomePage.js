import React, { Component } from 'react';

import Banner from '../components/Banner/banner'

import ConsultantList from '../components/ConsultantList/consultantlist'
import AdvertiserList from '../components/AdvertiserList/advertiserlist'

import '../index.css'

//import banner from '../img/banner.png'

class HomePage extends Component {
  render() {
    return (  
            <div>
                <Banner />
                <ConsultantList />
                <AdvertiserList />          
                </div>
              
            );
          }
        }
        
     

export default HomePage;