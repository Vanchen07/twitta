import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS } from '../actions/user_actions';


export default function (state = {}, action) {
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_USERS:
      return Object.assign(nextState, action.users);
    case RECEIVE_CURRENT_USER:
      // debugger
      nextState[action.currentUser.data._id] = action.currentUser
      return nextState;
    default:
      return state;
  }
}
