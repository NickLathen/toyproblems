// find the minimum number of swaps to sort an array
// example  [2,1,4,3,5] = 2 swaps

function minSwaps(unsortedArray) {
  const sortedArray = JSON.parse(JSON.stringify(unsortedArray)).sort((a, b) => a - b);
  const swapIndexes = [];
  var swaps = 0;
  unsortedArray.forEach(function(value, index) {
    if (swapIndexes.indexOf(index) === -1) {
      var swapIndex = sortedArray.indexOf(value);
      while (swapIndex !== index && swapIndexes.indexOf(swapIndex) === -1) {
        swaps++;
        swapIndexes.push(swapIndex);
        swapIndex = sortedArray.indexOf(unsortedArray[swapIndex]);
      }
    }
  });
  return swaps;
}



//tests
var assert = require('assert');
const answerTuples = [ //[input, answer]
  [[2, 1, 4, 3, 5], 2],
  [[3, 2, 1], 1],
  [[5, 4, 2, 3, 1], 3],
  [[2,1], 1],
  [[3, 3, 2, 1], 2],
  [[1, 1, 2, 3], 0]
]
describe('minSwaps', function() {
  answerTuples.forEach(tuple => {
    const input = tuple[0];
    const answer = tuple[1];
    it(`should return ${answer} for input ${input}`, function() {
      assert.equal(minSwaps(input), answer);
    });
  })
});