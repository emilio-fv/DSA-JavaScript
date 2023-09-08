/**
 * 1.5 One Away 
 * There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. given two strings, write a function to check if they are one or zero edits away
 * @param {string} str1
 * @param {string} str2 
 * @returns {boolean} if the two strings are one edit away from each other 
 */
function solution1(str1, str2) {
  // The lengths of the initial strings are either going to be the same, or 1 letter different
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let edits = 0;
  let index1 = 0;
  let index2 = 0;

  while (edits < 2 && index1 < str1.length && index2 < str2.length) {
    if (str1[index1] !== str2[index2]) {
      edits++;
      if (str1[index1 + 1] === str2[index2]) {
        index1++;
      } else if (str1[index1] === str2[index2 + 1]) {
        index2++;
      }
    }
    index1++;
    index2++;
  }

  return edits < 2;
}

function solution2(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let isEdited = false;
  for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      if (isEdited) {
        return false;
      }
      
      if (str1.length > str2.length) {
        --j;
      }
      else if (str1.length < str2.length) {
        --i;
      }
      isEdited = true;
    }
  }

  return true;
}

module.exports = {
  solution1,
  solution2
}