import { atom } from 'recoil';

export const homeListState = atom({
  key: 'homeListState',
  default: [],
});

export const presentHomeState = atom({
  key: 'presentHomeState',
  default: null,
});
