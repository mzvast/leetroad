// maxStr(x,y,z)
// 其中x,y,z代表提供的"aa","bb","ab"的字符片段的个数，求最大能拼构成的字符串长度。
// 要求字符串不能包含"aaa","bbb"。

function maxStr(x, y, z) {
    const n = x + y + z;
    let ans = '';
    bt('', 0);
    function bt(path, idx) {
        if (idx >= n) {
            if (path.length > ans.length) ans = path;
            return;
        }

        // no select
        bt(path, idx + 1);

        // select

        if (x > 0 && path.slice(-1) !== 'a') {
            x -= 1;
            bt(path + 'aa', idx + 1);
            x += 1;
        }

        if (y > 0 && path.slice(-1) !== 'b') {
            y -= 1;
            bt(path + 'bb', idx + 1);
            y += 1;
        }

        if (z > 0 && path.slice(-1) !== 'a') {
            z -= 1;
            bt(path + 'ab', idx + 1);
            z += 1;
        }
    }
    console.log(ans.length);
    return ans;
}

console.log(maxStr(3, 5, 1));

console.log(maxStr(4, 3, 2));