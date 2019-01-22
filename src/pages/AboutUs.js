import React, { Component } from 'react';
import axios from 'axios';
import { serverUrl } from '../utils/api.js'
//import { serverUrl, localUrl } from '../utils/api.js'

class AboutUs extends Component {
  constructor(){
      super()
      this.state={

        data:[]
      }
  }
   
  componentDidMount() {
    axios.get(`${serverUrl}/company/`)
      .then(res => {
         // console.log(res.data.company)
        this.setState({data:res.data.company})
       
      })
  }


  render() {
      
    return (  
            <div className="container">
            <div className="AboutInnerText">                <h1 style={{textAlign:'center'}}>About us</h1>
                    {
                        this.state.data.map((datas,index)=>{
                        return( 
                              <div key={index}>
                           <p>{datas.description}</p>

                               </div>
                        )

                        })

                      }
                      </div>

                </div>
              
            );
          }
        }
export default AboutUs;