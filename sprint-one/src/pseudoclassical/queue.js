var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
};

Queue.prototype.size = function() {
  return Math.max(0, this.length);
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[0];
  for (var key in this.storage) {
    this.storage[key] = this.storage[(Number(key) + 1).toString()];
  }
  delete this.storage[this.length - 1];
  this.length--;
  return dequeued;
};

var someInstances = new Queue();



