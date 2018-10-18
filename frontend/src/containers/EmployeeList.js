import React from 'react';
import { connect } from 'react-redux';
import Employee from '../components/Employee';

import { deleteEmployee } from '../actions/authentication';
function EmployeeList({ employees , onDelete }) {
  if(!employees.length) {
    return (
      <div>
        No employees
      </div>
    )
  }
  return (
    <div>
      {employees.map(employee => {
        return (
          <Employee employee={ employee }   onDelete={ onDelete } key={ employee._id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    employees: state.employees
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteEmployee(id));
    }
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList);