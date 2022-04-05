## LRUCache
核心数据结构：哈希链表
HashMap存储节点引用，以便O1内访问
DoubleList存储key和val。头部最老，尾部最新。
```js
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoubleList {
    // a<->b<->c , tail是最新的
    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this._size = 0;
    }
    addLast(x) {
        x.prev = this.tail.prev;
        x.next = this.tail;
        this.tail.prev.next = x;
        this.tail.prev = x;
        this._size++;
    }
    remove(x) {
        x.prev.next = x.next;
        x.next.prev = x.prev;
        // x.prev = null;
        // x.next = null;
        this._size--;
    }
    removeFirst() {
        if (this.head.next === null) return null;
        const head = this.head.next;
        this.remove(head);
        return head;
    }
    size() {
        return this._size;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.map = new Map(); // key=> Node
    this.cache = new DoubleList();
    this.cap = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        this.makeRecently(key);
        return this.map.get(key).val;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this.deleteKey(key);
        this.addRecently(key, value);
        return;
    }
    if (this.cap === this.cache.size()) {
        this.removeLeastRecently();
    }
    this.addRecently(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

LRUCache.prototype.makeRecently = function (key) {
    const node = this.map.get(key);
    this.cache.remove(node);
    this.cache.addLast(node);
};
LRUCache.prototype.addRecently = function (key, val) {
    const node = new Node(key, val);
    this.cache.addLast(node);
    this.map.set(key, node);
};
LRUCache.prototype.deleteKey = function (key) {
    const node = this.map.get(key);
    this.cache.remove(node);
    this.map.delete(key);
};
LRUCache.prototype.removeLeastRecently = function (key) {
    const node = this.cache.removeFirst();
    const deletedKey = node.key;
    this.map.delete(deletedKey);
};
```