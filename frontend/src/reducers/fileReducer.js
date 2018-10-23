import { ADD_FILE } from '../actions/types';

export default function fileReducer(state = [], action) {
  switch (action.type) {
    case ADD_FILE:
    return [...state, action.payload];
    default:
      return state;
  }
}