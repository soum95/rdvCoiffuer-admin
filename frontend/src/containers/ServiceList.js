import React from 'react';
import { connect } from 'react-redux';
import Service from '../components/Service';
import { deleteService } from '../actions/authentication';

function ServiceList({ services , onDelete }) {
  if(!services.length) {
    return (
      <div>
        No Services
      </div>
    )
  }
  return (
    <div>
    {services.map(service => {
      return (
        <Service service={ service }  onDelete={ onDelete } key={ service._id } />
      );
    })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    services: state.services
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteService(id));
    }
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceList);
 