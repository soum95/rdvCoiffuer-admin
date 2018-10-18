import { FETCH_SERVICE, ADD_SERVICE , DELETE_SERVICE} from '../actions/types';

export default function ServiceReducer(state = [], action) {
  switch (action.type) {
    case ADD_SERVICE:
      return [...state, action.payload];
    case DELETE_SERVICE:
      return state.filter(service => service._id !== action.payload.id);
      case FETCH_SERVICE:
      return action.services;
    default:
      return state;
  }
}

