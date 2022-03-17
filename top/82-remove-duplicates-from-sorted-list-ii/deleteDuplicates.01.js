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
    let vHead = new ListNode(0, head),
        p = vHead,
        q;
    while (p.next) {
        if (p.next.next && p.next.val === p.next.next.val) {
            q = p.next.next;
            // 找到下一个不同的节点
            while (q && q.val === p.next.val) q = q.next;
            p.next = q;
        } else {
            p = p.next;
        }
    }

    return vHead.next;
};
