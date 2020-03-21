export function monthSetTwoDigits(month) {
  if (month < 10) {
    return `0${month}`;
  }
  return `${month}`;
}
