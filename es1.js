
function generateBitMap(width, height, number){
  let maps = [];

  for(let k=0; k<number; k++){
    let map = Array(width*height).fill(0).map(x => Array(4).fill(0));

    for (let i =0; i<width*height; i++) {
      for(let j = 0; j<4; j++){
        map[i][j]=Math.floor(Math.random() * 256);
      }
    }

    maps.push(map);
  }

  return maps;
}

function compare(arr1, arr2, tolx){

  let total1 = 0;
  let total2 = 0;

  for (let element in arr1) {
    total1+=Number(element);
  }
  for (let element in arr2) {
    total2+=Number(element);
  }
  console.log(total1);
  return Math.abs(total1-total2)<=tolx;
}

function findSimilarRows(bitmap, rowSize, tolx){
  let bitmapSize = bitmap.length;
  let flag = false;
  for(let i=0; i<bitmapSize/rowSize; i++){
    for(let j=0; j<rowSize-1; j++){
      if(compare(bitmap[i][j], bitmap[i][j+1], tolx)){
        flag=true;
      } else {
        flag=false;
      }
    }
    if(flag){
      break;
    }
  }
  return flag;
}

exports.generateBitMap=generateBitMap;
exports.findSimilarRows=findSimilarRows;
exports.compare=compare;
