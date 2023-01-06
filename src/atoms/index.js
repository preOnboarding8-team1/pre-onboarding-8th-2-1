import { atom, selectorFamily } from 'recoil';

export const issuesState = atom({
  key: 'issuesState',
  default: JSON.parse(localStorage.getItem('issues')) || [],
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
