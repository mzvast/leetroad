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
var rotateRight = function (head, k) {
    if (!head) return head;
    let p = head;
    let n = 1; // node个数
    while (p.next) (p = p.next), n++;
    p.next = head; // 连成环

    k = k % n;
    k = n - k;

    while (k--) p = p.next; // 走k步
    head = p.next; // 断开
    p.next = null;
    return head;
};
