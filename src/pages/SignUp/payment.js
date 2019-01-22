import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  {registeruser} from '../../actions/authAction'
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Loading from '../../Loader/index';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class Payment extends Component {
  continue = e => {
    
    console.log("hii")  
    //this.props.registeruser(this.props.values)
    
   console.log(this.props.values)
   
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { continues ,values, handleChange ,errorName } = this.props;
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
  
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <section className="SignInWrap">{
          
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
                             <span className="step finish"></span>
                             <span className="step-text">Additional Info</span>
                          </div>
                          <div className="SetTextOuter">
                             <span className="step finish"></span>
                             <span className="step-text">Choose Plan</span>
                          </div>
                           <div className="SetTextOuter last-step">
                             <span className="step finish"></span>
                             <span className="step-text">Upload Video</span>
                          </div>
                        </div>
                          {this.props.values.planType=='basic'?
                       <div>
                       <p>BAsic</p>
                       <div className="col-md-offset-1 col-8">
                                   <div className="RadioGroup">
                                 <RadioButtonGroup name="shipSpeed" defaultSelected="month" onChange={handleChange('planSchedule')} >
                                  <RadioButton className='MobileRadio'
                                    value="month"
                                    label="Monthly"
                                   // style={styles.radioButton}
                                  />
                                  <RadioButton className='MobileRadio'
                                    value="year"
                                    label="Yearly"
                                   // style={styles.radioButton}
                                  />
                                    </RadioButtonGroup>
                                   
                                </div>
                              </div>
                         <RaisedButton
                          label="buy"
                          //primary={false}
                          style={styles.button}
                          onClick={this.props.changeplantobasic}
                        />
                         </div>
                    
                          :
                          <div>
                        <p>
                        Pro  
                        </p>
                        <div className="col-md-offset-1 col-8">
                                   <div className="RadioGroup">
                                 <RadioButtonGroup name="shipSpeed" defaultSelected="month" onChange={handleChange('planSchedule')}>
                                  <RadioButton className='MobileRadio'
                                    value="month"
                                    label="Monthly"
                                   // style={styles.radioButton}
                                  />
                                  <RadioButton className='MobileRadio'
                                    value="year"
                                    label="Year"
                                   // style={styles.radioButton}
                                  />
                                    </RadioButtonGroup>
                                   
                                </div>
                              </div>
                        <RaisedButton
                          label="buy"
                          //primary={false}
                          style={styles.button}
                          onClick={this.props.changeplantopro}
                        />
                       </div>}
                         
                        <RaisedButton className="FullSub"
                          label="Back"
                          primary={false}
                          style={styles.button}
                          onClick={this.back}
                        />
                             </form>
              
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
   }</section>
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


export default connect(null,{registeruser})(Payment);

