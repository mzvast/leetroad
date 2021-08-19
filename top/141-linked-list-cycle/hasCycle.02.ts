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
    let fastCur = head,
        slowCur = head;
    while (fastCur) {
        if (fastCur.next === null) {
            return false;
        }
        slowCur = slowCur.next;
        fastCur = fastCur.next.next;
        if (slowCur === fastCur) return true;
    }
    return false;
};
