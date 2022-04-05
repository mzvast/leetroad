## LFUCache
核心3张表
1、key=>Val
2、key=>Freq
3、Freq=>Keys集合
```js
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    this.KV = new Map(); // key:val
    this.KF = new Map(); // key:freq
    this.FKs = new Map(); // freq:Set(key)
    this.cap = capacity;
    this.minFreq = 1;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    if (!this.KV.has(key)) return -1;
    // freq+1
    this.increaseFreq(key);
    return this.KV.get(key);
};

LFUCache.prototype.increaseFreq = function (key) {
    /** KF */
    const freq = this.KF.get(key);
    this.KF.set(key, freq + 1);
    /** FKs */
    this.FKs.get(freq).delete(key);
    if (this.FKs.has(freq + 1)) {
        this.FKs.get(freq + 1).add(key);
    } else {
        this.FKs.set(freq + 1, new Set([key]));
    }
    // check if minFreq set empty
    if (this.FKs.get(this.minFreq).size === 0) {
        this.minFreq++;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
    if (this.cap === 0) return;
    if (this.KV.has(key)) {
        /** KV */
        this.KV.set(key, value);
        this.increaseFreq(key);
        return;
    }
    if (this.KV.size >= this.cap) {
        // remove LFU
        // delete
        this.removeMinFreq();
    }

    // add
    /** KV */
    this.KV.set(key, value);
    /** KF */
    this.KF.set(key, 1);
    /** FKs */

    if (this.FKs.has(1)) {
        this.FKs.get(1).add(key);
    } else {
        this.FKs.set(1, new Set([key]));
    }
    this.minFreq = 1;
};
LFUCache.prototype.removeMinFreq = function () {
    const deletedKey = this.FKs.get(this.minFreq).values().next().value;
    /** KV */
    this.KV.delete(deletedKey);
    /** KF */
    this.KF.delete(deletedKey);
    /** FKs */
    this.FKs.get(this.minFreq).delete(deletedKey);
};
/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```