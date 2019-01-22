import React, { Component } from 'react';
import { getCurrentProfile,setCurrentProfile } from '../actions/dashAction';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import RaisedButton from 'material-ui/RaisedButton';
import  {registeruser} from '../actions/authAction'
import UserData from '../components/UserData'
import BasicSettings from '../components/BasicSettings'
import AdditionalInfo from '../components/AdditionalInfo'
import ResetPassword from '../components/ResetPassword';
class Dashboard extends Component {
    constructor(){

        super();
        this.state={
         
            basic:true,
            additional:false,
            pass:false,
            firstName: "",
            lastName: "",
            contact: '',
            email: "",
            password: '',
            confirmpassword: '',
            category:'',
             categoryList:[{ label: 'Category', value: 0 },
                { label: 'Developer', value: 'Developer' },
                { label: 'Junior Developer', value: 'Junior Developer' },
                { label: 'Senior Developer', value: 'Senior Developer' }],

            skillList:[{label: 'Category', value: 0 },
                { label: 'Skill1', value: 'skill1' },
                { label: 'Skill2', value: 'Skill2' },
                { label: 'Skill3', value: 'Skill3' }],
            skills:'',
            companyname:'',
            about:'',
            qualification:[''],
            experience:[{
              title:'',
              company:'',
              location:'',
              dateFrom:'',     
              dateTo:''
           }]
        }
    }
    add=()=>{
      this.setState({qualification:[...this.state.qualification,""]})
      
        }
  addmore=()=>{
    this.setState((prevState) => ({
      experience: [...prevState.experience, {title:"", company:"",location:"",datefrom:'',dateto:''}],
    }));
  
    }
    changingmore=(value,index,type)=>{
    this.state.experience[index][type]=value
  
    }
    active=()=>{
      this.setState({additional:true,basic:false})
      console.log("hii")
    }
    activepass=()=>{
      this.setState({additional:false,basic:false,pass:true})
      console.log("hii")
    }
    basic=()=>{
      this.setState({additional:false,basic:true,pass:false})
      console.log("hii")
    }
    handleChange = input => e => {
        this.setState({
          [input]: e.target.value
        });
    
      };
      changing=(e,index)=>{
        this.state.qualification[index]=e.target.value
        this.setState ({qualification:this.state.qualification})
         }

      submit=()=>{

        const values = {
            firstName: this.state.firstName,
            lastName:this.state.lastName,
            contact: this.state.contact,
            companyname:this.state.companyname,
            category:this.state.category,
            email:this.props.email,
            skills:this.state.skills,
            about:this.state.about,
            qualification:this.state.qualification,
            experience:this.state.experience
          };
          if(this.state.password && this.state.confirmpassword){
            if(this.state.password == this.state.confirmpassword){
              values.password=this.state.password
            }
            else{
              alert('confirm pass is not match')
            }
          }
      console.log("Updated Data",values)
          this.props.setCurrentProfile(values)
          swal("Updated!", "ok", "success");
       }


     
  componentWillReceiveProps(nextProps){
     console.log('nextprops',nextProps)
     if(nextProps && nextProps.dashboard && nextProps.dashboard.dashboard) {
        this.setState({firstName:nextProps.dashboard.dashboard.firstName,
          lastName: nextProps.dashboard.dashboard.lastName,
          contact: nextProps.dashboard.dashboard.contact,
          email: nextProps.dashboard.dashboard.email,
          category:nextProps.dashboard.dashboard.category,
          skills:nextProps.dashboard.dashboard.skills,
          companyname:nextProps.dashboard.dashboard.companyname,
          about:nextProps.dashboard.dashboard.about,
          qualification:nextProps.dashboard.dashboard.qualification,
          experience:nextProps.dashboard.dashboard.experience
        })
      }
      else{
        alert("something went wrong")
      }
  }

    componentDidMount() {
    
   this.props.getCurrentProfile();
  

      }
      cancel=()=>{
        console.log("hii")
             
              }
  render() {
      
      const {dashboard}=this.props.dashboard

    return (  
            
        <MuiThemeProvider>
        <React.Fragment>
        <section className="SignInWrap Dashboard">
  <div className="container">
    <div className="row">
      <UserData dashboard={this.props}/>
      <div className="col-md-8 col-sm-8">
        <div className="SignOuterWrap">
          <div className="signIninner">
            <h1 className="InnerHeading">ACCOUNT SETTINGS</h1>
            <div className="FillInfo dashfile">
              <div className="row">
                <div className="col-md-offset-2 col-md-9">
                  <form id="regForm">
                    
                    <div className="tab">
                      <div className="SignUpTypeOuter infoBtnType">
                        <div className="row">
                          <div className="col-md-offset-1 col-md-10">
                            <div className="row">
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                  <input type="button" onClick={this.basic} name="radio" value="BASIC INFO"/>
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                  <input type="button" onClick={this.active} name="radio" value="ADDITIONAL INFO"/>
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                  <input type="button" onClick={this.activepass} name="radio" value="RESET PASSWORD"/>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    

                      <div className="row">
                      {
                      (this.state.basic==true && this.state.additional==false && this.state.pass==false)?
                        (
                          <BasicSettings dashboard={this.state}  handleChange={this.handleChange} submit={this.submit} cancel={this.cancel}/>
                           ):null
                      }
                      {
                      (this.state.additional==true)?
                        
                          
                           <AdditionalInfo dashboard={this.state}  handleChange={this.handleChange} submit={this.submit} add={this.add} changing={this.changing} addmore={this.addmore} changingmore={this.changingmore} />:
                          null
                      }
                         {
                      (this.state.pass==true)?
                        
                          
                           
                           <ResetPassword dashboard={this.state}  handleChange={this.handleChange} submit={this.submit} add={this.add} changing={this.changing} addmore={this.addmore} changingmore={this.changingmore} />:null
                      }
 
 
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
        
const mapStateToProps = (state) => ({
    dashboard: state.dashboard,
    
    });  

export default connect(mapStateToProps, {setCurrentProfile, getCurrentProfile,registeruser })(Dashboard);
