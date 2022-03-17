/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    // 链表判环问题

    let slow = n,
        fast = n;

    do {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    } while (fast !== slow && fast !== 1);

    return fast === 1;

    function getNext(x) {
        let sum = 0;
        while (x) {
            sum += (x % 10) * (x % 10);
            x = (x / 10) >> 0; //取整数
        }
        return sum;
    }
};
