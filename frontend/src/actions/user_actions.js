import { updateUser } from '../util/user_api_utils';

export const updateUser = (userData) => (dispatch) => {
  updateUser(userData).then((res) => {
    dispatch();
  });
};
