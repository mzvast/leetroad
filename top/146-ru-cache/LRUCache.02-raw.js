// LinkedHashMap

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoubleList {
    // a<->b<->c ,右边最新
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
        x.prev.next = x;
        this.tail.prev = x;
        this._size++;
    }

    remove(x) {
        x.prev.next = x.next;
        x.next.prev = x.prev;
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
    this.map = new Map(); // key <=> Node
    this.cache = new DoubleList();
    this.cap = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        const node = this.map.get(key);
        this.cache.remove(node);
        this.cache.addLast(node);
        return node.val;
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
        const node = this.map.get(key);
        this.cache.remove(node);
        this.map.delete(key);

        const newNode = new Node(key, value);
        this.cache.addLast(newNode);
        this.map.set(key, newNode);
        return;
    }
    if (this.cap === this.cache.size()) {
        // remove LeastRecently
        const node = this.cache.removeFirst();
        this.map.delete(node.key);
    }

    const node = new Node(key, value);
    this.cache.addLast(node);
    this.map.set(key, node);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
