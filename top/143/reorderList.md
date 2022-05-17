## 143. 重排链表

```
给定一个单链表 L 的头节点 head ，单链表 L 表示为：

L0 → L1 → … → Ln - 1 → Ln
请将其重新排列后变为：

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。



示例 1：



输入：head = [1,2,3,4]
输出：[1,4,2,3]
示例 2：



输入：head = [1,2,3,4,5]
输出：[1,5,2,4,3]


提示：

链表的长度范围为 [1, 5 * 104]
1 <= node.val <= 1000
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    // 操作流程
    // 1、从中间分成两段
    // 2、后面半截倒着插入前面的空隙中

    // 快慢指针找到中间位置

    if (!head || !head.next) return head; // 只有一个节点

    let p = (q = head);

    while (q && q.next) {
        p = p.next;
        q && q.next && (q = q.next.next);
    }
    let tail = p.next;
    // console.log(p);
    p.next = null; // 断开

    const head2 = reverseList(tail);
    // head
    // head2

    //  合并两条链表
    p = q = head; // reset
    let k = head2;
    // p := 正在处理的节点
    // q := 下一个节点
    while (p && k) {
        q = p.next;
        p.next = k;
        k = k.next; // update k
        p.next.next = q;
        p = q;
    }

    return head;

    // 递归反转整条链表
    function reverseList(head) {
        if (!head || !head.next) return head;
        let tail = head.next,
            p = reverseList(head.next);
        head.next = tail.next;
        tail.next = head;
        return p;
    }

    // 迭代反转整条链表
    //     function reverseList(head) {
    //         if (!head || !head.next) return head;
    //         let pre = null, cur = next = head;
    //         while (cur) {
    //             next = cur.next;
    //             cur.next = pre;
    //             pre = cur;
    //             cur = next;
    //         }
    //         return pre;
    //     }
};
```
