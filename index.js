function bubbleSort(arr) {

  const len = arr.length;
  for (var i = 0; i < len ; i++) {
    for(var j = 0 ; j < len - i - 1; j++){
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j+1];
      arr[j + 1] = temp;
    }
   }
  }
  return arr;
}

function mergeArray(arr1, arr2) {
    var a = arr1.concat(arr2);
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

exports.bubbleSort=bubbleSort;
exports.mergeArray=mergeArray;
