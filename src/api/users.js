import axios from "axios";

const apiUrl = "http://localhost:3001";

export const users = {
  get: (id) => {
    return axios.get(`${apiUrl}/users/${id}`);
  },
};
