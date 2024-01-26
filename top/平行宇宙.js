// 平行宇宙中的人类也是使用26个英文字母（a-z）但是排列顺序不同（比如bcda…而不是abcd…)。提供一组词汇和平行宇宙字母排序，返回该组词汇是否是按平行宇宙的字典顺序排序。
// 例1:
// 输入: words = ["hello","apple","world"], order = "hlabcdefgijkmnopqrstuvwxyz"
// 输出: true

// 例2:
// 输入: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// 输出: false

// 例3:
// 输入: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// 输出: false

function solution(words, order) {
    const dict = {}; // ch->idx

    for (let i = 0; i < order.length; i++) {
        dict[order[i]] = i;
    }

    for (let i = 0; i < words.length - 1; i++) {
        // 两两比较
        const curWord = words[i],
            nextWord = words[i + 1];

        // 检查
        for (let j = 0; j < Math.min(curWord.length, nextWord.length); j++) {
            const curId = dict[curWord[j]],
                nextId = dict[nextWord[j]];
            if (curId > nextId) return false; // 不符合
            else if (curId < nextId) break; // 这组比较出来了
            // 相等，继续比较
        }

        // 特殊情况，apple app
        if (curWord.length > nextWord.length) return false;
    }

    return true;
}

console.log(
    solution(['hello', 'apple', 'world'], 'hlabcdefgijkmnopqrstuvwxyz')
);

console.log(solution(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz'));

console.log(solution(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz'));
