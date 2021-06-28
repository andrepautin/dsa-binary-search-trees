class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let current = this.root;
    if (current === null) {
      this.root = new Node(val);
      return this;
    }

    while (current !== null) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    // BASE CASE: insert new node as root for empty tree
    if (current === null) {
      this.root = new Node(val);
      return this;
    }
    if (val < current.val) {
      // if there's a spot for the node
      if (current.left === null) {
        current.left = new Node(val);
        return this;
        // if there is a left node, call fn with that node as the root
      } else {
        return this.insertRecursively(val, current.left);
      }
    } else if (val > current.val) {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      } else {
        return this.insertRecursively(val, current.right);
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    let foundVal = false;
    if (current === null) {
      return undefined;
    }
    while (current && (foundVal === false)) {
      // 3 cases
        // val < current.val
        // val > current.val
        // val === current.val
      if (val < current.val) {
        current = current.left
      } else if (val > current.val) {
        current = current.right;
      } else {
        foundVal = true;
      }
    }
    return foundVal ? current : undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (current === null) {
      return undefined;
    }

    if (val < current.val) {
      return this.findRecursively(val, current.left);
    } else if (val > current.val) {
      return this.findRecursively(val, current.right);
    } 
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visitedNodeVals = [];
    let current = this.root;
    function traverse(node) {
      visitedNodeVals.push(node.val);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return visitedNodeVals;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visitedNodeVals = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      visitedNodeVals.push(node.val);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return visitedNodeVals;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visitedNodeVals = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      visitedNodeVals.push(node.val);
    }
    traverse(current);
    return visitedNodeVals;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let toVisitQueue = [this.root];
    let visitedNodeVals = [];
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      visitedNodeVals.push(current.val);
      if (current.left) {
        toVisitQueue.push(current.left);
      }
      if (current.right) {
        toVisitQueue.push(current.right);
      }
    }
    return visitedNodeVals;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
