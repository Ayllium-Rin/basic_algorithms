/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
Note that inserting the three dots to the end will add to the string length.
However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.*/

function truncateString(str, num) {
  
  var newStr = "";
  if (num >= str.length) {
    return str;
  } else if (num > 3) {
    num -= 3;
    newStr = str.slice(0, num) + "...";
    return newStr;
  } else {
    newStr = str.slice(0, num) + "...";
    return newStr;
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);

//Completed March 30, 2018.