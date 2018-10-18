import React from 'react';
import {Link} from 'react-router-dom';
import CreateService from '../containers/CreateService';
import ServiceList from '../containers/ServiceList';
import Header from '../components/Header';
const stylesApp = {
  marginTop: 40,
  marginLeft:300
}
class ServiceSection extends React.Component {
    render() {
        return (
          <div style={{ width:'1200px'}}>
 
 <Header/>
          <div className="container">
            <div className="row" style={ stylesApp }>
              <div className="col-md-6">
             
                <CreateService/>
              </div>
              <div className="col-md-6">
             
                <ServiceList/>
              </div>
            </div>
          </div>
          </div>
        );
      }
    }
  export default ServiceSection ;