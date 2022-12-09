/*
You are given an array of integers. Your task is to find the index of a number in the array such that the sum of the numbers to its left equals the sum of the numbers to its right.
## Example 1
Input: [1,2,3,4,2,3,1]
Output: 3

## Example 2
Input: [1,100,50,-1,1,1]
Output: 1
*/
function findIndexForSumBalance(arr) {
  let length = arr.length; //Get length only once to improve performance

  //Loop all input items
  for (var i = 0; i < length; i++) {
    //Skip first item as there is no real left side
    if (i > 0) {
      //Slice and summarize left and right slices of the input list and check if they are equal
      if (arraySum(arr.slice(0, i)) === arraySum(arr.slice(i + 1, length))) {
        document.write("Found index: " + i + "<br/>");
        //Break code execution
        break;
      }
    }
  }
}

function arraySum(array) {
  return array.reduce((x, y) => x + y, 0);
}

const givenArray = [1, 2, 3, 4, 2, 3, 1];
findIndexForSumBalance(givenArray);
