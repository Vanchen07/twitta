export const updateUser = (userData) => (dispatch) => {
  APIUtil.updateUser(userData).then((res) => {
    dispatch();
  });
};
