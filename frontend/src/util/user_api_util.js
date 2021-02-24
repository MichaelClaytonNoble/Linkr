
import axios from 'axios';


export const filterUsersBy = (filter, value) => {
  return axios.get(`api/query/users/${filter}/${value}`)
};

export const getCurrentUser = (myId) => {
  return axios.get(`api/users/self/${myId}`)
};