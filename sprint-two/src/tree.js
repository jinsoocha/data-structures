var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
// No inner function version
  var result = false; 

  if (this.value === target){
    return true;
  } else {
    if (this.children.length > 0) {
      _.each(this.children, function(child) {
        result = result || child.contains(target);
      });
    }  
  }

  return result;

// Inner function version
  // var result = false;

  // var search = function(tree){
  //   if(tree.value === target){
  //     result = true;
  //   }

  //   if(tree.children.length > 0){
  //     _.each(tree.children, function(child){
  //       search(child);
  //     });
  //   }

  // };

  // search(this);

  // return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

 /*
  * addChild: O(1), single push
  * contains: O(n), run recursively per n trees
  */  
