const { solution1 } = require('./index');

xdescribe('1.1', () => {
  test('Solution 1: abcdefgh returns true', () => {
    expect(solution1('abcdefgh')).toBe(true);
  });
  
  test('Solution 1: abcdefa returns false', () => {
    expect(solution1('abcdefa')).toBe(false);
  });

  test('Solution 1: single character returns false', () => {
    expect(solution1('a')).toBe(false);
  });

  test('Solution 1: null input returns false', () => {
    expect(solution1(null)).toBe(false);
  });

  test('Solution 1: empty string returns false', () => {
    expect(solution1('')).toBe(false);
  })
});

