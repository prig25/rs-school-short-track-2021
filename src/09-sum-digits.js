/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // let arr = [];
  let sum = 0;
  // for (let i = 0; i < String(n).length; i++) {
  //   arr[i] = Number(String(n).slice(i, i + 1));
  // }
  const arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  if (sum > 9) {
    return getSumOfDigits(sum);
  }
  return sum;
}

module.exports = getSumOfDigits;

// let n = 100;
// getSumOfDigits(n);
