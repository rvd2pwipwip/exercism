export const isLeap = year => {
  return !(year % 4 || !(year % 100 || !(year % 400)));
};
