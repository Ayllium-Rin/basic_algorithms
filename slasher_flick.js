/*Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.*/

function slasher(arr, howMany) {
  var newArray = (arr.slice(howMany));
  return newArray;
}
slasher([1, 2, 3], 2);

//Completed March 31, 2018.