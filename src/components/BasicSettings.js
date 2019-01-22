import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class BasicSettings extends Component {
  render() {    
    console.log("basic",this.props.dashboard.category)
    const {dashboard,handleChange,submit,cancel}=this.props
    return (  
            <div>
            <div className="col-md-6 col-sm-6 col-xs-12">
                          <label>First Name<i className="fa fa-star" aria-hidden="true"></i></label>
                                  <TextField style={{backgroundColor:'#f1eeee'}} className="textfields"
                                    onChange={handleChange('firstName')}
                                    //errorText={errorName.firstNameError}
                                    defaultValue={dashboard.firstName}
                    
                          />
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                        <label>Last Name <i className="fa fa-star" aria-hidden="true"></i></label>
                            <TextField style={{backgroundColor:'#f1eeee'}} className="textfields"              
                              onChange={handleChange('lastName')}
                             // errorText={errorName.lastNameError}
                              defaultValue={dashboard.lastName}
                             
                          />
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                        <label>Phone No<i className="fa fa-star" aria-hidden="true"></i></label>
                              <TextField type="number" min="0" max="10" style={{backgroundColor:'#f1eeee'}} className="textfields"              
                              onChange={handleChange('contact')}
                             // errorText={errorName.contactError}
                              defaultValue={dashboard.contact}
                             
                          />
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                        <label>Email<i className="fa fa-star" aria-hidden="true"></i></label>
                              <TextField style={{backgroundColor:'#f1eeee'}} className="textfields"  disabled={true}            
                              onChange={handleChange('email')}
                            //  errorText={errorName.emailError}
                              defaultValue={dashboard.email}
                             
                          />
                        </div>
                       
                       
                        <div className="col-md-6 col-sm-6">
                              <label>Select Category*</label>
                              <select onChange={handleChange('category')} name="status" value={dashboard.category}>

                              {
                                dashboard.categoryList.map((datas) =>(
                                  <option key={datas.label} value={datas.value}>{datas.label}</option>
                                
                              )) 
                              }

                  </select>  
                            </div>
                       <div className="col-md-6 col-sm-6">
                              <label>Select Skills*</label>
                                <div className="selectAction">
                                <select onChange={handleChange('skills')} name="status" value={dashboard.skills} >

                                        {
                                          dashboard.skillList.map((datas) =>(
                                            <option key={datas.label} value={datas.value}>{datas.label}</option>
                                          
                                        )) 
                                        }


</select>  
                                </div>
                           </div>
                        <div className="ActiveBtn">
                        {/* <RaisedButton 
                              label="Cancel"
                              primary={false}
                              onClick={cancel}
                            /> */}
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
export default BasicSettings;
 
                        