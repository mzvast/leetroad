## 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
```
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。

 

示例 1：



输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
示例 2：



输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
示例 3：



输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
 

提示：

链表中节点的数目范围在范围 [0, 104] 内
-105 <= Node.val <= 105
pos 的值为 -1 或者链表中的一个有效索引
 

进阶：你是否可以使用 O(1) 空间解决此题？
```

%

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    //      x    y
    // --------|---|
    //        z|___|
    // 假设入环点距离起点x
    // 相遇点距离入环点y
    // 还要走z到达环入口
    // 那么根据快慢指针有如下关系
    // 快指针走了 x+y+z+y
    // 慢指针走了 x+y
    // 因为快指针速度是慢指针的2倍
    // 2(x+y) = x+y+z+y
    // x = z
    // 因此若把一个指针放回起点，则再次相遇点即入环点

    // 1、求出相交点
    let p = q = head;
    while (q && q.next) {
        p = p.next;
        q = q.next.next;
        if (p === q) break;
    }
    if (!q || !q.next) return null;// 无环

    // 2、求入口
    q = head;
    while (p !== q) {
        p = p.next;
        q = q.next;
    }

    return q;

};
```