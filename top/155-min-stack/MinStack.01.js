var MinStack = function () {
    this._stack = [];
    this._len = 0;
    this._minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this._stack.push(val);
    this._len++;
    if (this._minStack.length > 0) {
        const newMin = Math.min(this._minStack[this._minStack.length - 1], val);
        this._minStack.push(newMin);
    } else {
        this._minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const top = this._stack.pop();
    this._len--;
    this._minStack.pop();
    return top;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    // console.log(this._stack)
    return this._stack[this._len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this._minStack[this._len - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
