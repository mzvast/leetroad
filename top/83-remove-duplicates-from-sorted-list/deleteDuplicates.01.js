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
var deleteDuplicates = function (head) {
    if (!head) return head;
    let p = head;
    // 比较p和后面的节点，如果一样，就删除，否则p走1步
    while (p.next) {
        if (p.next.val === p.val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;
};
