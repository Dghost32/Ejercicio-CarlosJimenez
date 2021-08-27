import getSecuenceLenght from "./getSecuenceLenght.js";

/**
 * Returns the second longest secuence and the sum of all secuences from "from" to "to"
 *
 * @param {number} to 0<to<10000001
 * @param {number} from optional, default=1
 * @returns {Object} {secondLongest, sum}
 */
let getSecondLongestAndSum = (to, from = 1) => {
  if (to > 10000000) throw new Error("to param must be at most 10000000");
  if (to < from) throw new Error("Invalid function parameters");

  let longest = 0;
  let s_longest = 0;
  let acc = 0;

  for (let i = from; i <= to; i++) {
    let result = getSecuenceLenght(i);
    acc += result;
    if (result > longest) {
      s_longest = longest;
      longest = result;
    } else if (result > s_longest) {
      s_longest = result;
    }
  }

  return { secondLongest: s_longest, sum: acc };
};

export default getSecondLongestAndSum;
