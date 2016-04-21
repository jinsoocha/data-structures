var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = Object.create(queueMethods);
  someInstances.storage = {};
  someInstances.length = 0;
  return someInstances;
};

var queueMethods = {};

queueMethods.size = function() {
  return Math.max(0, this.length);
};

queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  var dequeued = this.storage[0];
  for (var key in this.storage) {
    this.storage[key] = this.storage[(Number(key) + 1).toString()];
  }
  delete this.storage[length - 1];
  this.length--;

  return dequeued;
};