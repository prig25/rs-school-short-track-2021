/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
// function encodeLine(str) {
//   let count = 0;
//   let strEnc = '';
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (strEnc.indexOf(str[i]) !== -1) break;
//       if (str[j] === str[i]) {
//         count++;
//       }
//     }
//     if (strEnc.indexOf(str[i]) === -1) {
//       if (count > 1) {
//         strEnc += `${count}${str[i]}`;
//         count = 0;
//       } else {
//         strEnc += str[i];
//         count = 0;
//       }
//     }
//   }
//   return strEnc;
// }

function encodeLine(str) {
  let count = 1;
  let strEnc = '';
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      if (strEnc.indexOf(str[i]) !== -1) break;
      if (str[j] === str[i] && str[j]) {
        count++;
      } else if (strEnc.indexOf(str[i]) === -1) {
        if (count > 1) {
          strEnc += `${count}${str[i]}`;
          count = 1;
          break;
        } else {
          strEnc += str[i];
          count = 1;
          break;
        }
      }
    }
  }
  if (str[str.length - 1] !== str[str.length - 2]) {
    strEnc += str[str.length - 1];
  }
  return strEnc;
}

module.exports = encodeLine;

// const str = 'aaaatttt'; // 4a4t
// const str = 'abbcca'; // a2b2ca
// encodeLine(str);
