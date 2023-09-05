/**
 * 1.3 URLify
 *  Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string
 * 
 * Assumptions: spaces will only in the middle and end
 * 
 * Edge cases: null or empty string -> return 'Invalid input'
 * @param {*} str string
 * @param {*} length true length of string
 * @returns {string} url-ified string
 */

function solution1(str, length) {
  // Handle empty string edge cases
  if (!str || str?.length === 0) {
    return 'Invalid input';
  }

  let output = '';

  // Determine number of spaces
  for (let i = 0; i < length; i++) {
    let chr = str[i];
    if (chr === ' ') {
      output += '%20';
    } else {
      output += chr;
    }
  }

  return output;
}

// Exports
module.exports = {
  solution1
}