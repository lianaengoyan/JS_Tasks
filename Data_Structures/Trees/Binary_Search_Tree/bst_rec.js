import { Queue } from "./queue.js";

//BINARY SEARCH TREE (RECUSION)

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
    #insert(node, val) {
        if(!node) return new TreeNode(val);

        if(val < node.data) node.left = this.#insert(node.left, val);
        else if(val > node.data) node.right = this.#insert(node.right, val);

        return node;
    }

    #contains(node, key) {
        if (!node) return false;
        if(node.data === key) return true;

        if(key < node.data) return this.#contains(node.left, key);
        else if(key > node.data) return  this.#contains(node.right, key);

        return false;
    }

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

    #get_height(node) {
        if(!node) return 0;
        return 1 + Math.max(this.#get_height(node.left), this.#get_height(node.right));
    }

    //INTERFACE
    insert(val) {
        this.#root = this.#insert(this.#root, val);
    }
    

    contains(key) {
        return this.#contains(this.#root, key);
    }


    lvl_order() {
        let node = this.#root;
        if(!node) return null;
        let res = [];

        const queue = new Queue();
        queue.enqueue(node);

        const helper = (node) => {
            if(queue.isEmpty()) return;

            node = queue.dequeue();
            res.push(node.data);

            if(node.left) queue.enqueue(node.left);
            if(node.right) queue.enqueue(node.right);

            helper();
        }

        helper();
        return res;
    }

    inorder() {
        let node = this.#root;
        let res = [];

        const traverse = (node) => {
            if(!node) return;
            traverse(node.left);
            res.push(node.data);
            traverse(node.right);
        }

        traverse(node);
        return res;
    }

    postorder(){
        let node = this.#root;
        let res = [];

        const traverse = (node) => {
            if(!node) return;
            traverse(node.left);
            traverse(node.right);
            res.push(node.data);
        }

        traverse(node);
        return res;
    }

    preorder(){
        let node = this.#root;
        let res = [];

        const traverse = (node) => {
            if(!node) return;
            res.push(node.data);
            traverse(node.left);
            traverse(node.right);
        }

        traverse(node);
        return res;
    }

    get_Height() {
        return this.#get_height(this.#root);

    }

    remove(val) {
        if(!this.#root) return false;
        
        this.#root = this.#remove(this.#root, val);
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
console.log("lvl Order:", bst.lvl_order());
console.log("INORDER: ", bst.inorder());

console.log("--------------------------------");

console.log("POST:", bst.postorder());
console.log("PRE:", bst.preorder());

console.log("BST's height is:", bst.get_Height());

bst.remove(45);
bst.remove(50);
bst.remove(35);

console.log(bst.inorder());
console.log("BST's height is:", bst.get_Height());
