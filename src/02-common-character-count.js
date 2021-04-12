/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  const arr = s1.split('');
  for (let i = 0; i < s2.length; i++) {
    if (arr.includes(s2[i])) {
      sum++;
      arr.splice(arr.indexOf(s2[i]), 1);
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
// const s1 = 'aabcc';
// const s2 = 'adcaa';
// const s1 = 'abca';
// const s2 = 'xyzbac';
// getCommonCharacterCount(s1, s2);
