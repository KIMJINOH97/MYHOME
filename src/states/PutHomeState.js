import { atom } from 'recoil';

export const putHomeState = atom({
  key: 'putHomeState',
  default: {
    room_type: '',
    address: '주소지를 입력해주세요.',
    zip_code: '우편번호',
    address_detail: '',
    deposit: null,
    monthly_rent: null,
    management_fee: null,
    total_floor: null,
    floor: null,
    structure: '일반',
    space: null,
    completion_year: null,
    elevator: false,
    bed: false,
    desk: false,
    refrigerator: false,
    induction: false,
    air_conditioner: false,
    washer: false,
    short_term: false,
    heating: false,
    occupancy_date: '',
    introduction: '',
    detail: '',
    distance: '이대역 5분거리',
    activation: true,
    host_name: '',
    host_phone: '',
  },
});

export const addressState = atom({
  key: 'addressState',
  default: '주소지를 입력해주세요.',
});

export const postNumberState = atom({
  key: 'postNumberState',
  default: '우편번호',
});

export const detailAddressState = atom({
  key: 'detailAddressState',
  default: '',
});
