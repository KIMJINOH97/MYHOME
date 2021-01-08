import axios from 'axios';
import initAuthApi from './initAuthApi';

export const instance = axios.create({
  baseURL: 'http://ec2-13-209-153-100.ap-northeast-2.compute.amazonaws.com',
});

export const authApi = initAuthApi(instance);
