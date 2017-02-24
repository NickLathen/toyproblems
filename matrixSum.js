//<!-- Matrix Sum -> find the max sum where each element is the only one in its row and column

//  7      53    183    439   863x
// 497    383x    563    79    973
// 287    63     343x    169   583
// 627    343    773    959x   943
//767x    473    103    699   303
// -->

function swapElementsInArray(array, index1, index2) {
  const arrayCopy = JSON.parse(JSON.stringify(array));
  arrayCopy[index1] = array[index2];
  arrayCopy[index2] = array[index1];
  return arrayCopy;
}

function sumOfSelection (selection, board) {
  var sum = 0;
  selection.forEach(function(col, row) {
    sum += board[row][col];
  });
  return sum;
}

function findMatrixSum(board) {
  const n = board.length;
  let colSelection = [...Array(n).keys()];
  var sum = sumOfSelection(colSelection, board);
  let noSwaps = false;
  while(!noSwaps) {
    noSwaps = true;
    for (let primaryRow = 0; primaryRow < n - 1 && noSwaps; primaryRow++) {
      for (let secondaryRow = primaryRow + 1; secondaryRow < n && noSwaps; secondaryRow++) {
        const currSumOfRows = board[primaryRow][colSelection[primaryRow]] + board[secondaryRow][colSelection[secondaryRow]];
        const swapSumOfRows = board[primaryRow][colSelection[secondaryRow]] + board[secondaryRow][colSelection[primaryRow]];
        const swapDifference = swapSumOfRows - currSumOfRows;
        if (swapDifference > 0) {
          noSwaps = false;
          colSelection = swapElementsInArray(colSelection, primaryRow, secondaryRow);
          sum += swapDifference;
        }
        for (let tertiaryRow = secondaryRow + 1; tertiaryRow < n && noSwaps; tertiaryRow++) {
          const currSumOfThreeRows = board[primaryRow][colSelection[primaryRow]] + board[secondaryRow][colSelection[secondaryRow]] + board[tertiaryRow][colSelection[tertiaryRow]];
          const oneShiftSumOfRows = board[primaryRow][colSelection[tertiaryRow]] + board[secondaryRow][colSelection[primaryRow]] + board[tertiaryRow][colSelection[secondaryRow]];
          const twoShiftSumOfRows = board[primaryRow][colSelection[secondaryRow]] + board[secondaryRow][colSelection[tertiaryRow]] + board[tertiaryRow][colSelection[primaryRow]];
          const oneShiftDifference = oneShiftSumOfRows - currSumOfThreeRows;
          const twoShiftDifference = twoShiftSumOfRows - currSumOfThreeRows;
          if (oneShiftDifference > 0) {
            noSwaps = false;
            colSelection = swapElementsInArray(colSelection, primaryRow, tertiaryRow);
            colSelection = swapElementsInArray(colSelection, secondaryRow, tertiaryRow);
            sum += oneShiftDifference;
          } else if(twoShiftDifference > 0) {
            noSwaps = false;
            colSelection = swapElementsInArray(colSelection, primaryRow, secondaryRow);
            colSelection = swapElementsInArray(colSelection, secondaryRow, tertiaryRow);
            sum += twoShiftDifference;
          }
        }
      }
    }
  }
  return sum;
};


 
 
 var board =   [[7,  53, 183, 439, 863],
[497, 383, 563,  79, 973],
[287,  63, 343, 169, 583],
[627, 343, 773, 959, 943],
[767, 473, 103, 699, 303]]
 
var answerBoard1 = 3315

var board2 = [[7,  53, 183, 439, 863, 497, 383, 563,  79, 973, 287,  63, 343, 169, 583],[627, 343, 773, 959, 943, 767, 473, 103, 699, 303, 957, 703, 583, 639, 913],
[447, 283, 463,  29,  23, 487, 463, 993, 119, 883, 327, 493, 423, 159, 743],
[217, 623,   3, 399, 853, 407, 103, 983,  89, 463, 290, 516, 212, 462, 350],
[960, 376, 682, 962, 300, 780, 486, 502, 912, 800, 250, 346, 172, 812, 350],
[870, 456, 192, 162, 593, 473, 915,  45, 989, 873, 823, 965, 425, 329, 803],
[973, 965, 905, 919, 133, 673, 665, 235, 509, 613, 673, 815, 165, 992, 326],
[322, 148, 972, 962, 286, 255, 941, 541, 265, 323, 925, 281, 601,  95, 973],
[445, 721,  11, 525, 473,  65, 511, 164, 138, 672,  18, 428, 154, 448, 848],
[414, 456, 310, 312, 798, 104, 566, 520, 302, 248, 694, 976, 430, 392, 198],
[184, 829, 373, 181, 631, 101, 969, 613, 840, 740, 778, 458, 284, 760, 390],
[821, 461, 843, 513,  17, 901, 711, 993, 293, 157, 274,  94, 192, 156, 574],
[34, 124,   4, 878, 450, 476, 712, 914, 838, 669, 875, 299, 823, 329, 699],
[815, 559, 813, 459, 522, 788, 168, 586, 966, 232, 308, 833, 251, 631, 107],
[813, 883, 451, 509, 615,  77, 281, 613, 459, 205, 380, 274, 302,  35, 805]]

const t0 = performance.now();
for (var i = 0; i < 100; i++) {
  findMatrixSum(board2);
}

console.log(t1-t0);