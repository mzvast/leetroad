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
    let vHead = new ListNode(0, head), // 要删除的前一个节点
        p = vHead,
        q = p;

    // q先走n步
    while (n--) q = q.next;

    // p,q一起走
    while (q.next) (p = p.next), (q = q.next);
    // p 在待删除的前一个位置
    // const deleted = p.next;
    p.next = p.next.next;
    // deleted.next = null;

    return vHead.next;
};
