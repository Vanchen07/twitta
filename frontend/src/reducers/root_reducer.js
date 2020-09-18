import { combineReducers } from 'redux';
import SessionsReducer from './sessions_reducer';
import UsersReducer from './users_reducer';
import BurpsReducer from './burps_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
    session: SessionsReducer,
    users: UsersReducer,
    burps: BurpsReducer,
    errors: ErrorsReducer
});

export default RootReducer;
