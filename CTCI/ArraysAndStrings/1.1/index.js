/**
 * 1.1 Is Unique
 * Implement an algorithm to determine if a string has all unique characters. What if you cannot use any additional data structures?
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

module.exports = {
    solution1
}