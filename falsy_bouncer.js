/*Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.*/

function bouncer(arr) {

  var newArray = arr.filter(function isFalsy(item) {
    if (item != false){
    return item;
    }
  });
  return newArray;
}

bouncer([false, null, 0, NaN, undefined, ""]);

//Completed Apr 01, 2018.