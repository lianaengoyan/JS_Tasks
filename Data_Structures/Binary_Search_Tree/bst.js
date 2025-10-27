import { Queue } from "./queue.js";

//BINARY SEARCH TREE

class TreeNode {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

class BST {
    #root;

    constructor() {
        this.#root = null;
    }

    //HELPERS
    #remove(node, val) {
        if(!node) return null;

        if(val < node.data) node.left = this.#remove(node.left, val);
        else if(val > node.data) node.right = this.#remove(node.right, val);

        else {
            if(!node.left) return node.right;
            if(!node.right) return node.left;
            
            let s = this.#get_min(node.right);
            node.data = s.data;
            node.right = this.#remove(node.right, s.data);
            
        } 
        return node;
    }

    #get_min(node) {
        if(!node) return null;
        let curr = node;

        while(curr.left) curr = curr.left;

        return curr;
    }

    //INTERFACE
    insert(val) {
        if(!this.#root) {
            this.#root = new TreeNode(val);
            return;
        }

        let current = this.#root;

        while(current) {
            if(val === current.data) return;

            if(val < current.data) {
                if(!current.left) {
                    current.left = new TreeNode(val);
                    return;
                }
                current = current.left;
            } else {
                if(!current.right) {
                    current.right = new TreeNode(val);
                    return;
                }
                current = current.right;
            }
        }
    }

    constains(key) {
        if(!this.#root) return false;
        let current = this.#root;

        while(current) {
            if(key === current.data) return true;

            if(key < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    lvl_Order() {
        if(!this.#root) return null;
        let current = this.#root;

        let res = [];
        const queue = new Queue();
        queue.enqueue(current);

        while(!queue.isEmpty()) {
            let node = queue.dequeue();
            res.push(node.data);

            if(node.left) queue.enqueue(node.left);
            if(node.right) queue.enqueue(node.right);
        }
        return res;
    }

    inorder() {
        if(!this.#root) return;
        let current = this.#root;

        const res = [];
        let stack = [];

        while(stack.length > 0 || current) {
            while(current) {
                stack.push(current);
                current = current.left;
            }

            current = stack.pop();
            res.push(current.data);

            current = current.right;
        }
        return res;
    }

    postorder() {
        if(!this.#root) return null;
        let current = this.#root;

        let res = [];
        let stack = [];
        stack.push(current);

        while(stack.length) {
            let node = stack.pop();
            res.unshift(node.data);

            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);
        }
        return res;
    }

    preorder() {
        if(!this.#root) return null;
        let current = this.#root;

        let res = [];
        let stack = [];
        stack.push(current);

        while(stack.length) {
            let node = stack.pop();
            res.push(node.data);

            if(node.right) stack.push(node.right);
            if(node.left) stack.push(node.left);
        }
        return res;
    }

    getHeight() {
        if(!this.#root) return 0;

        const queue = new Queue();
        queue.enqueue(this.#root);
        let height = 0;

        while(!queue.isEmpty()) {
            let lvl_size = queue.getSize();

            for(let i = 0; i < lvl_size; ++i) {
                let node = queue.dequeue();

                if(node.left) queue.enqueue(node.left);
                if(node.right) queue.enqueue(node.right);
            }
            height++;
        }
        return height;
    }

    remove(val) {
        if(!this.#root) return false;
        
        this.#root = this.#remove(this.#root, val);
    }

    get_Successor(node) {
        if(!node) return node;
        if(node.right) return this.#get_min(node.right);

        let parent = null;
        let current = this.#root;

        while(current) {
            if(node.data < current.data) {
                parent = current;
                current = current.left; 
            } else if (node.data > current.data) {
                current = current.right;
            } else {
                break;
            }
        }
        return parent;
    }

    print() {
        if (!this.#root) {
            console.log("Tree is empty");
            return;
        }

        const queue = new Queue();
        queue.enqueue(this.#root);

        while (!queue.isEmpty()) {
            let lvlSize = queue.getSize();
            let lvlValues = [];

            for (let i = 0; i < lvlSize; i++) {
                const node = queue.dequeue();
                lvlValues.push(node.data);

                if (node.left) queue.enqueue(node.left);
                if (node.right) queue.enqueue(node.right);
            }
            console.log(lvlValues.join(" "));
        }
    }
}


const bst = new BST();
bst.insert(50);
bst.insert(60);
bst.insert(40);
bst.insert(55);
bst.insert(45);
bst.insert(35);

bst.print();
console.log(bst.lvl_Order());
console.log(bst.inorder());

console.log("--------------------------------");

console.log("POST:", bst.postorder());
console.log("PRE:", bst.preorder());
console.log("BST's height is:", bst.getHeight());

bst.remove(45);
bst.remove(50);
bst.remove(35);

console.log(bst.inorder());
console.log("BST's height is:", bst.getHeight());

