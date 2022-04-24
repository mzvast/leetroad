## 25. K 个一组翻转链表
```
给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

 

示例 1：


输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]
示例 2：



输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]
 

提示：
链表中的节点数目为 n
1 <= k <= n <= 5000
0 <= Node.val <= 1000
 

进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？
```
%
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    // p->[q-> ...]
    // p->[...->q]

    let vHead = new ListNode(0, head),
        p = vHead, // 待反转的前一个
        q = p.next; // 反转之后的尾节点
    while ((p.next = reverseN(q, k)) !== q) {
        p = q;
        q = p.next;
    }

    return vHead.next;

    function reverseN(head, n) {
        let p = head;
        const cnt = n;
        while (--n && p) p = p.next;
        if (!p) return head; // 不够n个
        return _reverseN(head, cnt);
    }
    function _reverseN(head, n) {
        if (n === 1) return head;
        let tail = head.next,
            p = _reverseN(head.next, n - 1);
        head.next = tail.next;
        tail.next = head;
        return p;
    }
};
```