import React, { Component } from 'react';
import '../index.css'
import logo from'../img/logo.png'

class Header extends Component {
  render() {
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
          <a className="navbar-brand" href="#"><img src={logo} alt="logo"/></a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="../navbar/">About</a></li>
            <li><a href="./">How It Works? <span className="sr-only">(current)</span></a></li>
            <li><a href="../navbar-fixed-top/">Login</a></li>
            <li className="lang_select">
              <select>
                <option>EN</option>
                <option>SP</option>
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

export default Header;