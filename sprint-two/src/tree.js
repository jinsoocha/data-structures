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

treeMethods.contains = function(target, tree) {
// No inner function version
  // tree = tree || this;
  // var result = false;
  // if (tree.value === target){
  //   result = true;
  // } 
  // if (tree.children.length > 0) {
  //   _.each(tree.children, function(child) {
  //     treeMethods.contains(target, child);
  //   });
  // }
  // return result;

  var result = false;

  var search = function(tree){
    if(tree.value === target){
      result = true;
    }

    if(tree.children.length > 0){
      _.each(tree.children, function(child){
        search(child);
      });
    }

  };

  search(this);

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
