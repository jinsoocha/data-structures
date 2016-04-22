
//qconsole.log(Node());
// ------------------------


// {
//   nodes: {
//     1: [{2 :1},{3:1}]
//     2: [{1:2}],
//     3: [{1:3}],
//   }
// }

//


// Instantiate a new graph
var Graph = function() {
  this.nodes = {};

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(this.nodes[node]) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  _.each(this.nodes[fromNode], function(node) {
    if(toNode in node) {
      result = true;
    }
  });

  return result;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var a = {};
  a[toNode] = fromNode;
  var b = {};
  b[fromNode] = toNode;

  this.nodes[fromNode].push(a);
  this.nodes[toNode].push(b);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  _.each(this.nodes[fromNode], function(node){
    if(node[toNode]) {
      delete node[toNode];
    }
  });
  _.each(this.nodes[toNode], function(node){
    if(node[fromNode]) {
      delete node[fromNode];
    }
  });

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


