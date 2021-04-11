/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arrN = [];
  let arrReg = [];
  const reg = /[0-9A-F]/gi;
  arrReg = n.match(reg);
  if (n.length !== 17) return false;
  if (n[2] + n[5] + n[8] + n[11] + n[14] !== '-----') return false;
  for (let i = 0; i < n.length; i++) {
    if (n[i] !== '-') {
      arrN.push(n[i]);
    }
  }
  if (arrN.length !== arrReg.length) return false;
  for (let i = 0; i < arrN.length; i++) {
    if (arrN[i] !== arrReg[i]) return false;
  }
  return true;
}

module.exports = isMAC48Address;

// let n = '00-1B-63-84-45-E6';
// isMAC48Address(n);
