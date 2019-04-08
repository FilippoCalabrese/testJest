const {parse} = require('./es2');

test('function parse correctly parse simple values', ()=>{
  expect(parse("2+6")).toBe(8);
});

test('function parse correctly parse simple values', ()=>{
  expect(parse("8+8")).toBe(16);
});

test('compute handle multiple elements', ()=>{
  expect(parse("8+8+8+8")).toBe(32);
});

test('parse correctly throw exception with wrong parameters', ()=>{
  expect(()=>{parse(2)}).toThrow();
});

test('parse handle subtraction', ()=>{
  expect(parse("2-3")).toBe(-1);
});

test('parse handle division', ()=>{
  expect(parse("2/2")).toBe(1);
});

test('parse handle multiplication', ()=>{
  expect(parse("2*3")).toBe(6);
});

test('parse throw error if dividing by zero', ()=>{
  expect(()=>{parse("0/0")}).toThrow();
})

test('parse can handle very complex string', ()=>{
  expect("4+5/6*2-15+21-10*55").toBeDefined();
});
