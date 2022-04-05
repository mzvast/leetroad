/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    // 贪心
    let cnt5 = (cnt10 = cnt20 = 0);
    for (let x of bills) {
        if (x === 5) {
            cnt5 += 1;
        } else if (x === 10) {
            cnt10 += 1;
            if (cnt5 > 0) cnt5 -= 1;
            else {
                return false;
            }
        } else if (x === 20) {
            cnt20 += 1;
	    // 优先给10，手里留更多5
            if (cnt10 > 0 && cnt5 > 0) {
                cnt10 -= 1;
                cnt5 -= 1;
            } else if (cnt5 >= 3) {
                cnt5 -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};
