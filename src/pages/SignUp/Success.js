import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import  {registeruser} from '../../actions/authAction'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import Loading from '../../Loader/index'
export class Success extends Component {
  constructor( props ) {
    super( props );
    
   }

  
   continue = e => {
    
    console.log("hii")  
    
    this.props.registeruser(this.props.values,this.props.history)
    
   console.log(this.props.values)
   
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
// ShowAlert Function
// 
  render() {   
  
    let {imagePreviewUrl} = this.props;
    let {imagePreviewUrls} = this.props;
    let {videoPreviewUrl} = this.props;
      let $imagePreview = null;
      let $imagePreviews = null;
      let $videoPreview=null
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} height='150px' />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      } 
      if (imagePreviewUrls) {
        $imagePreviews = (imagePreviewUrls.map((datas,index) =>((
          <div key={index}>
          <img src={datas} height='150px' />
          {this.props.pictures.length<=0?
         <button type="button" onClick={(e)=>this.props.removeimage(`${index}`)}> <i class="fa fa-close"></i></button>:null
          }</div>
          ))))
      } else {
        $imagePreviews = (<div className="previewText">Please select an Image for Preview</div>);
      }
      if (videoPreviewUrl) {
        $videoPreview = (videoPreviewUrl.map((datas,index) =>((
        <div key={index}><video width="320" height='150px' controls>
                            <source src={datas} type="video/mp4" />
                          </video>
                          {this.props.videos.length<=0?
         <button type="button" onClick={(e)=>this.props.removevideo(`${index}`)}> <i class="fa fa-close"></i></button>:null
          }
                          </div>
                          ))));
      } else {
        $videoPreview = (<div className="previewText">Please select an video for Preview</div>);
      } 
    console.log(this.state) 
    const {
      values,singleFileChangedHandler,singleVideoChangedHandler,singleFileUploadHandler,singleVideoUploadHandler,multipleFileUploadHandler,multipleFileChangedHandler
    } = this.props;
  

    
    return (
  
      <MuiThemeProvider>
        <React.Fragment>
        <section className="SignInWrap">{
          (this.props.isLoading)? <Loading/> :
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
                         {/* For Alert box*/}
                    <div id="oc-alert-container"></div>
                       <div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
                          
                          <div className="card-body customCard">
                         
                          {/* <input type="file"  placeholder="Choose File"/> */}
                              {/* Add new Design */}
                              <div className="input-group">
                              <input type="text" placeholder="Upload Picture" className="form-control"/>
                              <div className="input-group-addon">
                                <input onChange={singleFileChangedHandler} type="file" />
                                <span>Choose File</span>
                              </div>
                            </div>


                          
                          <div style={{"width":"500px","height":"100px"}}>
                            {$imagePreview}
                            
                            </div>
                            <div className="mt-5 uploadBTN">
                            <button className="btn btn-info" onClick={singleFileUploadHandler}>Upload!</button>
                          </div>
                          </div>
                        </div>
                             
                         </div>
                          :
                          <div>
                          <div className="card border-light mb-3" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
                          
                           <div className="card-body customCard">
                           <div className="input-group">
                              <input type="text" placeholder="Upload Picture (Max 4)" className="form-control"/>
                              <div className="input-group-addon">
                                <input multiple onChange={multipleFileChangedHandler} type="file" />
                               {this.props.pictures.length<=0?
                                <span>Choose File</span>:
                                null
                              }
                              </div>
                            </div>
                            
                            <div className="imagePreview" style={{"width":"100%","height":"100px"}}>
                            {$imagePreviews}
                            </div>
                            <div className="mt-5 uploadBTN">
                            {this.props.pictures.length<=0?
                             <button className="btn btn-info" onClick={multipleFileUploadHandler}>Upload!</button>
                            :null}
                            </div>
                           </div>
                          </div>
                        <div className="card border-light mb-3" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
                        
                        <div className="card-body customCard">
                         
                        <div className="input-group">
                              <input type="text" placeholder="Upload Video (Max 2)" className="form-control"/>
                              <div className="input-group-addon">
                                <input multiple  onChange={singleVideoChangedHandler} type="file" />
                                {this.props.videos.length<=0?
                                <span>Choose File</span>:
                                null
                              }
                              </div>
                            </div>
                         
                         <div className="videoPreview" style={{"width":"500px","height":"100px"}}>
                         {$videoPreview}
                         </div>
                         <div className="mt-5 uploadBTN">
                          {this.props.videos.length<=0?
                             <button className="btn btn-info" onClick={singleVideoUploadHandler}>Upload!</button>
                            :null}
                         </div>
                        </div>
                       </div>
                       </div>}
                         <RaisedButton className="FullSub"
                          label="Submit"
                          primary={true}
                          style={styles.button}
                          onClick={this.continue}
                           />
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
export default connect(null,{registeruser})(withRouter(Success));
