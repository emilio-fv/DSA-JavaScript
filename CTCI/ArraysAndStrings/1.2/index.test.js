const { solution1 } = require('./index');

xdescribe('1.2', () => {
  test('Solution 1: abcdef & efabcd returns true', () => {
    expect(solution1('abcdef', 'efabcd')).toBe(true);
  })

  test('Solution 1: abcdef & axcdef returns false', () => {
    expect(solution1('abcdef', 'axcdef')).toBe(false);
  })

  test('Solution 1: null and empty strings return false', () =>{
    expect(solution1('', null)).toBe(false);
  })
});