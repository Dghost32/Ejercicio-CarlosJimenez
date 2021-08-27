import isEven from "./isEven.js";

/**
 *  For any positive integer "n" creates a secuence where the first element is n, and the i-th element is (i-1)*2 if (i-1) is even and 3(i-1) + 1 if (i-1) is odd.
 *
 * @param {number} n
 * @param {number} count
 * @returns The secuence lenght
 */
let getSecuenceLenght = (n, count = 0) => {
  if (n < 1) throw new Error("n must be at least 1");

  if (n == 1) return count + 1;
  if (isEven(n)) return getSecuenceLenght(n / 2, count + 1);
  return getSecuenceLenght(n * 3 + 1, count + 1);
};

export default getSecuenceLenght;
