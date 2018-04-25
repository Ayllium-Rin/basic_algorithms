/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/

function rot13(str) { // LBH QVQ VG!
  
  var numArray = [];
  var letter = "";
  
  for (var i=0; i<str.length; i++) {
    numArray.push(str.charCodeAt(i));
  }
 
  for (var j=0; j<numArray.length; j++) {
    if (numArray[j] < 78 && numArray[j] >= 65) {
      letter += String.fromCharCode(numArray[j] + 13);
    }else if (numArray[j] >= 78 && numArray[j] <= 91) {
      letter += String.fromCharCode(numArray[j] - 13);
      }else
       letter += String.fromCharCode(numArray[j]);
  }
  return letter;
  
  
  /*  
  
  //First iteration for fun... 
  
  var numStr = [];
  var newArray = str.split(" ");
  var realAlphaNum = [];
  var message = "";
  var alphaToNum = {
    'A':1, 'B':2, 'C':3, 'D':4, 'E':5, 'F':6, 'G':7, 'H':8, 'I':9, 'J':10, 'K':11,
    'L':12, 'M':13, 'N':14, 'O':15, 'P':16, 'Q':17, 'R':18, 'S':19, 'T':20,
    'U':21, 'V':22, 'W':23, 'X':24, 'Y':25, 'Z':26
  };
  var numToAlpha = {
    1:'A', 2:'B', 3:'C', 4:'D', 5:'E', 6:'F', 7:'G', 8:'H', 9:'I', 10:'J', 11:'K',
    12:'L', 13:'M', 14:'N', 15:'O', 16:'P', 17:'Q', 18:'R', 19:'S', 20:'T',
    21:'U', 22:'V', 23:'W', 24:'X', 25:'Y', 26:'Z', "!":"!", ".":".", "?":"?"
  };
  
  for (var i=0; i<newArray.length; i++) {    
    numStr = [];
    for (var j=0; j<newArray[i].length; j++) {
      if (alphaToNum[newArray[i][j]] > 13) {
        numStr.push(alphaToNum[newArray[i][j]] - 13);
      } else if (alphaToNum[newArray[i][j]] <= 13) {
        numStr.push(alphaToNum[newArray[i][j]] + 13);
      } else {
        numStr.push(newArray[i][j]);
      }     
    }
     realAlphaNum.push(numStr);
  }

  for (var k=0; k<realAlphaNum.length; k++) {
    for (var l=0; l<newArray[k].length; l++){
    message += numToAlpha[realAlphaNum[k][l]];
    }
    if (k<realAlphaNum.length - 1) {
    message += " ";
    }
  }  
 return message;
 */
}

// Change the inputs below to test

rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");

//Completed Apr 01, 2018.