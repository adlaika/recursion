// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  var result = '';

  if (obj === null) {
    result = 'null';
  } else if (obj.toString() === [].toString()) {
    result = '[]';
  } else if (typeof obj !== 'object') {
    if (typeof obj === 'string') {
      result = '"' + obj + '"';
    } else if (typeof obj === 'number' || typeof obj === 'boolean') {
      result = obj.toString();
    }
  }

  // for (var key in obj) {
  //   if (obj[key] === undefined || obj[key] instanceof Function) {
  //     result = result;
  //   } else
  //   if (typeof obj[key] === 'boolean' || typeof obj[key] === 'number' || typeof obj[key] === 'string') {
  //     console.log('boop');
  //     result += key.toString() + obj[key].toString();
  //   } else if (obj[key] === null) {
  //     result += key.toString() + 'null';
  //   } else {
  //     result += stringifyJSON(obj[key]);
  //   }
  // }
  console.log('result: ' + result);
  return result;
};
