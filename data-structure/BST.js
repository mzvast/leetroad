class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

function getNewNode(key) {
    return new Node(key);
}

function clear(root) {
    if (root === null) return null;
    clear(root.left);
    clear(root.right);
    delete root;
}

function insert(root, key) {
    if (root === null) return getNewNode(key);
    if (root.left === key) return root;
    if (key < root.key) root.left = insert(root.left, key);
    else root.right = insert(root.right, key);
    return root;
}
// 返回前驱节点
function predecessor(root) {
    let tmp = root.left;
    while (tmp.right) tmp = tmp.right;
    return tmp;
}

function remove(root, key) {
    if (root === null) return root;
    if (key < root.key) {
        root.left = remove(root.left, key);
    } else if (key > root.key) {
        root.right = remove(root.right, key);
    } else {
        if (root.left === null && root.right === null) {
            // 出度为0
            delete root;
            return null;
        } else if (root.left === null || root.right === null) {
            // 出度为1
            const tmp = root.left ? root.left : root.right;
            delete root;
            return tmp;
        } else {
            // 出度为2
            const tmp = predecessor(root);
            root.key = tmp.key;
            root.left = remove(root.left, tmp.key);
        }
    }
    return root;
}

function output(root) {
    //     console.log('root:', root);
    if (root === null) return;
    output(root.left);
    console.log(root.key); //! 重要。有序访问BST的所有节点
    output(root.right);
}

function main() {
    const adds = [3, 2, 1, 5, 4];
    const removes = [3, 4];
    let root = null;
 
    for (let x of adds) root = insert(root, x);
    for (let x of removes) root = remove(root, x);
    output(root);
}

main();
