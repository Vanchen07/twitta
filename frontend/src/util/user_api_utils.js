import axios from "axios";

export const getUsers = () => {
  return axios.get('/api/users/');
};

export const updateUser = (userData) => {
  return axios.patch(`api/users/${userData.id}`, userData);
};
