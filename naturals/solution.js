/*
 * Given a natural number (K) and a vector (V) of numbers, find the indexes of the
 * two factors (A,B) that give as a product the given natural number (K).
 */

// when we are working with natural numbers array
function findCoupleIndexesThatGiveTheNaturalNumber(arrayValues, k) {
  if (arrayValues.length < 0) {
    return [];
  }

  let result = [];
  for (var i = 0; i < arrayValues.length; i++) {
    let nr = arrayValues[i];
    // control if the number can be divided, if not skip
    if (k % nr == 0) {
      var j = i + 1;
      while (j <= arrayValues.length) {
        if (nr * arrayValues[j] == k) {
          result.push(i); // save the index of the first number
          result.push(j); // save the index of the second number
        }
        j++;
      }
    }
  }

  // remove dublicates
  result = [...new Set(result)];
  document.write("The array with the index result [" + result.sort() + "]<br/");
}

const values = [3, 3, 12, 8, 1, 4];
const k = 12;

document.write(findCoupleIndexesThatGiveTheNaturalNumber(values, k));
