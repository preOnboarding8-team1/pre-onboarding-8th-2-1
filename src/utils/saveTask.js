export const addLocalStorage = (kanbanList) => {
  localStorage.setItem('kanbanList', JSON.stringify(kanbanList));
};

export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('kanbanList'));
};
