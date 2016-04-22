var BinarySearchTree = function(value) {
  var tree =  Object.create(methods);
  tree.storage = {};
  tree.storage.value = value;
  return tree.storage;
};

var methods = {};
methods.insert = function(value){
  this.storage.left = {};
  this.storage.right = {};
};

methods.contains = function(value){

};

methods.depthFirstLog = function(){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

