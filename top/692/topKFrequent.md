## 692. 前K个高频单词
```
给定一个单词列表 words 和一个整数 k ，返回前 k 个出现次数最多的单词。

返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率， 按字典顺序 排序。

 

示例 1：

输入: words = ["i", "love", "leetcode", "i", "love", "coding"], k = 2
输出: ["i", "love"]
解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
    注意，按字母顺序 "i" 在 "love" 之前。
示例 2：

输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
输出: ["the", "is", "sunny", "day"]
解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
    出现次数依次为 4, 3, 2 和 1 次。
 

注意：

1 <= words.length <= 500
1 <= words[i] <= 10
words[i] 由小写英文字母组成。
k 的取值范围是 [1, 不同 words[i] 的数量]
 

进阶：尝试以 O(n log k) 时间复杂度和 O(n) 空间复杂度解决。
```

%

```js
// 小顶堆

// MinHeap
class MinHeap {
    constructor(less) {
        this.data = [null]
        this.less = less;
    }

    insert(x) {
        this.data.push(x);
        this.swim();
    }

    swim() {
        let idx = this.data.length - 1;
        while (true) {
            const pid = idx >> 1;
            if (idx > 1 && this.less(this.data[idx], this.data[pid])) {
                this.swap(idx, pid);
                idx = pid;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.size() === 0) return;
        this.swap(1, this.data.length - 1);
        let ans = this.data.pop();
        this.sink();
        return ans;
    }

    sink() {
        let idx = 1;
        while (idx * 2 < this.data.length) {
            let leftIdx = idx * 2,
                rightIdx = leftIdx + 1;
            let tmp = idx;
            if (this.less(this.data[leftIdx], this.data[tmp])) tmp = leftIdx;
            if (rightIdx < this.data.length && this.less(this.data[rightIdx], this.data[tmp])) tmp = rightIdx;
            if (tmp === idx) break;
            this.swap(idx, tmp);
            idx = tmp;
        }
    }

    swap(i, j) {
        const tmp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = tmp;
    }

    size() {
        return this.data.length - 1;
    }
}
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    const freq = {};
    for (let x of words) freq[x] = (freq[x] || 0) + 1;

    function less(a, b) {
        if (freq[a] === freq[b]) return a > b;
        return freq[a] < freq[b];
    }
    const h = new MinHeap(less);
    for (let x in freq) {
        // const cnt = freq[x];
        h.insert(x);
        if (h.size() > k) h.remove();
    }
    return h.data.slice(1).sort(CMP);


    function CMP(a, b) {
        return less(a, b) ? 1 : -1;
    }
};
```