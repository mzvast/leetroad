// backtrack
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//@ts-ignore
 var findTargetSumWays = function (nums, target) {
    const n = nums.length;
    let ans = 0, tmp = 0;
    const ops = [1, -1];

    backtrack(0);

    return ans;

    function backtrack(i) {
        if (i === n) {
            if (tmp === target) { ans++ }
            return;
        }
        for (let op of ops) {
            tmp += op * nums[i];
            backtrack(i + 1);
            tmp -= op * nums[i];
        }
    }
};