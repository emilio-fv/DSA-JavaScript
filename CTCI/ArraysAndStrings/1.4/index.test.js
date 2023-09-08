const { solution1 } = require('./index');

xdescribe('1.4', () => {
  // Test success with Tact Coa
  test('Solution 1: Tact Coa returns true', () => {
    expect(solution1('Tact Coa')).toBe(true)
  })
  // Test fail Tact Coat
  test('Solution 1: Tact Coat returns false', () => {
    expect(solution1('Tact Coat')).toBe(false)
  })
  // Test null input
  test('Solution 1: null input returns false', () => {
    expect(solution1(null)).toBe(false)
  })
  // Test empty string
  test('Solution 1: empty string returns false', () => {
    expect(solution1('')).toBe(false)
  })
  // Test one character
  test('Solution 1: one character returns false', () => {
    expect(solution1('a')).toBe(false)
  })
})