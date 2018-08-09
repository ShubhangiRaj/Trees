class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
	}
	insert(data){
		let newNode = new Node(data);

		if(this.root == null){
			this.root = newNode;
			return;
		} else {
			this.internalInsert(this.root, newNode);
		}

	}
	internalInsert(rootNode, newNode){
		if(rootNode.left == null){
			rootNode.left = newNode;
			return;
		} else {
			rootNode.left = this.internalInsert(rootNode.left, newNode);
		}
		if(rootNode.right == null){
			rootNode.right = newNode;
			return;
		} else {
			rootNode.right = this.internalInsert(rootNode.right, newNode);
		}
	}
}


BinaryTree.prototype.levelOrder = function(root){
	let temp, queue = [];
	queue.push(root);
	console.log(root);
	console.log(queue[0]);
	
	while(queue.length){
		temp = queue.splice(0,1)[0];

		console.log(temp.data);
	
		if (temp.left) queue.push(temp.left)
    	if (temp.right) queue.push(temp.right)
	}
}

// Types of DFS: PreOrder, InOrder, PostOrder

// <root><left><right>
BinaryTree.prototype.preorderTraversal = function(root){
	if(root == null){return}	
	console.log(root.data);
    this.preorderTraversal(root.left);
    this.preorderTraversal(root.right);
 
}

// <left><root><right>
BinaryTree.prototype.inorderTraversal = function(root){
	if(root == null){return}	
	this.inorderTraversal(root.left);
    console.log(root.data);
    this.inorderTraversal(root.right);
 
}

// <left><right><root>
BinaryTree.prototype.postorderTraversal = function(root){
	if(root == null){return}	
	this.postorderTraversal(root.left);
	this.postorderTraversal(root.right);
	console.log(root.data);
 
}
let bTree = new BinaryTree();
bTree.insert(1);
bTree.insert(2);
bTree.insert(3);
bTree.insert(4);
bTree.insert(5);
console.log(bTree);
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(5);
let node4 = new Node(4);
let node5 = new Node(6);
let node6 = new Node(7);
let node7 = new Node(8);
node1.left = node2;
node1.right = node5;
node2.left = node3
node2.right = node4
node5.left = node6;
node5.right = node7;
bTree.root = node1;

bTree.inorderTraversal(bTree.root);

// bTree.replaceRootWithMaxChild(bTree.root);