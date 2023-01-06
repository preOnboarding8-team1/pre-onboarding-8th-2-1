import { atom, selectorFamily } from 'recoil';

import { localGetData } from '../utils/local';

export const issuesState = atom({
  key: 'issuesState',
  default: localGetData() || [],
});

export const assigneesState = atom({
  key: 'assigneesState',
  default: [],
});

export const filteredIssueState = selectorFamily({
  key: 'filteredIssueState',
  get:
    (status) =>
    ({ get }) => {
      const issuesStateSnapShot = get(issuesState);
      return issuesStateSnapShot.filter((v) => v.status === status);
    },
});
