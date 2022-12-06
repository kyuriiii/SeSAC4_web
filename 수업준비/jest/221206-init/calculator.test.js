const sum = require('./sum');

test('1 + 2 가 3인가 테스트', () => {
  expect(sum(1,2)).toBe(3);
});