const {bubbleSort, mergeArray} = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(bubbleSort([3, 2, 1])).toBe([1,2,3]);
});
