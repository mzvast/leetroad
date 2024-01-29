function getResults(s) {
    const sp = s + '$';
    let ans = 0;
    let curStr,
        cnt = 0;
    for (let x of sp) {
        if (!curStr) curStr = x;
        else if (curStr !== x) {
            // 不相等
            if (cnt > 1) ans += 1;
            curStr = x;
            cnt = 1;
        } else if (curStr === x) {
            // 相等
            cnt++;
        }
    }

    return ans;
}


// 2、UnionSet

console.log(getResults('bccaadaazzz')); //3
console.log(getResults('aaabbbcccd')); // 3
