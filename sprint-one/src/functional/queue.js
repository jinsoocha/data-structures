var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[0];
    for (var key in storage) {
      storage[key] = storage[(Number(key) + 1).toString()];
    }
    delete storage[length - 1];
    length--;
    return dequeued;
  };

  someInstance.size = function() {
    return Math.max(length, 0);
  };

  return someInstance;
};
