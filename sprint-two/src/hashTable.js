

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {

  if(this._counter >= this._limit * 0.75) {
    this.resize(this._limit * 2);
  }

  var index = getIndexBelowMaxForKey(k, this._limit);


  if(this._storage.get(index) === undefined){
    this._storage.set(index,[]);
    this._storage.get(index).push([k,v]);
    this._counter++;
  } else {
    this._storage.get(index).push([k,v]);
    this._counter++;
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
  var context = this;

  if(this._counter <= this._limit * 0.25) {
    this.resize(this._limit / 2);
  }

  var index = getIndexBelowMaxForKey(k, this._limit);

  _.each(this._storage.get(index), function(value, i) {
    if(value[0] ===k) {      
      context._storage.get(index).splice(i,1);
      context._counter--;      
    }
  });
};

  
HashTable.prototype.resize = function(limit) {
  this._limit = limit;
  var oldstorage = this._storage;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;  
  var context = this;

  oldstorage.each(function(bucket,index,oldstorage) {
    if(bucket){
      for(var i = 0; i < bucket.length; i++) {
        context.insert(bucket[i][0], bucket[i][1]);
      }
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(1)
 * retrieve: O(1)
 * remove: O(1)
 */



