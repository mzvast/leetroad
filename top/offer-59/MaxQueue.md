## 剑指 Offer 59 - II. 队列的最大值
```
请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

示例 1：

输入: 
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
示例 2：

输入: 
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]
 

限制：

1 <= push_back,pop_front,max_value的总操作数 <= 10000
1 <= value <= 10^5
```

%

```js
// 单调队列
var MaxQueue = function () {
    this.q = [];
    this.mq = [];// 单调递减队列
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    if (this.q.length === 0) return -1;
    return this.mq[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
    this.q.push(value);
    // 入队
    while (this.mq.length > 0 && this.mq[this.mq.length - 1] < value/*允许重复*/) this.mq.pop();
    this.mq.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    if (this.q.length === 0) return -1;
    const ans = this.q.shift();
    if (ans === this.mq[0]) this.mq.shift();
    return ans;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```