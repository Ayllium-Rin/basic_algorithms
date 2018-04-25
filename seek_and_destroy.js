/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.*/

/* This is an unadaptive function that cannot cope with the whims of the user and their unpredictable number of arguments. */


function destroyer(arr, arg1, arg2, arg3) {
  
  var newArray = arr.filter(function remove(obj) {
    if (obj != arg1 && obj != arg2 && obj != arg3) {
    
    return obj;
    }
  });
  return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//Completed Apr 01, 2018.