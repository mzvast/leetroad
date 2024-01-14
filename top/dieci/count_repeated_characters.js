// 字符串中叠词数量

function count_repeated_characters(str) {
    str = str + '#';
    let cur = '',
        cnt = 0,
        ans = 0;

    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (c !== cur) {
            // update ans
            if (cnt > 1) {
                ans += 1;
            }
            cur = c;
            cnt = 1;
        } else {
            cnt += 1;
        }
    }

    return ans;
}

console.log(count_repeated_characters('hellloo') === 2);
console.log(count_repeated_characters('hell') === 1);
