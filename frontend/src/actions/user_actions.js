import { updateUser, getUsers } from '../util/user_api_utils';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export const fetchUsers = () => (dispatch) => (
  getUsers()
    .then(users => dispatch(receiveUsers(users.data)))
    .catch(err => console.log(err))
);


export const modifyUser = (userData) => (dispatch) => (
  updateUser(userData)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .catch(err => console.log(err) )
);
