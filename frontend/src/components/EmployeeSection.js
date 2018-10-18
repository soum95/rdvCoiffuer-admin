import React from 'react';
import {Link} from 'react-router-dom';
import AddEmployee from '../containers/AddEmployee';
import EmployeeList from '../containers/EmployeeList';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
const stylesApp = {
  marginTop: 40,
  marginLeft:300
}
class EmployeeSection extends React.Component {
  
    render() {
        return (
          <div style={{ width:'1200px'}}>
 
 <Header/>
          <div className="container">
            <div className="row" style={ stylesApp }>
              <div className="col-md-6">
             
                <AddEmployee/>
              </div>
              <div className="col-md-6">
             
                <EmployeeList/>
              </div>
            </div>
          </div>
          </div>
        );
      }
    }
    export default EmployeeSection;