var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someInstances = {};
  someInstances.storage= {};
  someInstances.length = 0;
  _.extend(someInstances, stackMethods);

  return someInstances;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  var popped = this.storage[this.length - 1];

  delete this.storage[this.length - 1];

  this.length--;

  return popped;

};

stackMethods.size = function() {
  return Math.max(0, this.length);
};




