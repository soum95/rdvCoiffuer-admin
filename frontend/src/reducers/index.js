import { combineReducers } from 'redux';
import services from './serviceReducer';
import employees from './employeeReducer';
 import errorReducer from './errorReducer';
import authReducer from './authReducer';
export default combineReducers({
    services: services,
    employees:employees,
     errors: errorReducer,
     auth: authReducer
});