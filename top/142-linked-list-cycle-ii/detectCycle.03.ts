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
    if (!head) return null;
    let slow = head;
    let fast = head;
    if (!fast.next) return null;
    do {
        slow = slow.next;
        fast = fast.next.next;
    } while (slow !== fast && fast && fast.next)

    if (slow !== fast) return null;//没环

    console.log(fast.val);
    // 有环
    // fast放回起点

    fast = head;
    while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }
    // 相遇
    return fast;
};