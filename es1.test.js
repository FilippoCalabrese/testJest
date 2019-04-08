const {generateBitMap, compare} = require('./es1');

test('assert correct number of elements in matrix', ()=>{
  let bitmap = generateBitMap(2,3,2);
  expect(bitmap.length).toBe(2);
});

test('assert correct number of row in matrix', ()=>{
  let bitmap = generateBitMap(2,3,2);
  expect(bitmap[0].length/3).toBe(2);
});

test('assert correct number of columns in matrix', ()=>{
  let bitmap = generateBitMap(2,3,1);
  expect(bitmap[0].length/2).toBe(3);
});

test('assert correct number of elements in pixel', ()=>{
  let bitmap = generateBitMap(2,3,1);
  expect(bitmap[0][0].length).toBe(4);
});

test('Verify that compare function return true on correct comparison', ()=>{
  expect(compare([1,2,4], [1,3,6], 10)).toBe(true);
});
