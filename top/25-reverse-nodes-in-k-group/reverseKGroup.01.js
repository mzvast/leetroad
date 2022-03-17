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
var reverseKGroup = function (head, k) {
    // p->[q-> ...]
    // p->[...->q]

    let vHead = new ListNode(0, head),
        p = vHead, // 待反转的前一个
        q = p.next; // 反转之后的尾节点
    while ((p.next = reverseN(q, k)) !== q) {
        p = q;
        q = p.next;
    }

    return vHead.next;

    function reverseN(head, n) {
        let p = head;
        const cnt = n;
        while (--n && p) p = p.next;
        if (!p) return head; // 不够n个
        return _reverseN(head, cnt);
    }
    function _reverseN(head, n) {
        if (n === 1) return head;
        let tail = head.next,
            p = _reverseN(head.next, n - 1);
        head.next = tail.next;
        tail.next = head;
        return p;
    }
};
