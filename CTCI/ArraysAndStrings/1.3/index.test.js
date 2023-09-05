const { solution1  } = require('./index');

xdescribe('1.3', () => {
  test('Solution 1: null input returns Invalid input', () => {
    expect(solution1(null, 13)).toMatch('Invalid input')
  })

  test('Solution 1: empty string returns Invalid input', () => {
    expect(solution1('', 13)).toMatch('Invalid input')
  })

  test('Solution 1: "Mr John Smith     " and 13 returns "Mr%20John%20Smith"', () => {
    expect(solution1('Mr John Smith      ', 13)).toBe('Mr%20John%20Smith')
  })
})