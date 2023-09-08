const { solution1, solution2 } = require('./index');

describe('1.5', () => {
  test('Solution 1: pale and ple returns true', () => {
    expect(solution1('pale', 'ple')).toBe(true)
  })

  test('Solution 1: pales and pale returns true', () => {
    expect(solution1('pales', 'pale')).toBe(true)
  })

  test('Solution 1: pale and bale returns true', () => {
    expect(solution1('pale', 'bale')).toBe(true)
  })
  
  test('Solution 1: pale and base return false', () => {
    expect(solution1('pale', 'base')).toBe(false)
  })

  test('Solution 1: ple and pales return false', () => {
    expect(solution1('ple', 'pales')).toBe(false)
  })

  test('Solution 2: pale and ple returns true', () => {
    expect(solution2('pale', 'ple')).toBe(true)
  })

  test('Solution 2: pales and pale returns true', () => {
    expect(solution2('pales', 'pale')).toBe(true)
  })

  test('Solution 2: pale and bale returns true', () => {
    expect(solution2('pale', 'bale')).toBe(true)
  })
  
  test('Solution 2: pale and base return false', () => {
    expect(solution2('pale', 'base')).toBe(false)
  })

  test('Solution 2: ple and pales return false', () => {
    expect(solution2('ple', 'pales')).toBe(false)
  })
})