import { connect } from 'react-redux';
import { addEmployee } from '../actions/authentication';
import NewEmployee from '../components/NewEmployee';

const mapDispatchToProps = dispatch => {
  return {
    onAddEmployee: employee => {
      dispatch(addEmployee(employee));}
    // },
    // onAddFile: file=> {
    //   dispatch(addFile(file));
    // }
};};

export default connect(
  null,
  mapDispatchToProps
)(NewEmployee);