/**
 * 1.2 Check Permutation
 * Given 2 strings, check if one string is a permutation of the other. For a string to be a permutation of another string, it must have the same order of characters but shifted by a specific amount.
 * 
 * Edge cases: null, empty string, different lengths of strings -> return false
 * 
 * @param {*} str1 string 1
 * @param {*} str2 string 2
 * @returns {boolean} if one string is a permutation of the other
 */

function solution1(s1, s2) {
  // Edge cases: null input, empty strings, and different string lengths
  if (!s1 || !s2) {
    return false
  }

  if (s1.length === 0 || s2.length === 0) { 
    return false;
  }

  if (s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s2.length; i++) { // Iterate over string to search for the first letter in the second string
    if (s1[0] === s2[i]) { // Slice and rearrange to match first string
      let temp = s2.slice(i) + s2.slice(0, i);
      if (s1 === temp) {
          return true;
      }
    }
  }

  return false;
}

// Exports
module.exports = {
  solution1
}