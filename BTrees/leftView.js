class Node{
	constructor(data, left = null, right = null){
		this.data = data;
		this.left = left;
		this.right = right;
	}
	getData(){
		return this.data
	}
	getLeft(){
		return this.left;
	}
	getRight(){
		return this.right;
	}
}

class BinaryTree{
	constructor(){
		this.root = null;
	}
}

BinaryTree.prototype.insertElem = function(root, elem){
    let newNode = new Node(elem);
    if(root == null){
        this.root = newNode;
        return;
    }
    let temp, queue = [];
    queue.push(root);
    while(queue.length){
        temp = queue.shift();
        if(temp.left !== null){
            queue.push(temp.left);
        } else {
            temp.left = newNode;
            return;
        } 
        if(temp.right !== null){
            queue.push(temp.right);
        } else {
            temp.right = newNode
            return;
        }
    }
}

let bTree = new BinaryTree();
bTree.insertElem(bTree.root, 7);
bTree.insertElem(bTree.root, 4);
bTree.insertElem(bTree.root, 5);
bTree.insertElem(bTree.root, 2);
bTree.insertElem(bTree.root, 1);

function printLeftView(root){
    if(root == null){
        return
    }
    let temp, queue = [];
    queue.push(root);
    console.log(queue[0]);
    queue.push(null);
    while(queue.length){
        temp = queue.shift();
        if(temp == null){
            if(queue.length){
                console.log(queue[0]);
                queue.push(null);
            }
        }
        else{
            if(temp.left !== null){
                queue.push(temp.left);
            }
            if(temp.right !== null){
                queue.push(temp.right);
            }
        }
    }
}

printLeftView(bTree.root);