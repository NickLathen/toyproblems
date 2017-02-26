// find the minimum number of swaps to sort an array
// example  [2,1,4,3,5] = 2 swaps

function minSwaps(unsortedArray) {
  const sortedArray = JSON.parse(JSON.stringify(unsortedArray)).sort((a, b) => a - b);
  const swapIndexes = [];
  var swaps = 0;
  unsortedArray.forEach(function(value, index) {
    if (swapIndexes.indexOf(index) === -1) {
      var swapIndex = sortedArray.indexOf(value);
      while (swapIndex !== index) {
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
describe('minSwaps', function() {
  it('should return 2 for input [2,1,4,3,5]', function() {
    assert.equal(minSwaps([2,1,4,3,5]), 2);
  });
  it('should return 1 for input [3,2,1]', function() {
    assert.equal(minSwaps([3,2,1]), 1);
  });
  it('should return 3 for input [5,4,3,2,1]', function() {
    assert.equal(minSwaps([5,4,2,3,1]), 3);
  })
});