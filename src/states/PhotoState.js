import { atom } from 'recoil';

export const permissionCameraState = atom({
  key: 'permissionCameraState',
  default: false,
});

export const photoState = atom({
  key: 'photoState',
  default: [],
});

export const formPhotoState = atom({
  key: 'formPhotoState',
  default: null,
});
