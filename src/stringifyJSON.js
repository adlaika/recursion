// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  var result = '';

  //cases for null, undefined, and functions
  if (obj === null) {
    return result += 'null';
  } else if (obj === undefined || obj instanceof Function) {
    return result += '';
  }

  //cases for primitives
  var primToString = function (elem) {
    if (typeof elem === 'string') {
      return result += '"' + elem + '"';
    } else if (typeof elem === 'number' || typeof elem === 'boolean') {
      return result += elem.toString();
    }
  };
  if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
    console.log('calling primToString on ' + obj);
    return result += primToString(obj);
  }

  //case for arrays
  if (obj instanceof Array) {
    result += '[';
    for (var i = 0; i <= obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (i + 1 < obj.length) {
        result += ',';
      }
    }
    return result += ']';
  }

  //case for key/value maps
  else if (typeof obj === 'object') {
    result += '{';
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        result += ',"' + key + '":' + stringifyJSON(obj[key]);
      }
    }
    result = result.replace(/{[,]/, "{");
    return result += '}';
  }

  return result;
};
