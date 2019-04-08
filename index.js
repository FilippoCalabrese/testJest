
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

exports.generateBitMap=generateBitMap;
