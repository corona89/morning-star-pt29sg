import axios from "axios";

const apiUrl = "http://localhost:3001";

export const codes = {
  getAll: (params) => {
    return axios.get(`${apiUrl}/codes/${id}`, params).then((res) => {
      console.log("res.headers:", res.headers);
      return {
        totalCount: res.headers["x-total-count"],
        data: res.data,
        currentPage: params._page,
        rowCount: params._limit,
        pageCount: params.pageCount,
      };
    });
  },
  get: (id) => {
    return axios.get(`${apiUrl}/codes/${id}`).then((res) => res.data);
  },
  post: (params) => {
    return axios.post(`${apiUrl}/codes/`, params).then((res) => res.data);
  },
  put: (params) => {
    return axios
      .put(`${apiUrl}/codes/${params.id}`, params)
      .then((res) => res.data);
  },
  delete: (id) => {
    return axios.delete(`${apiUrl}/codes/${id}`).then((res) => res.data);
  },
};
