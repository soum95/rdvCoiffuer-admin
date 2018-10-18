import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import EmployeeSection from './components/EmployeeSection';
import ServiceSection from './components/ServiceSection';
import { fetchAllServices } from './actions/authentication';
import { fetchAllEmployees } from './actions/authentication';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
const stylesApp = {
  marginTop: 40
}
store.dispatch(fetchAllServices());
store.dispatch(fetchAllEmployees());

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}



class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
            
                <Route exact path="/" component={ Login } />
                <div className="container">
                   
                <Route exact path="/Home" component={Header} />
               
                <Route exact path="/services" component={ServiceSection} />
                <Route exact path="/employees" component={EmployeeSection} />
                <Route exact path="/login" component={Login} />
                </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;