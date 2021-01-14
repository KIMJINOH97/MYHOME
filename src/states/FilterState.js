import { atom } from 'recoil';

export const FilterState = atom({
  key: 'FilterState',
  default: {
    room_type: '',
    deposit: 0,
    monthly_rent: 0,
    management_fee: 0,
  },
});

export const FilterListState = atom({
  key: 'FilterListState',
  default: [],
});
