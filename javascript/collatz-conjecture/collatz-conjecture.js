export const steps = n => {
  if (n > 0) {
    let count = 0;
    while (n > 1) {
      n % 2 === 0 ? (n /= 2) : (n = n * 3 + 1);
      count++;
    }
    return count;
  } else throw new Error("Only positive numbers are allowed");
};
