/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".*/

function titleCase(str) {
  var strArray = str.split(" ");
  var lowerArray = [];
  var upperArray = [];
  for (var i=0; i < strArray.length; i++) {
  lowerArray.push(strArray[i].toLowerCase());
  upperArray.push(lowerArray[i][0].toUpperCase() + lowerArray[i].slice(1));
  }
  return upperArray.join(" ");
}
titleCase("I'm a little tea pot");

//Completed March 30, 2018.