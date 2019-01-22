import React, { Component } from 'react';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { DatePicker } from 'material-ui';
class AdditionalInfo extends Component {
  render() {    
   
    const {handleChange,submit,dashboard,add,changingmore,addmore,changing}=this.props
   console.log('additional',this.props)
    return (  
            <div>
            <div className="col-sm-12">
            
                           <label>Company Name</label>
                          <TextField style={{backgroundColor:'#f1eeee',width:'100% !important'}} className="textfields"              
                              onChange={handleChange('companyname')}
                              defaultValue={dashboard.companyname}   
                          />

                        </div>
                       
                        <div className="col-sm-12">
                        <label>About Yourself<i className="fa fa-star" aria-hidden="true"></i></label>
                             
                                <div className="TextField">
                                <TextField  style={{backgroundColor:'#f1eeee',width:'100% !important'}} className="textfields"              
                              onChange={handleChange('about')}
                              defaultValue={dashboard.about}
                             
                          />
                                </div>
                              
                        </div>
                        <label>Qualification<i className="fa fa-star" aria-hidden="true"></i></label>
                              
                                {
                                 this.props.dashboard.qualification.map((data,index)=>{  
                                                
                                   return (
                                     <div key={index}>
                                   <TextField style={{backgroundColor:'#f1eeee'}} className="textfields"              
                                      onChange={(e)=>changing(e,index)}
                                      //onChange={handleChange(`qualification${index}`)}
                                      defaultValue={data}
                              
                          />
                          </div>)
                         
                        })}
                           <div className="AddMoreBtn">
                          <span className="fa fa-plus"></span>
                              <RaisedButton 
                              label="add more"
                              primary={false}
                              
                             // style={styles.button}
                              onClick={add}
                            />
                          </div>  
                              {/*<button onClick={(e)=>this.add(e)} className="AddMore text-right"> + Add More</button>*/}
                              <h3 className="Exinfo">Experience</h3>
                            {
                              
                               this.props.dashboard.experience.map((data,index)=>{
                            return(
                              <div key={index}>
                             <div className="col-md-6 col-sm-6">
                              <label>Title<i className="fa fa-star" aria-hidden="true"></i></label>
                               <TextField style={{backgroundColor:'#f1eeee'}} className="textfields"              
                                      onChange={(e)=>changingmore(e.target.value,index,'title')}
                                      //onChange={handleChange(`qualification${index}`)}
                                      defaultValue={data.title}
                              
                          />
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <label>Company<i className="fa fa-star" aria-hidden="true"></i></label>
                              <TextField style={{backgroundColor:'#f1eeee'}} className="textfields"              
                                      onChange={(e)=>changingmore(e.target.value,index,'company')}
                                      //onChange={handleChange(`qualification${index}`)}
                                      defaultValue={data.company}
                              
                          />
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <label>Location<i className="fa fa-star" aria-hidden="true"></i></label>
                              <TextField style={{backgroundColor:'#f1eeee'}} className="textfields"              
                                      onChange={(e)=>changingmore(e.target.value,index,'location')}
                                      //onChange={handleChange(`qualification${index}`)}
                                      defaultValue={data.location}
                              
                          />   
                            </div>
                            <div className="col-md-6 col-sm-6 secheduleInfo">
                              <label>Date<i className="fa fa-star" aria-hidden="true"></i></label>
                              
                                <div className="row">
                                  <div className='col-md-6 col-sm-6'>
                                      <div className="form-group-calender">
                                        
                                        <DatePicker  style={{backgroundColor:'#f1eeee'}} className="textfields"              
                                      onChange={(e,date)=>changingmore(new Date(date).getTime(),index,'dateFrom')}
                                      //onChange={handleChange(`qualification${index}`)}
                                      hintText={moment(data.dateFrom).format("DD-MM-YYYY")}
                                       />
                                       
                                      </div>
                                  </div>
                                  <div className='col-md-6 col-sm-6'>
                                      <div className="form-group-calender">
                                       
                                      <DatePicker  style={{backgroundColor:'#f1eeee'}} className="textfields"              
                                      onChange={(e,date)=>changingmore(new Date(date).getTime(),index,'dateTo')}
                                      //onChange={handleChange(`qualification${index}`)}
                                      hintText={moment(data.dateTo).format("DD-MM-YYYY")}
                                       />
                                        
                                      </div>
                                  </div>
                                  
                                </div>
                              
                            </div>
</div>
                            )

                             }
                             ) 
                             } 
                              <div className="AddMoreBtn">
                          <span className="fa fa-plus"></span>
                              <RaisedButton 
                              label="add more"
                              primary={false}
                              
                             // style={styles.button}
                              onClick={addmore}
                            />
                          </div>  
                       
                       
                        

                
                        <div className="ActiveBtn">
                        {/* <button type="button">CANCEL</button> */}
                        <RaisedButton 
                              label="Update"
                              primary={false}
                              onClick={submit}
                            />
                      </div>
                   </div>
              
            );
          }
        }
export default AdditionalInfo;
 
                        