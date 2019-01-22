import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import swal from 'sweetalert';
//import SelectField from 'material-ui/SelectField';
//import MenuItem from 'material-ui/MenuItem';
import '../../index.css'
export class FormPersonalDetails extends Component {

  
  continue = e => {
     e.preventDefault();

    for (var i=0;i<=this.props.values.qualification.length;i++)
    { 
      if(this.props.values.qualification[i]=="")
      {
         swal("Oops!","Qualification required", "warning");
      }
       else if(this.props.values.experience[0].dateFrom>this.props.values.experience[0].dateTo)
      {
        swal("Oops!","Please check Date", "warning");
      }
        else if(this.props.values.category&&this.props.values.about&&this.props.values.qualification[0]!==""&&this.props.values.experience[0].title!==""&&this.props.values.experience[0].company!==""&&this.props.values.experience[0].location!==""&&this.props.values.experience[0].dateFrom!==""&&this.props.values.experience[0].dateTo!==""){
        this.props.nextStep();
    }

    else{
      swal("Oops!","Mendatory Fields are missing", "warning");
    }
    }
    
   

    
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
 

  render() {
     console.log("second",this.props.values.experience)
    const { values, handleChange,add ,changing,addmore,changingmore} = this.props;
    
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
                             <span className="step finish"></span>
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
                            <div className="col-md-6 col-sm-6">
                              <label>Select Category*</label>
                              <select onChange={handleChange('category')} name="status" defaultValue={values.category}>

                              {
                                this.props.categoryList.map((datas) =>(
                                  <option key={datas.label} value={datas.value}>{datas.label}</option>
                                
                              )) 
                              }

                  </select>  

                        
                    
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <label>Select Skills*</label>
                                <div className="selectAction">
                                <select onChange={handleChange('skills')} name="status" defaultValue={values.skills} >

                                        {
                                          this.props.skillList.map((datas) =>(
                                            <option key={datas.label} value={datas.value}>{datas.label}</option>
                                          
                                        )) 
                                        }


</select>  
                                </div>
                           </div>
                            <div className="col-md-12">
                              <label>About Yourself<i className="fa fa-star" aria-hidden="true"></i></label>
                              
                                <div className="TextField">
                                
                                <TextField  style={{backgroundColor:'#f1eeee',width:'100% !important'}} className="textfields"              
                              onChange={handleChange('about')}
                              defaultValue={values.about}
                             
                          />
                               </div>
                             
                            </div>
                            <div className="col-md-12">
                            
                              <label>Qualification<i className="fa fa-star" aria-hidden="true"></i></label>
                              
                                {
                                  values.qualification.map((data,index)=>{  
                                                
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
                              
                              style={styles.button}
                              onClick={add}
                            />
                          </div>  
                              {/*<button onClick={(e)=>this.add(e)} className="AddMore text-right"> + Add More</button>*/}
                            </div>
                            <h3 className="Exinfo">Experience</h3>
                            {
                              
                               values.experience.map((data,index)=>{
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
                                        
                                        <TextField type="date" style={{backgroundColor:'#f1eeee'}} className="textfields"              
                                      onChange={(e)=>changingmore(new Date(e.target.value).getTime(),index,'dateFrom')}
                                      //onChange={handleChange(`qualification${index}`)}
                                      defaultValue={data.dateFrom} />
                                        
                                      </div>
                                  </div>
                                  <div className='col-md-6 col-sm-6'>
                                      <div className="form-group-calender">
                                       
                                        <TextField type="date" style={{backgroundColor:'#f1eeee'}} className="textfields"              
                                      onChange={(e)=>changingmore(new Date(e.target.value).getTime(),index,'dateTo')}
                                      //onChange={handleChange(`qualification${index}`)}
                                      defaultValue={data.dateTo} />
                                        
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
                              
                              style={styles.button}
                              onClick={addmore}
                            />
                          </div>  
                            

                          </div>
                          <div className="ActiveBtn">
                          <div>
                              <RaisedButton
                              label="Continue"
                              primary={true}
                              style={styles.button}
                              onClick={this.continue}
                                  />
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

export default FormPersonalDetails;
