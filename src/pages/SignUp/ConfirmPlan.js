import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  {registeruser} from '../../actions/authAction'
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


class Confirm extends Component {
  continue = e => {
    
    console.log("hii")  
    this.props.registeruser(this.props.values)
    
   console.log(this.props.values)
   
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
  
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
                      <form id="regForm">
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
                             <span className="step"></span>
                             <span className="step-text">Upload Video</span>
                          </div>
                        </div>
                          <div className="RagisterformOuter">
                          
                        
                          <div className="SignUpTypeOuter">
                          <div className="row">
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
                           
                            <RaisedButton
                          label="buy"
                          //primary={false}
                          style={styles.button}
                          onClick={this.props.changeplantobasic}
                        />
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
                           
                          <RaisedButton
                          label="buy"
                          //primary={false}
                          style={styles.button}
                          onClick={this.props.changeplantopro}
                        />
                          </div>
                        </div>
                              </div>
                            </div>
                            </div>
                         
                          </div>
                          <div className="ActiveBtn">
                          <div>
                         
                          <RaisedButton
                            label="Back"
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
                          />
                            {/* <button type="button" id="nextBtn" onclick="nextPrev(1)">SUBMIT</button> */}
                          </div>
                        </div>
                        
                    </div>
                    </div>
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


export default connect(null,{registeruser})(Confirm);

