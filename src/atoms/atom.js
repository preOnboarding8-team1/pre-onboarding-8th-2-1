import { atom } from 'recoil';
import { getLocalStorage } from '../utils/saveTask';

export const kanbanListState = atom({
  key: 'kanbanState',
  default: getLocalStorage() || [],
});

export const managerSelect = atom({
  key: 'managerSelect',
  default: '',
});

export const stateDropdown = atom({
  key: 'stateDropdown',
  default: '',
});
