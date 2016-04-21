var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail = Node(value);   
    }
  };

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.contains = function(target, node) {
    if (node === undefined) {
      node = list.head;
    }

    if (node.value === target) {
      return true;
    } else {
      if (node.next !== null) {
        return list.contains(target, node.next);
      } else {
        return false;
      }
    }
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



 // Complexity: What is the time complexity of the above functions?
