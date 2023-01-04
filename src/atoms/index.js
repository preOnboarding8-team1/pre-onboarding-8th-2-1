import { atom } from 'recoil';

export const issuesState = atom({
  key: 'issuesState',
  default: JSON.parse(localStorage.getItem('issues')) || [],
});
