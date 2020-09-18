import {
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        user: action.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
      };
    default:
      return state;
  }
}
