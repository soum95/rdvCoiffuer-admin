import { connect } from 'react-redux';
import { createService } from '../actions/authentication';
import NewService from '../components/NewService';

const mapDispatchToProps = dispatch => {
  return {
    onAddService: service => {
      dispatch(createService(service));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewService);