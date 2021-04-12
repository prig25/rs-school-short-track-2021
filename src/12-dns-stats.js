/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
// function getDNSStats(domains) {
//   const obj = {};
//   let str = '';
//   let pos = null;
//   let qlt = 0;
//   for (let j = domains[0].length - 1; j >= 0; j--) {
//     if (domains[0][j] === '.') {
//       pos = j;
//       str += domains[0].slice(j,domains[0].length);
//       break;
//     }
//   }
//   for (let i = 0; i < domains.length; i++) {
//     if (domains[i].indexOf(str) !== -1) {
//       qlt++;
//     }
//   }
//   obj[str] = qlt;
//   return str;
// }

function getDNSStats(domains) {
  const obj = {};
  let str = '';
  let str2 = '';
  let pos = null;
  let qlt = 0;
  for (let i = 0; i < domains.length; i++) {
    let end = domains[i].length;
    for (let j = domains[i].length - 1; j >= 0; j--) {
      if (domains[i][j] === '.') {
        pos = j;
        str += domains[i].slice(j, end);
        str2 = domains[i].slice(j + 1, domains[i].length);
        for (let k = 0; k < domains.length; k++) {
          if (domains[k].indexOf(str2) !== -1) {
            qlt++;
          }
        }
        obj[str] = qlt;
        end = pos;
        qlt = 0;
      } else if (j === 0) {
        pos = 0;
        str += `.${domains[i].slice(pos, end)}`;
        str2 = domains[i].slice(pos, domains[i].length);
        for (let k = 0; k < domains.length; k++) {
          if (domains[k].indexOf(str2) !== -1) {
            qlt++;
          }
        }
        obj[str] = qlt;
        end = pos;
        qlt = 0;
        str = '';
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;

// const domains = ['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'];
// getDNSStats(domains);
