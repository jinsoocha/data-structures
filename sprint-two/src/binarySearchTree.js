var BinarySearchTree = function(value) {
  var tree =  Object.create(methods);
  tree.value = value;
  return tree;
};
var methods = {};

methods.insert = function(value){
  this.left = this.left || {};
  this.right = this.right || {};

  if(value < this.value) {
    if(this.left.value === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if(this.right.value === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

methods.contains = function(value){

  var result = false;
  if(value === this.value){
    return true;
  }

  if(value < this.value){
    if(this.left !== undefined) {
      result = result || this.left.contains(value);
    }
  }

  if(value > this.value) {
    if(this.right  !== undefined) {
      result = result || this.right.contains(value);
    }
  }

  return result;
};

methods.depthFirstLog = function(cb){
  cb(this.value);

  for(var key in this){
    if(key === 'left' || key === 'right'){
      if(this[key].value !== undefined) {
        this[key].depthFirstLog(cb);
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log(n))
 * contains: O(log(n))
 * depthFirstLog: O(n)
 */
