var FrontMiddleBackQueue = function () {
    this.data = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
    this.data.unshift(val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
    const len = this.data.length;
    this.data.splice((len / 2) >> 0, 0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
    this.data.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
    if (this.data.length === 0) return -1;
    return this.data.shift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
    // console.log('before popMiddle', this.data);
    if (this.data.length === 0) return -1;
    const len = this.data.length;
    let ans;
    if (len % 2 === 0) {
        ans = this.data.splice(((len - 1) / 2) >> 0, 1)[0];
    } else {
        // console.log('2:',(len / 2) >> 0)
        ans = this.data.splice((len / 2) >> 0, 1)[0];
    }
    // console.log('after popMiddle', this.data,'ans:',ans);
    return ans;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
    if (this.data.length === 0) return -1;
    return this.data.pop();
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
