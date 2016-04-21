var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = Object.create(stackMethods);
  someInstances.storage = {};
  someInstances.length = 0;

  return someInstances;
};

var stackMethods = {};

stackMethods.size = function() {
  return Math.max(0, this.length);
};

stackMethods.pop = function() {
  var popped = this.storage[this.length - 1];

  delete this.storage[this.length - 1];

  this.length--;

  return popped;
};

stackMethods.push = function(value) {
  this.storage[this.length] = value;

  this.length++;
};