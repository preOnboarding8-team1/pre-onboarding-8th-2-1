import { atom } from 'recoil';
import { getLocalStorage } from '../utils/saveTask';

export const kanbanListState = atom({
  key: 'kanbanState',
  default: getLocalStorage() || [],
});
