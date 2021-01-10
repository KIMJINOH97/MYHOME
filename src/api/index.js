import axios from 'axios';
import initAuthApi from './initAuthApi';
import initHomeApi from './initHomeApi';
import initMentoApi from './initMentoApi';

export const instance = axios.create({
  baseURL: 'https://www.myhome-go.com',
});

export const authApi = initAuthApi(instance);
export const homeApi = initHomeApi(instance);
export const mentoApi = initMentoApi(instance);
