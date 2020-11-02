export const getData = (key) => {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
};

export const setData = (key, value) => {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
};
