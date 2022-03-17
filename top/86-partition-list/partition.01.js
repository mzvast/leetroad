/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    // 拆分成2个表
    let r1 = new ListNode(); // < x
    let r2 = new ListNode(); //  >= x
    let p = head,
        p1 = r1,
        p2 = r2;
    while (p) {
        q = p.next;
        if (p.val < x) {
            p.next = p1.next;
            p1.next = p;
            p1 = p;
        } else {
            p.next = p2.next;
            p2.next = p;
            p2 = p;
        }
        p = q;
    }

    // join
    p1.next = r2.next;
    return r1.next;
};
