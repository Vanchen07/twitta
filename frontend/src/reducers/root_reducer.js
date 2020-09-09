import { combineReducers } from 'redux';
import session from './sessions_reducer';
import BurpsReducer from './burps_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
    session,
    burps: BurpsReducer,
    errors
});

export default RootReducer;
