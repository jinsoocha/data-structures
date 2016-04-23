

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index) === undefined){
    this._storage.set(index,[]);
    this._storage.get(index).push([k,v]);

  } else {
    this._storage.get(index).push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var result;
  var index = getIndexBelowMaxForKey(k, this._limit);
  _.each(this._storage.get(index), function(value){
    if(value[0] === k) {
      result = value[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var context = this;
  _.each(this._storage.get(index), function(value, i) {
    if(value[0] ===k) {      
      context._storage.get(index).splice(i,1);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(1)
 * retrieve: O(1)
 * remove: O(1)
 */



