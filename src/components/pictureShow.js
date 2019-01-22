import React, { Component } from 'react';
import axios from 'axios';
class Pictureshow extends Component {
constructor(){
    super()
    this.state={

        image:'',
        imageview:''
    }
      }

    
    componentDidMount(){

        console.log("nextpropsdidmount",this.props.picturekey)
       
        axios.get(`http://backendul.n1.iworklab.com:3202/api/auth/file?key=${this.props.picturekey}`)
  
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
            
        })
    }

    render() {
            return (  
                <img src={`data:image/jpeg;base64,${this.state.image}`} style={{height:"100px"}}/>

            );
    }
}



export default Pictureshow;