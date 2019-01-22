import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Redirect } from 'react-router';
import {connect } from 'react-redux';
import * as getSearchData from '../../actions/searchAction';
class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      options1 : [
        { label: 'Category', value: "" },
        { label: 'Information Technology', value: 'Information Technology' },
        { label: 'Junior Developer', value: 'Junior Developer' },
        { label: 'Senior Developer', value: 'Senior Developer' },
        { label: 'Developer', value: 'Developer' },
        { label: 'Student or Learning', value: 'Student or Learning' },
        { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
        { label: 'Intern', value: 'Intern' },
        { label: 'Other', value: 'Other' }
      ],
      options2 : [
        { label: 'Skills', value: "" },
        { label: 'Skill 21', value: 'Skill 21' },
        { label: 'Kiran', value: 'Kiran' },
        { label: 'Skill 4', value: 'Skill 4' },
        { label: 'Skill 3', value: 'Skill 3' }
      ],
      options3 : [
        { label: 'Region', value: "" },
        { label: 'West', value: 'West' },
        { label: 'East', value: 'East' },
        { label: 'UP', value: 'UP' },
        { label: 'Delhi', value: 'Delhi' },
      ],
      options4 : [
        { label: 'City', value: "" },
        { label: 'Mumbai', value: 'Mumbai' },
        { label: 'NewDelhi', value: 'NewDelhi' },
        { label: 'Gurgaon', value: 'Gurgaon' },
        { label: 'Noida', value: 'Noida' }
      ],
      status:'',
      categ:'',
      skillVal:'',
      regionVal:'',
      cityVal:'',
      searchedDataArray:[],
      loading:false,
      current:1
    }
}

  onChangeCat=(e)=>{
    this.setState({categ: e.target.value });
  
  }
  onChangeSkill=(e)=>{
    this.setState({skillVal: e.target.value })
  }

  onChangeRegion=(e)=>{
    this.setState({regionVal: e.target.value })
  }

  onChangeCity=(e)=>{
    this.setState({cityVal: e.target.value })
  }

   fetchData=()=>{
   const categ = this.state.categ;
   const regionVal= this.state.regionVal;
   const cityVal=this.state.cityVal;
   const skillVal =this.state.skillVal;
   const {paginationValue}=this.props
   const {current}=this.state
   console.log('page value in api',current)
    fetch('http://backendul.n1.iworklab.com:3202/api/user/search/?category='+categ+'&skills='+skillVal+'&region='+regionVal+'&city='+cityVal+'&pageNumber='+current+'&pageSize=10')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setState({searchedDataArray:data,loading:true}, ()=>this.props.searchAct(data, this.state.loading,categ,regionVal,cityVal,skillVal));
      });
    }
  
componentWillReceiveProps(nextProps){
  if(this.props.paginationValue !==nextProps.paginationValue){
    console.log("inside th e CWRp")
    this.setState({current:nextProps.paginationValue},()=>{this.fetchData()});
  
  }
  
  
}
    
// componentDidUpdate(prevProps, prevState){
//   const categ = this.state.categ;
//    const regionVal= this.state.regionVal;
//    const cityVal=this.state.cityVal;
//    const skillVal =this.state.skillVal;
//    const {paginationValue}=this.props
//   console.log('page value in api did update',paginationValue)
//   if(prevState.paginationValue !== paginationValue) {
//     fetch('http://backendul.n1.iworklab.com:3202/api/user/search/?category='+categ+'&skills='+skillVal+'&region='+regionVal+'&city='+cityVal+'&pageNumber='+this.state.current+'&pageSize=10')
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           this.setState({searchedDataArray:data,loading:true}, ()=>this.props.searchAct(data, this.state.loading,categ,regionVal,cityVal,skillVal));
//       });
//     }
// }


  render() {
    //console.log("paginationvalues------>",this.props.paginationValue);
    return (  
<section className="JustifyNav">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="row">
            <div className="selectNav">
              <div className="col-md-3 col-sm-3">
                <div className="selectInner">
                  <img src='/img/list.png' alt="icon" />
                  <select onChange={this.onChangeCat} name="status" value={this.state.categ}>

                              {
                  this.state.options1.map((datas) =>(
                    <option key={datas.label} value={datas.value}>{datas.label}</option>
                  
                )) 
                }
                        
                    
                  </select>  
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className="selectInner">
                  <img src='/img/setting-icon.png' alt="icon"/>
                  <select onChange={this.onChangeSkill} name="status" value={this.state.skillVal}>
                  {
this.state.options2.map((datas) =>(
<option key={datas.label} value={datas.value}>{datas.label}</option>

)) 
}


</select>  
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className="selectInner">
                  <img src="/img/ragion.png" alt="icon"/>
                  <select onChange={this.onChangeRegion} name="status" value={this.state.regionVal}>
                  {
this.state.options3.map((datas) =>(
<option key={datas.label} value={datas.value}>{datas.label}</option>

)) 
}


</select>  
 
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div className="selectInner">
                  <img src="/img/city.png" alt="icon"/>
                  <select onChange={this.onChangeCity} name="status" value={this.state.cityVal}>
                  {
this.state.options4.map((datas) =>(
<option key={datas.label} value={datas.value}>{datas.label}</option>

)) 
}


</select>  
 
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <Link to={{pathname:'/users'}} style ={{color : 'white'}}>
            <div className="searchBtn">
                <div className="input-group">
               
                  <div className="input-group-addon">
                    <img src="/img/search.png" onClick={this.fetchData} alt="search"/>
                  </div>
                  <button type="button" onClick={this.fetchData} className="btn btn-info pull-right form-control SearchBB" >Search</button>
                 
                </div>
            </div>
            </Link>
          </div>
        </div>
      
      </div>
    </section>
            );
          }
        }
        
     

export default connect (
  state => ({
    paginationValue:state.PaginationReducer.paginationValue
}),
{ ...getSearchData },
)(Search);