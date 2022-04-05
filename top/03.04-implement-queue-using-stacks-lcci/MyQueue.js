/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.s1 = []; // 进
    this.s2 = []; // 出
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.s1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    this.transfer();
    return this.s2.pop();
};
MyQueue.prototype.transfer = function () {
    if (this.s2.length === 0) {
        // s1转移到s2
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
};
/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    this.transfer();
    return this.s2[this.s2.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.s1.length === 0 && this.s2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
