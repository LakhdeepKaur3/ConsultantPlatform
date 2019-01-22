import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authAction';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

   
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    return (
      <section className="SignInWrap">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8">
            <div className="SignOuterWrap">
              <div className="signIninner">
                <h1 className="InnerHeading">Sign In</h1>
                <div className="FillInfo">
                  <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                      <form onSubmit={this.onSubmit}>
                        <label>Email</label>
                        <input type="email" required className="form-control"
                        placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}/>
                        <label>Password</label>
                        <input type="password" required  className="form-control"
                        placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}/>
                        <input type="submit" className="submit-btn"/>

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
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

 export default connect(mapStateToProps, { loginUser })(Login);
 
