import React, { Component } from 'react';
import axios from 'axios';
//import UserData from '../components/UserData' 
//import { serverUrl, localUrl } from '../utils/api.js'
import { serverUrl } from '../utils/api.js'
class TransactionHistory extends Component {

  constructor(props){
    super(props)
    this.state={
      transaction:''
    }
  }

  componentDidMount(){
  
let token= localStorage.getItem('jwtToken');
// let id=localStorage.getItem('id')
 

    axios
    .get(`${serverUrl}/transaction/5c1a41b8879ba4558468fff1`,{
    
      headers: {
        "Authorization": "Bearer " + token,
      }
  })
    .then(res=>{
      this.setState({transaction:res.data.transaction})
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    }
    )
  }



  render() {
    console.log("transaction",this.state.transaction)
    return (  

      <div className="col-md-8 col-sm-8">
      <div className="SignOuterWrap">
        <div className="signIninner">
          <h1 className="InnerHeading">TRANSACTION HISTORY</h1>
          <div className="HisOuter">
            <div className="table-responsive">          
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Transaction Id</th>
                    <th>Description</th>
                    <th>Payment Mode</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                {
                  this.state.transaction.length!==0?(
                  this.state.transaction.map(data=>(
                <tbody >
                  <tr>
                    <td>{data.createdAt} </td>
                    <td>{data.transactionId}</td>
                    <td>{data.description}</td>
                    <td>{data.paymentMode}</td>
                    <td>{data.amount}</td>
                    <td>{data.status}</td>
                  </tr>
                  
                </tbody>
                  ))):null}
              </table>
              </div>
          </div>
        </div>
      </div>
    </div>
              
            );
          }
        }
export default TransactionHistory;