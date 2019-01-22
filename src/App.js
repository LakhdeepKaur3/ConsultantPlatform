import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import store from  './store'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import './App.css'
import './index.css'
import './responsive.css'
import Header from './components/Header/header'
import Search from './components/Search/search'
import Footer from './components/Footer/footer'
import { UserForm } from './pages/SignUp/UserForm';
import TrasactionHistory from './pages/TransactionHistory'
import Dashboard from './pages/Dashboard'
import AboutUs from './pages/AboutUs';
import HowItWorks from './pages/HowItWorks'
import { Provider } from 'react-redux';
import PrivateRoute from './common/PrivateRoute';
import './fonts/fonts.css';
import SearchList from './pages/SearchList';
import AdvertiserList from './components/AdvertiserList/advertiserlist'
class App extends Component {
  
  render() {
    console.log('app props',this.props)
    return (
    <Provider store={store}>      
      <Router>
      <div className="App">
      <Header />
      <Search/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={UserForm} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/howitworks" component={HowItWorks} />
        <Route exact path="/transaction" component={TrasactionHistory} />
        <Route exact path="/users" component={SearchList}/>
        <Route exact path="/advertiserlist" component={AdvertiserList}/>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
        
        <Footer/>
      </div>
      </Router>
      </Provider>
   
    );
  }
}

export default App;
