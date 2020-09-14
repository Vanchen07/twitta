import { RECEIVE_BURPS, RECEIVE_BURP, RECEIVE_USER_BURPS, RECEIVE_NEW_BURP } from '../actions/burp_actions';

const BurpsReducer = (state = { all: {}, user: [], new: undefined, old: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_BURPS:
        newState.all = action.burps.data; 
        return newState;
      case RECEIVE_USER_BURPS:
        newState.user = action.burps.data;
        return newState;
      case RECEIVE_NEW_BURP:
        newState.new = action.burp.data;
        return newState;
      case RECEIVE_BURP: 
        newState.old = action.burp.data;
        return newState;
      default:
        return state;
    }
};

export default BurpsReducer;