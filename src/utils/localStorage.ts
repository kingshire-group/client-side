export const setToLocalStorage = (value: any) => {
  localStorage.setItem('token', value);
};

export const getFromLocalStorage = () => {
  return localStorage.getItem('token');
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
