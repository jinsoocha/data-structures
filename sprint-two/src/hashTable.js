

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //console.log(this._storage);
  if(this._storage[index] === undefined) {
    this._storage[index] = [];
  } 
  this._storage[index].push([k,v]);
};

HashTable.prototype.retrieve = function(k) {
  var result;
  var index = getIndexBelowMaxForKey(k, this._limit);
  _.each(this._storage[index], function(value){
    if(value[0] === k) {
      result = value[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


