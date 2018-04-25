/*Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".*/

function mutation(arr) {
  var first = arr[0].toLowerCase().split("").sort().join("");
  var second = arr[1].toLowerCase().split("").sort().join("");
  var array = [];
  var x = [];
  x = second.split("");
  for (var i=0; i<first.length; i++){
    for (var j=0; j<second.length; j++){
      if (first[i] === x[j]) {
        array.push(x[j]);
        x[j] = "";
        break;
      } 
    }
  }
  var third = array.join("");
  if (third === first || third === second) {
    return true;
  } else {
    return false;
  }  
}
mutation(["hello", "hey"]);

//Completed March 31, 2018.