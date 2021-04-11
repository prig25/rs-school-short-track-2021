/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  for (let i = 0; i < String(n).length; i++) {
    arr[i] = Number(String(n).slice(0, i) + String(n).slice(i + 1, String(n).length));
  }
  arr.sort((prev, next) => next - prev);
  return arr[0];
}

module.exports = deleteDigit;
