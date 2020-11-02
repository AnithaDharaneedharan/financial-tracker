export const dateFormatter = (date) => {
  const getMonth = date.getUTCMonth() + 1;
  const month = getMonth < 10 ? `0${getMonth}` : getMonth;
  return `${date.getUTCFullYear()}-${month}-${date.getUTCDate()}`;
};
