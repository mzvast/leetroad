## 705. 设计哈希集合
```
不使用任何内建的哈希表库设计一个哈希集合（HashSet）。

实现 MyHashSet 类：

void add(key) 向哈希集合中插入值 key 。
bool contains(key) 返回哈希集合中是否存在这个值 key 。
void remove(key) 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。
 
示例：

输入：
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
输出：
[null, null, null, true, false, null, true, null, false]

解释：
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // 返回 True
myHashSet.contains(3); // 返回 False ，（未找到）
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // 返回 True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // 返回 False ，（已移除）
 

提示：

0 <= key <= 106
最多调用 104 次 add、remove 和 contains
```

%

```js
// 拉链法
class Node {
    constructor(key = null, next = null) {
        this.key = key;
        this.next = next;
    }

    insertAfter(x) {
        x.next = this.next;
        this.next = x;
    }

    removeAfter() {
        if (this.next === null) return;
        const p = this.next;
        this.next = this.next.next;
        p.next = null;
    }
}
function hashFn(x) {
    return x & 0x7fffffff;// 非负数
}
var MyHashSet = function () {
    this.data = Array(100).fill().map(() => new Node()); // 虚头
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    if (this.contains(key)) return;
    const idx = hashFn(key) % this.data.length;
    this.data[idx].insertAfter(new Node(key));// 头插法
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    const idx = hashFn(key) % this.data.length;
    let p = this.data[idx];
    while (p.next && p.next.key !== key) p = p.next;
    p.removeAfter();
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    const idx = hashFn(key) % this.data.length;
    let p = this.data[idx].next;
    while (p && p.key !== key) p = p.next;
    return p !== null;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
```