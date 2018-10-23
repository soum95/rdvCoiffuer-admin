import { combineReducers } from 'redux';
import services from './serviceReducer';
import employees from './employeeReducer';
import files from './fileReducer';
 import errorReducer from './errorReducer';
import authReducer from './authReducer';
export default combineReducers({
    services: services,
    employees:employees,
    // files:files,
     errors: errorReducer,
     auth: authReducer
});