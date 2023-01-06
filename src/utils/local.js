const ISSUES = 'issues';
export const localGetData = (key = ISSUES) => JSON.parse(localStorage.getItem(key));
export const localSetData = (data, key = ISSUES) => localStorage.setItem(key, JSON.stringify(data));
