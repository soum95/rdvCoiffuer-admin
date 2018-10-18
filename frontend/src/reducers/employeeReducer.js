import { FETCH_EMPLOYEE,DELETE_EMPLOYEE,ADD_EMPLOYEE } from '../actions/types';

export default function employeeReducer(state = [], action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
    return [...state, action.payload];
  case DELETE_EMPLOYEE:
    return state.filter(employee => employee._id !== action.payload.id);
    case FETCH_EMPLOYEE:
      return action.employees;
    default:
      return state;
  }
}