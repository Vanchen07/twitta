import {
  RECEIVE_BURPS,
  RECEIVE_BURP,
  REMOVE_BURP,
} from '../actions/burp_actions';

const BurpsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_BURPS:
        return Object.assign(nextState, action.burps.data)
      case RECEIVE_BURP: 
        nextState[action.burp._id] = action.burp;
        return nextState
      case REMOVE_BURP:
        delete nextState[action.burp._id]
        return nextState;
      default:
        return state;
    }
};

export default BurpsReducer;