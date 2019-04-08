const {bubbleSort, mergeArray} = require('./index');

function checkArrays(arr1, arr2){
  return JSON.stringify(res)==JSON.stringify(arr2);
}
index
function testCaseWithStandardInput() {
  let testCase=[2, 1, 4];
  res = bubbleSort(testCase);
  if(checkArrays(res, [1, 2, 4])){
    console.log('Ok');
  }
  else {
    console.log('Error with testCaseWithStandardInput!');
  }
};

function testCaseWithReversedInput() {
  let testCase=[4, 3, 2];
  res = bubbleSort(testCase);
  if(checkArrays(res, [2, 3, 4])){
    console.log('Ok');
  }
  else {
    console.log('Error with testCaseWithReversedInput!');
  }
};

function testCaseWithSortedArray(){
  let testCase=[1, 2, 4];
  res = bubbleSort(testCase);
  if(JSON.stringify(res)==JSON.stringify([1, 2, 4])){
    console.log('Ok');
  }
  else {
    console.log('Error with testCaseWithSortedArray');
  }
}

function testMergeArrayWithStandardParameters(){
  arr1 = [1, 2, 3];
  arr2 = [3, 4, 5];

  res = mergeArray(arr1, arr2);
  if(checkArrays(res, [1,2,3,4,5])){
    console.log('Ok');
  }
}

function assertExceptionFromSumWithInvalidParameters() {
  let res = false;
  try {
    bubbleSort([1, "2", 3]);
  } catch(exception) {
    res = true;
  }
  if(res){
    console.log('Ok!', res);
  }
  else {
    console.log('Error in exception handling in sum');
  }
}

function assertExceptionFromMergeWithInvalidParameters() {
  let res = false;
  try {
    mergeArray([1, 2, 3], "5");
  } catch(exception) {
    res = true;
  }
  if(res){
    console.log('Ok!', res);
  }
  else {
    console.log('Error in exception handling in metgeArray: ');
  }
}

function init(){
  testCaseWithSortedArray();
  testCaseWithStandardInput();
  testMergeArrayWithStandardParameters();
  assertExceptionFromMergeWithInvalidParameters();
  assertExceptionFromSumWithInvalidParameters();
  testCaseWithReversedInput();
}
init();
