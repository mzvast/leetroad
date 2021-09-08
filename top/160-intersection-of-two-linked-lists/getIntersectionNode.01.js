// hashmap法
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // 用一个map存访问过的点
    // 先遍历完一条链表（存完）
    // 再去遍历另一条链表，在map中存在过的第一个节点，即相交的起始节点
    const visitedMap = new WeakMap();
    let cur1 = headA;
    while (cur1) {
        visitedMap.set(cur1, true);
        cur1 = cur1.next;
    }

    let cur2 = headB,
        ans = null;
    while (cur2) {
        if (visitedMap.has(cur2)) {
            ans = cur2;
            break;
        }
        cur2 = cur2.next;
    }

    return ans;
};
