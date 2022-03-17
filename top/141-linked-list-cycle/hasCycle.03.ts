/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) return false;
    let slow = head; // slow
    let fast = head; // fast
    if (!fast.next) return false;

    do {
        slow = slow.next;
        fast = fast.next.next;
    } while (slow !== fast && fast && fast.next);

    return Boolean(fast && fast.next);
};
