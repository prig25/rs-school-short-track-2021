/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = [];
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    arr.push(new Array(matrix[i].length).fill(0)); // создаем матрицу
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0 && j === 0) {
        if (matrix[i][j + 1] === true) {
          count++;
        }
        if (matrix[i + 1][j + 1] === true) {
          count++;
        }
        if (matrix[i + 1][j] === true) {
          count++;
        }
      } else if (i === 0 && j > 0 && j < matrix[i].length - 1) {
        if (matrix[i][j - 1] === true) {
          count++;
        }
        if (matrix[i + 1][j - 1] === true) {
          count++;
        }
        if (matrix[i + 1][j] === true) {
          count++;
        }
        if (matrix[i + 1][j + 1] === true) {
          count++;
        }
        if (matrix[i][j + 1] === true) {
          count++;
        }
      } else if (i === 0 && j === matrix[i].length - 1) {
        if (matrix[i][j - 1] === true) {
          count++;
        }
        if (matrix[i + 1][j - 1] === true) {
          count++;
        }
        if (matrix[i + 1][j] === true) {
          count++;
        }
      } else if (i > 0 && i < matrix.length - 1 && j === matrix[i].length - 1) {
        if (matrix[i - 1][j] === true) {
          count++;
        }
        if (matrix[i - 1][j - 1] === true) {
          count++;
        }
        if (matrix[i][j - 1] === true) {
          count++;
        }
        if (matrix[i + 1][j - 1] === true) {
          count++;
        }
        if (matrix[i + 1][j] === true) {
          count++;
        }
      } else if (i === matrix.length - 1 && j === matrix[i].length - 1) {
        if (matrix[i - 1][j] === true) {
          count++;
        }
        if (matrix[i - 1][j - 1] === true) {
          count++;
        }
        if (matrix[i][j - 1] === true) {
          count++;
        }
      } else if (i === matrix.length - 1 && j > 0 && j < matrix[i].length - 1) {
        if (matrix[i][j + 1] === true) {
          count++;
        }
        if (matrix[i - 1][j + 1] === true) {
          count++;
        }
        if (matrix[i - 1][j] === true) {
          count++;
        }
        if (matrix[i - 1][j - 1] === true) {
          count++;
        }
        if (matrix[i][j - 1] === true) {
          count++;
        }
      } else if (i === matrix.length - 1 && j === 0) {
        if (matrix[i][j + 1] === true) {
          count++;
        }
        if (matrix[i - 1][j + 1] === true) {
          count++;
        }
        if (matrix[i - 1][j] === true) {
          count++;
        }
      } else if (i > 0 && i < matrix.length - 1 && j === 0) {
        if (matrix[i + 1][j] === true) {
          count++;
        }
        if (matrix[i + 1][j + 1] === true) {
          count++;
        }
        if (matrix[i][j + 1] === true) {
          count++;
        }
        if (matrix[i - 1][j + 1] === true) {
          count++;
        }
        if (matrix[i - 1][j] === true) {
          count++;
        }
      } else {
        if (matrix[i][j + 1] === true) {
          count++;
        }
        if (matrix[i + 1][j + 1] === true) {
          count++;
        }
        if (matrix[i + 1][j] === true) {
          count++;
        }
        if (matrix[i + 1][j - 1] === true) {
          count++;
        }
        if (matrix[i][j - 1] === true) {
          count++;
        }
        if (matrix[i - 1][j - 1] === true) {
          count++;
        }
        if (matrix[i - 1][j] === true) {
          count++;
        }
        if (matrix[i - 1][j + 1] === true) {
          count++;
        }
      }
      arr[i][j] = count;
      count = 0;
    }
  }
  return arr;
}

module.exports = minesweeper;

// const matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ];
// minesweeper(matrix);
