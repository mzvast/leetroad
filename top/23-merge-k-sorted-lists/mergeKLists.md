## 23. 合并K个升序链表
```
给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

 

示例 1：

输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
示例 2：

输入：lists = []
输出：[]
示例 3：

输入：lists = [[]]
输出：[]
 

提示：

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] 按 升序 排列
lists[i].length 的总和不超过 10^4
```
%
```js
// 最小堆+归并排序
class MinHeap {
    constructor() {
        this.data = [null];
    }

    insert(x) {
        this.data.push(x);
        this.swim();
    }
    // 向上调整
    swim() {
        let idx = this.data.length - 1;
        while (true) {
            const pid = idx >> 1;
            if (pid > 0 && this.data[idx].val < this.data[pid].val) {
                this.swap(idx, pid);
                idx = pid;
            } else {
                break;
            }
        }
    }

    // 向下调整
    sink() {
        let idx = 1;
        while (idx * 2 < this.data.length) {
            let leftIdx = idx * 2, rightIdx = leftIdx + 1, tmp = idx;
            if (this.data[leftIdx].val < this.data[tmp].val) tmp = leftIdx;
            if (rightIdx < this.data.length && this.data[rightIdx].val < this.data[tmp].val) tmp = rightIdx;
            if (idx === tmp) break;
            this.swap(idx, tmp);
            idx = tmp;
        }
    }

    remove() {
        if (this.size() === 0) return;
        this.swap(1, this.data.length - 1);
        const ans = this.data.pop();
        this.sink();
        return ans;
    }

    size() {
        return this.data.length - 1;
    }

    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }

}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {

    const vHead = new ListNode();

    let p = vHead;

    const h = new MinHeap();
    for (let list of lists) {
       if(list) h.insert(list);
    }
    while (h.size() > 0) {
        const cur = h.remove();
        p.next = cur;
        p = p.next;
        if (cur.next) h.insert(cur.next);
    }

    return vHead.next;

};
```

```js
// 顺序合并
// 时间复杂度高
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {

    const vHead = new ListNode();

    let p = vHead,// 待合并的前一个指针
        q;// 当前指针
    while ((q = getNext()) !== null) {
        p.next = q;
        p = p.next;
    }

    return vHead.next;

    function getNext() {
        let minIdx = -1, minNode = null, minVal = Infinity;
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] && lists[i].val < minVal) {
                minNode = lists[i];
                minIdx = i;
                minVal = minNode.val;
            }
        }
        // all ends
        if (minIdx === -1) return null;
        // update pointer
        lists[minIdx] = lists[minIdx].next;
        return minNode;
    }
};
```

