import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
export class FormUserDetails extends Component {
  constructor(props){
    super(props)
    this.state={
      
  }
  }  
  render() {
    const { continues ,values, handleChange ,errorName } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
   <section className="SignInWrap">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <div className="SignOuterWrap">
              <div className="signIninner">
                <h1 className="InnerHeading">Sign Up</h1>
                <div className="FillInfo">
                  <div className="row">
                    <div className="col-md-offset-2 col-md-8">
                      <form id="regForm" action="/action_page.php">
                        <div style={{textAlign:'center',marginTop:'30px'}} className="StepCounter">
                          <div className="SetTextOuter">
                             <span className="step finish"></span>
                             <span className="step-text">Basic Info</span>
                          </div>
                          <div className="SetTextOuter">
                             <span className="step"></span>
                             <span className="step-text">Additional Info</span>
                          </div>
                          <div className="SetTextOuter">
                             <span className="step"></span>
                             <span className="step-text">Choose Plan</span>
                          </div>
                           <div className="SetTextOuter last-step">
                             <span className="step"></span>
                             <span className="step-text">Upload Video</span>
                          </div>
                        </div>
                     
                        <div className="RagisterformOuter">
                          <div className="SignUpTypeOuter">
                            <div className="row">
                              <div className="col-md-offset-1 col-8">
                                   <div className="RadioGroup">
                                 <RadioButtonGroup name="shipSpeed" defaultSelected="consultant"  onChange={handleChange('roles')}>
                                  <RadioButton className='MobileRadio'
                                    value="consultant"
                                    label="Sign Up as company"
                                   // style={styles.radioButton}
                                  />
                                  <RadioButton className='MobileRadio'
                                    value="advertiser"
                                    label="Sign Up as Advertiser"
                                   // style={styles.radioButton}
                                  />
                                    </RadioButtonGroup>
                                   
                                </div>
                              </div>
                            </div>    
                        </div>
                          
                          
                          <div className="row">
                          <div className="col-md-12 col-sm-12 col-xs-12 companyFields">
                          <label>Company Name</label>
                          <TextField style={{backgroundColor:'#f1eeee',width:'100% !important'}} className="textfields" name="companyname"             
                              onChange={handleChange('companyname')}
                              defaultValue={values.companyname}
                             
                          />
                          </div>
                          <div className="col-md-12 col-sm-12 col-xs-12 companyFields">
                          <label>Company Address</label>
                          <TextField name="lastName" style={{backgroundColor:'#f1eeee',width:'100% !important'}} className="textfields"              
                              onChange={handleChange('companyaddress')}
                              defaultValue={values.companyaddress}
                             
                          />
                          </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <label>State</label>
                              <TextField name="State" style={{backgroundColor:'#f1eeee'}} className="textfields"              
                              onChange={handleChange('region')}
                              defaultValue={values.region}
                             
                          />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <label>City</label>
                              <TextField name="city" style={{backgroundColor:'#f1eeee'}} className="textfields"              
                              onChange={handleChange('city')}
                              defaultValue={values.city}
                             
                          />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                            <label>First Name<i className="fa fa-star" aria-hidden="true"></i></label>
                                  <TextField name="firstName" style={{backgroundColor:'#f1eeee'}} className="textfields"
                                    onChange={handleChange('firstName')}
                                    errorText={errorName.firstNameError}
                                    defaultValue={values.firstName}
                    
                          />
                          </div>
                              {/*<label>First Name<i className="fa fa-star" aria-hidden="true"></i></label>
                              <p><input placeholder="" onInput="this.className = ''" name="lname"/></p>
                            </div>*/}

                            <div className="col-md-6 col-sm-6 col-xs-12">
                            <label>Last Name <i className="fa fa-star" aria-hidden="true"></i></label>
                            <TextField name="lastName" style={{backgroundColor:'#f1eeee'}} className="textfields"              
                              onChange={handleChange('lastName')}
                              errorText={errorName.lastNameError}
                              defaultValue={values.lastName}
                             
                          />
                              {/*<label>Last Name<i className="fa fa-star" aria-hidden="true"></i></label>
                              <p><input placeholder="" onInput="this.className = ''" name="lname"/></p>
 */}                           </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <label>Phone No<i className="fa fa-star" aria-hidden="true"></i></label>
                              <TextField name="Phone" type="number" min="0" max="10" style={{backgroundColor:'#f1eeee'}} className="textfields"              
                              onChange={handleChange('contact')}
                              errorText={errorName.contactError}
                              defaultValue={values.contact}
                             
                          />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <label>Email<i className="fa fa-star" aria-hidden="true"></i></label>
                              <TextField name="email" style={{backgroundColor:'#f1eeee'}} className="textfields"              
                              onChange={handleChange('email')}
                              errorText={errorName.emailError}
                              defaultValue={values.email}
                             
                          />
                            </div>
                            <div class="clearfix"></div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <label>Password<i className="fa fa-star" aria-hidden="true"></i></label>
                              <TextField name="password" type="password" style={{backgroundColor:'#f1eeee'}} className="textfields"              
                              onChange={handleChange('password')}
                              errorText={errorName.passwordError}
                              defaultValue={values.password}
                             
                          />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                            <label>Confirm Password<i className="fa fa-star" aria-hidden="true"></i></label>
                            <TextField name="confirmpassword" type="password" style={{backgroundColor:'#f1eeee'}} className="textfields"              
                              onChange={handleChange('confirmpassword')}
                              errorText={errorName.confirmpasswordError}
                              defaultValue={values.confirmpasswordError}
                             
                          />
                            </div>
                            {/*<div className="col-md-6col-sm-6 col-xs-12">
                              <label>Password<i className="fa fa-star" aria-hidden="true"></i></label>
                              <TextField style={{backgroundColor:'#f1eeee'}} className="textfields"              
                              onChange={handleChange('password')}
                              errorText={errorName.passwordError}
                              defaultValue={values.password}
                             
                          />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                              <label>Confirm Password<i className="fa fa-star" aria-hidden="true"></i></label>
                              <TextField style={{backgroundColor:'#f1eeee'}} className="textfields"              
                              onChange={handleChange('confirmpassword')}
                              errorText={errorName.confirmpasswordError}
                              defaultValue={values.confirmpasswordError}
                             
                          />
</div>*/}
                            
                          </div>
                          <div className="ActiveBtn">
                           <RaisedButton
                                label="Submit"
                                primary={true}
                                style={styles.button}
                                onClick={continues}
                              />
                        </div>
                        </div>
                        
    
                        {/* <div className="tab step2">
                          <div className="row">
                            <div className="col-md-6 col-sm-6">
                              <label>Select Category*</label>
                              <div className="selectAction">
                                  <select>
                                    <option>Information & Technology</option>
                                    <option>HardWare</option>
                                    <option>Accounts</option>
                                    <option>Industrial</option>
                                  </select>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <label>Select Skills*</label>
                                <div className="selectAction">
                                  <select>
                                    <option>Skills 1</option>
                                    <option>Skills 2</option>
                                    <option>Skills 3</option>
                                    <option>Skills 4</option>
                                  </select>
                                </div>
                           </div>
                            <div className="col-md-12">
                              <label>About Yourself<i className="fa fa-star" aria-hidden="true"></i></label>
                              <p>
                                <div className="TextField">
                                  <textarea rows="5"></textarea>
                                </div>
                              </p>
                            </div>
                            <div className="col-md-12">
                              <label>Qualification<i className="fa fa-star" aria-hidden="true"></i></label>
                              <p><input placeholder="" onInput="this.classNameName = ''" name="lname"/>
                                <a href="#" className="AddMore text-right"> + Add More</a>
                              </p>
                              
                            </div>
                            <h3 className="Exinfo">Experience</h3>
                            <div className="col-md-6 col-sm-6">
                              <label>Title<i className="fa fa-star" aria-hidden="true"></i></label>
                              <p><input placeholder="" onInput="this.classNameName = ''" name="lname"/></p>
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <label>Company<i className="fa fa-star" aria-hidden="true"></i></label>
                              <p><input placeholder="" onInput="this.classNameName = ''" name="lname"/></p>
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <label>Location<i className="fa fa-star" aria-hidden="true"></i></label>
                              <p><input placeholder="" onInput="this.classNameName = ''" name="lname"/></p>
                            </div>
                            <div className="col-md-6 col-sm-6 secheduleInfo">
                              <label>Date<i className="fa fa-star" aria-hidden="true"></i></label>
                              <p>
                                <div className="row">
                                  <div className='col-md-6 col-sm-6'>
                                      <div className="form-group-calender">
                                        <form>
                                          <input type="date" name="dateofbirth" id="dateofbirth"/>
                                        </form>
                                      </div>
                                  </div>
                                  <div className='col-md-6 col-sm-6'>
                                      <div className="form-group-calender">
                                        <form>
                                          <input type="date" name="dateofbirth" id="dateofbirth"/>
                                        </form>
                                      </div>
                                  </div>
                                  <a href="#" className="AddMore text-right"> + Add More</a>
                                </div>
                              </p>
                            </div>
                          </div>
                          <div className="ActiveBtn">
                          <div>
                           
                            <button type="button" id="nextBtn" onclick="nextPrev(1)">SUBMIT</button>
                          </div>
                        </div>
                        </div>
                       
                        <div className="tab step3">
                          <div className="col-md-6 col-sm-6">
                            <div className="planWrap">
                              <div className="PlanHead">
                                <div className="PlanCost">
                                  <span>Basic</span>
                                </div>
                                <h3>$90 Per Month or $1000 Per Year</h3>
                              </div>
                              <div className="PlanBody">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
                                <div className="ActiveBtn">
                          <div>
                           
                            <button type="button" id="nextBtn" onclick="nextPrev(1)">Buy Now</button>
                          </div>
                        </div>
                              </div>
                            </div>
                           </div>
                            <div className="col-md-6 col-sm-6">
                            <div className="planWrap">
                              <div className="PlanHead">
                                <div className="PlanCost">
                                  <span>Pro</span>
                                </div>
                                <h3>$90 Per Month or $1000 Per Year</h3>
                              </div>
                              <div className="PlanBody">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
                                <div className="ActiveBtn">
                          <div>
                           
                            <button type="button" id="nextBtn" onclick="nextPrev(1)">Buy Now</button>
                          </div>
                        </div>
                              </div>
                            </div>
                            </div>
                         
                          </div>
                        
                       
                         <div className="tab step4">
                          <p><input placeholder="Upload Media" onInput="this.classNameName = ''" name="fname" className="form-control"/></p>
                          <div className="row">
                            <div className="col-md-6">
                              <p>
                                <div className="input-group">
                                  <input type="text" placeholder="Upload Picture" className="form-control"/>
                                  <div className="input-group-addon">
                                    <input  onInput="this.classNameName = ''" type="file" name="lname"/ >
                                    <span>Upload</span>
                                  </div>
                                </div>
                               </p> 
                            </div>
                            <div className="col-md-12">
                              <div className="row">
                                <div className="col-sm-3 col-xs-6">
                                  <img src="images/upload-img.png" alt="upload"/>
                                </div>
                                <div className="col-sm-3 col-xs-6">
                                  <img src="images/upload-img.png" alt="upload"/>
                                </div>
                                <div className="col-sm-3 col-xs-6">
                                  <img src="images/upload-img.png" alt="upload"/>
                                </div>
                                <div className="col-sm-3 col-xs-6">
                                  <img src="images/upload-img.png" alt="upload"/>
                                </div>
                              </div>
                            </div>
                             <div className="col-md-6">
                              <p>
                                <div className="input-group">
                                  <input type="text" placeholder="Upload Videos" className="form-control"/>
                                  <div className="input-group-addon">
                                    <input  onInput="this.classNameName = ''" type="file" name="lname"/>
                                    <span>Upload</span>
                                  </div>
                                </div>
                               </p> 
                            </div>
                            <div className="col-md-12">
                              <div className="row">
                                <div className="col-sm-3 col-xs-6">
                                  <img src="images/upload-video.png" alt="upload"/>
                                </div>
                                <div className="col-sm-3 col-xs-6">
                                  <img src="images/upload-video.png" alt="upload"/>
                                </div>
                                <div className="col-sm-3 col-xs-6">
                                  <img src="images/upload-video.png" alt="upload"/>
                                </div>
                                <div className="col-sm-3 col-xs-6">
                                  <img src="images/upload-video.png" alt="upload"/>
                                </div>
                              </div>
                            </div>
                            <div className="ActiveBtn">
                          <div>
                            <button type="button" id="nextBtn" onclick="nextPrev(1)">SUBMIT</button>
                            <button type="button" id="prevBtn" onclick="nextPrev(-1)">SKIP</button>
                          </div>
                        </div>
                        </div>
                      </div> */}
                     
                     
                   
                    
                      </form>
                     
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
