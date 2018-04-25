/*Return the length of the longest word in the provided sentence.
Your response should be a number.*/

function findLongestWord(str) {
 var strArray = str.split(" ");
 var hold = 0;
  for (var i=0; i<strArray.length; i++) {
    if (strArray[i].length > hold) {
      hold = strArray[i].length;
    } 
  } 
  return hold;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

//Completed March 30, 2018.