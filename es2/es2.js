

function parse(string){

  if(typeof string != 'string'){
    throw "wrong parameters!";
  }

  array=string.split("");
  return compute(array);
}

function switchOperation(a, b, c) {
  res = 0;
  switch (b) {
    case "+":
      res = Number(Number(a)+Number(c));
      break;
    case "-":
      res = Number(Number(a)-Number(c));
      break;
    case "*":
      res = Number(Number(a)*Number(c));
      break;
    case "/":
      res = Number(Number(a)/Number(c));
      if(c==0)
        throw 'Dividing by zero!';
      break;
    default:

  }
  return res;
}

function compute(array){

  param1 = array[0];
  param2 = array[1];
  param3 = array[2];

  array.splice(0, 3);

  let res = switchOperation(param1, param2, param3);
  array.splice(0, 0, res);

  if(array.length==1)
    return array[0];
  else
    return compute(array);
}

exports.parse=parse;
