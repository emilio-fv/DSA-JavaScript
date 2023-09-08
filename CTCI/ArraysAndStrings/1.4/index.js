/**
 * 1.4 Palindrome Permutation 
 * Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters. 
 * 
 * @param {string} str INPUT: string
 * @returns {boolean} if string is a palindrome permutation
 */

/**
 * Edge cases: null input, empty string, single characters
 * 
 * Odd length strings are going to have a pivot character and matching pairs of each character on either side of the string
 * Even length strings are going to have pairs of each character
 * 
 * Iterate over the string using a data structure for tracking the characters. If the character does not exist in the data structure, we add it otherwise we remove it. If there are an even number of characters, the data structure will have 0 entries whereas for an odd length, there should just be 1 entry left. Check the size at the end and return the result.
 */

function solution1(str) {
  // Handle edge cases
  if (!str || str?.length <= 1) {
    return false;
  }

  // Data structure for tracking characters
  let chrs = new Set();
  let count = 0;

  for (let chr of str) {
    if (chr.toUpperCase() != chr.toLowerCase()) { // Check if letter
      chr = chr.toLowerCase();
      count++;
      if (chrs.has(chr)) {
        chrs.delete(chr)
      } else {
        chrs.add(chr);
      }
    }
  }

  // Check size of data structure
  if (count % 2 !== 0) {
    return chrs.size === 1;
  } else {
    return chrs.size === 0;
  }
}

console.log(solution1('Tact Cao'))

// Exports
module.exports = {
  solution1
}