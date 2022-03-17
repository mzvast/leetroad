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

let sum = 0;
for (let i = 1; i <= 100000; i++) {
    if (isHappy(i)) {
        sum += i;
    }
}

console.log(sum);
