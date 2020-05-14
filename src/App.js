import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import AboutUs from './components/about-us/About-Us';
import ContactUs from './components/contact-us/Contact-Us';
import LoginAndRegister from './components/login-and-register/Login-and-Register';
import Assist from './components/assist/Assist';
import Sell from './components/sell/Sell';
import Purchase from './components/purchase/Purchase';
import Contact from './components/contact/Contact';
import './App.css';

class App extends Component {
  state = {
    loggedInMember:undefined
  }

  updateLoginStatus = () => {
    this.setState({ loggedInMember: localStorage.getItem("loggedInMember") })
    console.log("Working?", localStorage.getItem("loggedInMember"));
    // this.props.history.push('/');
  }

  logout() {
    this.setState({ loggedInMember: undefined });
  }

  render() {
    return (
      <div>
        <Header {...this.state} logout={() => this.logout()} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/aboutus' component={AboutUs} />
            <Route exact path='/contactus' component={ContactUs} />
            <Route exact path='/signin' component={() => <LoginAndRegister {...this.props} updateStatus={() => this.updateLoginStatus()}/>} />
            <Route exact path='/assist' component={Assist} />
            <Route exact path='/sell' component={Sell} />
            <Route exact path='/purchase' component={Purchase} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
      </div>
    );
  }
}

export default App;