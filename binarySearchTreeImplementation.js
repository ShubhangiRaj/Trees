class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class BinarySearchTree{
    constructor() {  
        this.root = null;
    }
}

BinarySearchTree.prototype.insert = function(data){
    let newNode = new Node(data);

    if(this.root === null){
        this.root = newNode;
        return;
    }
    else {
        this.internalInsert(this.root, newNode);
    }
}

BinarySearchTree.prototype.internalInsert = function(rootNode, newNode){
    if(newNode.data <= rootNode.data){
        if(rootNode.left === null){
            rootNode.left = newNode;
        } else {
            rootNode.left = this.internalInsert(rootNode.left, newNode);
        }
    } else {
        if(rootNode.right === null){
            rootNode.right = newNode;
        } else {
            rootNode.right = this.internalInsert(rootNode.right, newNode);
        }
    }
}

let bstTree = new BinarySearchTree();
bstTree.insert(10);
// bstTree.internalInsert(bstTree.root, 10);
console.log(bstTree);
bstTree.insert(8);
bstTree.insert(20);
console.log(bstTree);
