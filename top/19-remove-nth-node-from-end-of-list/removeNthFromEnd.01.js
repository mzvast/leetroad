/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 快慢指针
    let fast = head,
        slow = head,
        step = n;

    while (fast && step > 0) {
        fast = fast.next;
        step--;
    }

    // 走完了，说明要删头，直接返回第二个
    if (fast === null) {
        return head.next;
    }

    // fast走到最后一个，slow正好是要删除的前一个Node
    while (fast && fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return head;
};
