export function setTwoDigits(month) {
  return month < 10 ? `0${month}` : `${month}`;
}

export const getDate = () => {
  return new Promise((resolve, reject) => {
    const date = new Date();
    const day = setTwoDigits(date.getDate());
    const month = setTwoDigits(date.getMonth() + 1);
    resolve({day: `${day}`, month: `${month}`, year: `${date.getFullYear()}`});
  });
};
