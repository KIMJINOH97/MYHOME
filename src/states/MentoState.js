import { atom } from 'recoil';

export const mentoState = atom({
  key: 'mentoState',
  default: [],
});

export const presentMentoState = atom({
  key: 'presentMentoState',
  defautl: {},
});
