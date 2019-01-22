import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { clearCurrentDashboard } from '../../actions/dashAction';
class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentDashboard();
    this.props.logoutUser();
    this.props.history.push('/login')


  }
  render() {
   // const { isAuthenticated, user } = this.props.auth;
    //console.log("header props",this.props)
    return (
      
<header>
    <section className="main-header">
      <hr/>
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to='/'><img src='/img/logo.png' alt="logo"/></Link>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
          <li><Link to="/aboutus">About</Link></li>
          
            <li><Link to="/howitworks">How It Works? <span className="sr-only">(current)</span></Link></li>
           {
            localStorage.getItem('jwtToken')?
            <li><Link to="/login" onClick={this.onLogoutClick.bind(this)}>Logout</Link></li>:
            <li><Link to="/login">Login</Link></li>
             
}
     {
      localStorage.getItem('jwtToken')?
           
            <li><Link to="/dashboard">Dashboard</Link></li>: null
     }
            <li className="lang_select">
              <select>
                <option>EN</option>
                <option>DN</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </section>
</header>
      
    );
  }
}
Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser,clearCurrentDashboard})(withRouter(Header));

