// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var elemsWithClass = [];
  //  domWalk will look at current node and recursively hit every branch,
  //  checking for className and adding those elems to "elemsWithClass"
  var domWalk = function (currentNode) {
    if ($(currentNode).hasClass(className)) {
      elemsWithClass.push(currentNode);
    }
    currentNode = currentNode.firstChild;
    while (currentNode) {
      domWalk(currentNode);
      currentNode = currentNode.nextSibling;
    }
  };
  domWalk(document.body);
  return elemsWithClass;
};
