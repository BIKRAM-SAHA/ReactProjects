export const toF = (temp) => {
  temp = (temp * 9) / 5 + 32;
  const rounded = Math.round(temp * 1000) / 1000;
  return rounded.toString();
};
export const toC = (temp) => {
  temp = ((temp - 32) * 5) / 9;
  const rounded = Math.round(temp * 1000) / 1000;
  return rounded.toString();
};
