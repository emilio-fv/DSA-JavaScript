const { solution1 } = require('./index');

xdescribe('1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use any additional data structures?', () => {
  test('Solution 1: abcdefgh returns true', () => {
    expect(solution1('abcdefgh')).toBe(true);
  });
  
  test('Solution 1: abcdefa returns false', () => {
    expect(solution1('abcdefa')).toBe(false);
  })
});

