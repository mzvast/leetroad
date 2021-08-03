// LTE

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this._cache = new Map(); // key, {value,count}
    this._size = capacity;
    this._count = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    // console.log('get', key, this._cache)
    if (this._cache.has(key)) {
        const preState = this._cache.get(key);
        this._cache.set(key, {...preState, count: ++this._count});
        return preState.value;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // console.log('put', key);
    if (this._cache.has(key)) {
        this._cache.set(key, {value, count: ++this._count});
        return;
    }
    if (this._cache.size < this._size) {
        this._cache.set(key, {value, count: ++this._count});
        return;
    }
    // remove least used
    let leastCount = Infinity,
        leastKey;
    for (let [key, {value, count}] of this._cache.entries()) {
        // console.log('for of ', key, count);
        if (count < leastCount) {
            leastKey = key;
            leastCount = count;
        }
    }
    // console.log('delete key', leastKey)
    this._cache.delete(leastKey);
    this._cache.set(key, {value, count: ++this._count});
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
