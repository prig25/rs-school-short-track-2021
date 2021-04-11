/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
// function renameFiles(/* names */) {
//   throw new Error('Not implemented');
// }

function renameFiles(names) {
  let n = 1;
  const arrN = names;
  const arr = [];
  if (arrN.length === 0) return [];
  for (let i = 1; i < arrN.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arrN[i] === arrN[j]) {
        if (!arr[j]) {
          arrN[i] = `${arrN[i]}(${n})`;
          arr[j] = n;
        } else {
          n++;
          arrN[i] = `${arrN[i]}(${n})`;
          arr[j] = n;
        }
      }
    }
  }
  return names;
}

module.exports = renameFiles;

// let names = ["file", "file", "image", "file(1)", "file"];
// renameFiles(names);
