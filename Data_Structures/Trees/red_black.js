const RED = 'RED';
const BLACK = 'BLACK';

class TreeNode {
    constructor(data, color = RED, parent = null, left = null, right = null) {
        this.data = data;
        this.color = color;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }
}

class RBTree {
    constructor() {
        this.nil = new TreeNode(null);
        this.nil.color = BLACK;
        this.root = this.nil;
    }

    rotateLeft(current) {
        let pivotNode = current.right;
        current.right = pivotNode.left;

        if(pivotNode.left !== this.nil) {

        }

        pivotNode.parent = current.parent;

        if(current.parent === this.nil) {
            this.root = pivotNode;
        } else if(current === current.parent.left) {
            current.parent.left = pivotNode;
        } else {
            current.parent.right = pivotNode;
        }

        pivotNode.left = current;
        current.parent = pivotNode;
    }

    rotateRight(current) {
        let pivotNode = current.left;
        current.left = pivotNode.right;

        if (pivotNode.right !== this.nil) {
            pivotNode.left.parent = current;
        }

        pivotNode.parent = current.parent;

        if (current.parent === this.nil) {
            this.root = pivotNode;
        } else if(current === current.parent.right){
            current.parent.right = pivotNode;
        } else {
            current.parent.left = pivotNode;
        }

        pivotNode.right = current;
        current.parent = pivotNode;
    }

    insertFixUp(newNode) {
        while (newNode.parent.color === RED) {
            let grandparent = newNode.parent.parent;

            if (newNode.parent === grandparent.left) {
                let uncleNode = grandparent.right;
                    if (newNode.parent.color === RED && uncleNode.color === RED) {
                        newNode.parent.color = BLACK;
                        uncleNode.color = BLACK;
                        grandparent.color = RED;
                        newNode = grandparent;
                    } else {
                        if (newNode === newNode.parent.right) {
                            newNode = newNode.parent;
                            this.rotateLeft(newNode);
                        }

                        newNode.parent.color = BLACK;
                        grandparent.color = RED;
                        this.rotateRight(grandparent);
                    }
            }
        }
        this.root.color = BLACK;
    }
  
    insert(data) {
        const newNode = new TreeNode(data);
        let parentNode = this.nil;
        let current = this.root;

        while (current !== this.nil) {
            parentNode = current;
                if (newNode.data < current.data) {
                    current = current.left;
                } else if (newNode.data > current.data) {
                    current = current.right;
                } else {
                    return;
                }
        }

        if (parentNode === this.nil) {
            this.root = newNode;
        } else if (newNode.data < parentNode.data) {
            parentNode.left = newNode;
        } else {
            parentNode.right = newNode;
        }

        newNode.parent = parentNode;
        newNode.left = newNode.right = this.nil;

        this.insertFixUp(newNode);
    }
}

const rb = new RBTree();

rb.insert(10);
rb.insert(5);
rb.insert(8);
rb.insert(3);
rb.insert(1);
rb.insert(20);
