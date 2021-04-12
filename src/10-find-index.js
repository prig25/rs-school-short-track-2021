/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
// function findIndex(array, value) {
//   while (Math.log(array.length) < 10) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === value) return i;
//     }
//   }
//   return false;
// }

// function findIndex(array, value) {
//   while (Math.log(array.length) < 10) {
//     if (value >= array[0] && value <= array[array.length - 1]) {
//       if (value >= array[0] && value < array[Math.floor(array.length / 2)]) {
//         for (let i = 0; i < Math.floor(array.length / 2); i++) {
//           if (value === array[i]) return i;
//         }
//       }
//       if (value >= array[Math.floor(array.length / 2)] && value <= array[array.length - 1]) {
//         for (let i = Math.floor(array.length / 2); i < array.length; i++) {
//           if (value === array[i]) return i;
//         }
//       }
//     }
//   }
//   return false;
// }

function findIndex(array, value) {
  let startPos = 0;
  let finishPos = array.length - 1;
  let mediumPos = null;
  while (finishPos - startPos > 1) {
    mediumPos = Math.floor(((finishPos - startPos) / 2) + startPos);
    if (value === array[mediumPos]) return mediumPos;
    if (value > array[mediumPos]) {
      startPos = mediumPos;
    }
    if (value < array[mediumPos]) {
      finishPos = mediumPos;
    }
  }
  if (value === array[startPos]) return startPos;
  if (value === array[finishPos]) return finishPos;
  return false;
}

module.exports = findIndex;
// [1, 2, 3, 4, 5],
// 5),
// 4)
// const array = [1, 2, 3];
// const value = 1;
