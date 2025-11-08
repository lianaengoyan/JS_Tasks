class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVL {
    #root;

    constructor(data) {
        if(data === null || data === undefined) {
            this.#root = null;
            return;
        } else {
            this.#root = new TreeNode(data);
        }
    }

    #helper_insert(node, val) {
        if(!node) return new TreeNode(val);

        if(val < node.data) {
            node.left = this.#helper_insert(node.left, val);
        } else if(val > node.data) {
            node.right = this.#helper_insert(node.right, val);
        } else {
            return node;
        }

        node.height = this.#height_Update(node);
        let bf = this.#balanceFactor(node);

        if(bf > 1 && node.left.left) {
            node = this.#rightRotation(node);
        } else if(bf < -1 && node.right.right) {
            node = this.#leftRotation(node);
        } else if(bf < -1 && node.right.left) {
            node.right = this.#rightRotation(node.right);
            node = this.#leftRotation(node);
        } else if(bf > 1 && node.left.right){
            node.left = this.#leftRotation(node.left);
            node = this.#rightRotation(node);
        }
        return node;
    }


    #balanceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    #rightRotation(node) {
        let newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;

        node.height = this.#height_Update(node);
        newRoot.height = this.#height_Update(newRoot);

        return newRoot;
    }

    #leftRotation(node) {
        let newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;

        node.height = this.#height_Update(node);
        newRoot.height = this.#height_Update(newRoot);

        return newRoot;
    }

    #height_Update(node) {
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    #helper_search(node, val) {
        if(!node) return false;
        if(val === node.data) return true;

        if(val < node.data) {
            return this.#helper_search(node.left, val);
        } else {
            return  this.#helper_search(node.right, val);
        } 
    }

    #getMin(node) {
        while(node.left) {
            node = node.left;
        }
        return node;
    }

    #remove(node, value) {
        if(!node) return null;
        if(value < node.data) {
            node.left = this.#remove(node.left, value);
        } else if(value > node.data) {
            node.right = this.#remove(node.right, value);
        } else {
            if(!node.left) return node.right;
            if(!node.right) return node.left;
            else {
                let s = this.#getMin(node.right);
                node.data = s.data;
                node.right = this.remove(node.right, s.data);
            }
        }

        node.height = this.#height_Update(node);
        let bf = this.#balanceFactor(node);

        if (bf > 1) {
            if (this.#balanceFactor(node.left) >= 0) {
                node = this.#rightRotation(node);
            } else {
                node.left = this.#leftRotation(node.left);
                node = this.#rightRotation(node);
            }
        }

        if (bf < -1) {
            if (this.#balanceFactor(node.right) <= 0) {
                node = this.#leftRotation(node);
            } else {
                node.right = this.#rightRotation(node.right);
                node = this.#leftRotation(node);
            }
        }
        return node;
    }

    insert(val) {
        this.#root = this.#helper_insert(this.#root, val);
    }

    remove(val) {
        this.#root = this.#remove(this.#root, val);
    }

    search(val) {
       return this.#helper_search(this.#root, val);
    }

    getHeight(node) {
        return node ? node.height : 0;
    }

    level_order() {
        if (!this.#root) return;
        const q = [this.#root];
        let out = '';
        while (q.length) {
            const node = q.shift();
            out += node.data + ' ';
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        console.log(out);
    }
}

const avl = new AVL();
avl.insert(25);
avl.insert(24);
avl.insert(15);
avl.insert(85);
avl.insert(65);
avl.level_order();

console.log(avl.search(65));
avl.remove(85);
avl.level_order();
