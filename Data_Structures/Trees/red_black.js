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
    #root;
    #nil;

    constructor() {
        this.#nil = new TreeNode(null);
        this.#nil.color = BLACK;
        this.#root = this.#nil;
    }

    #rotateLeft(current) {
        let pivotNode = current.right;
        current.right = pivotNode.left;

        if(pivotNode.left !== this.#nil) {
            pivotNode.left.parent = current;
        }

        pivotNode.parent = current.parent;

        if(current.parent === this.#nil) {
            this.#root = pivotNode;
        } else if(current === current.parent.left) {
            current.parent.left = pivotNode;
        } else {
            current.parent.right = pivotNode;
        }

        pivotNode.left = current;
        current.parent = pivotNode;
    }

    #rotateRight(current) {
        let pivotNode = current.left;
        current.left = pivotNode.right;

        if (pivotNode.right !== this.#nil) {
            pivotNode.right.parent = current;
        }

        pivotNode.parent = current.parent;

        if (current.parent === this.#nil) {
            this.#root = pivotNode;
        } else if(current === current.parent.right){
            current.parent.right = pivotNode;
        } else {
            current.parent.left = pivotNode;
        }

        pivotNode.right = current;
        current.parent = pivotNode;
    }

    #insertFixUp(newNode) {
        while (newNode.parent.color === RED) {
            let grandparent = newNode.parent.parent;
    
            if (newNode.parent === grandparent.left) {
                let uncle = grandparent.right;
    
                if (uncle.color === RED) {
                    newNode.parent.color = BLACK;
                    uncle.color = BLACK;
                    grandparent.color = RED;
                    newNode = grandparent;
                } else {
                    if (newNode === newNode.parent.right) {
                        newNode = newNode.parent;
                        this.#rotateLeft(newNode);
                    }
                    newNode.parent.color = BLACK;
                    grandparent.color = RED;
                    this.#rotateRight(grandparent);
                }
            } else {
                let uncle = grandparent.left;
    
                if (uncle.color === RED) {
                    newNode.parent.color = BLACK;
                    uncle.color = BLACK;
                    grandparent.color = RED;
                    newNode = grandparent;
                } else {
                    if (newNode === newNode.parent.left) {
                        newNode = newNode.parent;
                        this.#rotateRight(newNode);
                    }
                    newNode.parent.color = BLACK;
                    grandparent.color = RED;
                    this.#rotateLeft(grandparent);
                }
            }
        }
    
        this.#root.color = BLACK;
    }
    
    #transplant(oldNode, newNode) {
        if(oldNode.parent === this.#nil) this.#root = newNode;
        else if(oldNode === oldNode.parent.left) {
            oldNode.parent.left = newNode;
        } else {
            oldNode.parent.right = newNode;
        }

        newNode.parent = oldNode.parent;
    }

    #minNode(curr) {
        while(curr.left !== this.#nil) {
            curr = curr.left;
        }
        return curr;
    }
    
    insert(val) {
        const newNode = new TreeNode(val);
        let parentNode = this.#nil;
        let current = this.#root;

        while (current !== this.#nil) {
            parentNode = current;
                if (newNode.data < current.data) {
                    current = current.left;
                } else if (newNode.data > current.data) {
                    current = current.right;
                } else {
                    return;
                }
        }

        if (parentNode === this.#nil) {
            this.#root = newNode;
        } else if (newNode.data < parentNode.data) {
            parentNode.left = newNode;
        } else {
            parentNode.right = newNode;
        }

        newNode.parent = parentNode;
        newNode.left = newNode.right = this.#nil;

        this.#insertFixUp(newNode);
    }

    search(val) {
        if(!this.#root) return null;
        let curr = this.#root;

        while(curr !== this.#nil) {
            if(val === curr.data) return curr;
            else if(val < curr.data) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        return null;
    }

    minNode() {
        if(!this.#root) return null;
        let curr = this.#root;

        while(curr.left !== this.#nil) {
            curr = curr.left;
        }

        return curr.data;
    }
    
    print(node = this.#root, indent = "", isLeft = true) {
        if (node === this.#nil || node.data === null) return;
    
        if (node.right !== this.#nil) {
            this.print(node.right, indent + (isLeft ? "│   " : "    "), false);
        }
    
        const symbol = node.color === RED ? "R" : "B";
        console.log(indent + (isLeft ? "└── " : "┌── ") + `${node.data} ${symbol}`);
    
        if (node.left !== this.#nil) {
            this.print(node.left, indent + (isLeft ? "    " : "│   "), true);
        }
    }
    
}

const rb = new RBTree();

rb.insert(10);
rb.insert(5);
rb.insert(8);
rb.insert(3);
rb.insert(1);
rb.insert(20);

rb.print();
