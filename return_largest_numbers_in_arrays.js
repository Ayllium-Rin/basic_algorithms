/*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].*/

function largestOfFour(arr) {
  var previous = 0;
  var largerArray = [];
  for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr[i].length; j++) {
      if (arr[i][j] > previous) {
          previous = arr[i][j];
      }       
    }
    largerArray.push(previous);
    previous = 0;
  }
  return largerArray;
}
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Completed March 30, 2018.