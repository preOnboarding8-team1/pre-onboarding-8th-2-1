import { atom, selectorFamily } from 'recoil';

export const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const saveValue = localStorage.getItem(key);

    if (saveValue != null) {
      setSelf(JSON.parse(saveValue));
    }

    onSet((newValue, _, isReset) => {
      isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const issuesState = atom({
  key: 'issuesState',
  default: [],
  effects: [localStorageEffect('issues')],
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
