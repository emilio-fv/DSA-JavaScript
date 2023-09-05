/**
 * 1.1 Is Unique
 * Implement an algorithm to determine if a string has all unique characters. What if you cannot use any additional data structures?
 * 
 * Edge cases: null input, empty string, single character -> all return false
 * 
 * @param {*} str 
 * @returns {boolean} 
*/

function solution1(str) {
    // Check if string is empty, a single character, or null
    if (str?.length <= 1 || !str) { 
        return false;
    }

    // Iterate over the string with a runner that compares each combination of characters
    for (let i = 0; i < str.length - 1; i++) { 
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }

    return true;
}

// Exports
module.exports = {
    solution1
}