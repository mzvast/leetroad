## 148. 排序链表
```
给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

 

示例 1：


输入：head = [4,2,1,3]
输出：[1,2,3,4]
示例 2：


输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
示例 3：

输入：head = []
输出：[]
 

提示：

链表中节点的数目在范围 [0, 5 * 104] 内
-105 <= Node.val <= 105
 

进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
```

%

```js
// 归并排序
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    let n = 0, p = head;
    while (p) p = p.next, n += 1;

    return mergeSort(head, n);

    function mergeSort(head, n) {
        if (!head || !head.next) return head;
        const l = n >> 1, r = n - l;

        let lp = head, rp = head;

        // 将链表拆成左右两部分
        for (let i = 1; i < l; i++, rp = rp.next);
        let p = rp;
        rp = rp.next;
        p.next = null;// disconnect

        lp = mergeSort(lp, l);
        rp = mergeSort(rp, r);

        const vHead = new ListNode();
        // 合并有序链表
        let k = vHead;
        while (lp || rp) {
            if (!rp || (lp && lp.val < rp.val)) {
                k.next = lp;
                lp = lp.next;
            } else {
                k.next = rp;
                rp = rp.next;
            }

            k = k.next;
        }
        return vHead.next;
    }
};
```