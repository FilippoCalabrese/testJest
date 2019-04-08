const {generateBitMap} = require('./index');

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
