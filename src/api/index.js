import axios from 'axios';
import vuexStore from '@/store';
import router from '@/router';
import jsonToQuery from 'json-to-query-string'


const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  }
});
api.interceptors.request.use(
  config => config,
    error => Promise.reject(error),
);

api.interceptors.response.use(
  async resp => resp,
  async err => {
    if (err.response.data.message === 'Unauthenticated.') {
      await vuexStore.dispatch('auth/logout');
      router.push({ name: 'Login' });
    }
    return Promise.reject(err);
  },
);

const setHeader = (name, value) => api.defaults.headers.common[name] = value;

const get = async (resource, data = false) => data ? await api.get(`${resource}?${jsonToQuery(data)}`) : await api.get(resource);
const post = async (resource, data) => await api.post(resource, data);
const put = async (resource, data) => await api.put(resource, data);
const patch = async (resource, id ,data = null) => await api.patch(`${resource}/${id}`, data);

const index = async (resource) => await api.get(resource);
const show = async (resource, id = null) => await api.get(`${resource}/${id}`);
const store = async (resource, data) => await api.post(resource, data);
const update = async (resource, id, data) => await api.put(`${resource}/${id}`, data);
const destroy = async (resource, id) => await api.delete(`${resource}/${id}`);
export default {
  get,
  post,
  put,
  index,
  show,
  store,
  update,
  destroy,
  patch,
  setHeader,
};
