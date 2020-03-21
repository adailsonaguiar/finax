export function setTwoDigits(month) {
  return month < 10 ? `0${month}` : `${month}`;
}
