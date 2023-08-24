function solution1(str) {
    // Check if string is empty or a single character
    if (str.length <= 1) { 
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