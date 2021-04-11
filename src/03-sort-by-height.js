/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrPos = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arrPos.push(i);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arrPos.length === 0) {
      break;
    } else if (arr[i] === -1) {
      arr.splice(i, 1);
      i--;
    }
  }
  arr.sort((prev, next) => prev - next);
  for (let i = 0; i < arrPos.length; i++) {
    arr.splice(arrPos[i], 0, -1);
  }
  return arr;
}

module.exports = sortByHeight;

// arr = [-1, 150, 190, 170, -1, -1, 160, 180];
// arr = [4, 2, 9, 11, 2, 16];
// sortByHeight(arr);
