// 复用原有链表结构
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;

    const head = new ListNode(); // 虚拟头
    let p1 = l1,
        p2 = l2,
        p = head;
    while (p1 || p2) {

        if (p1 && p2) {
            const [v1, v2] = [p1.val, p2.val]
            if (v1 < v2) {
                p.next = p1;
                p1 = p1.next;
            } else {
                p.next = p2;
                p2 = p2.next;
            }
        } else if (p1) {
            p.next = p1;
            p1 = p1.next;
        } else if (p2) {
            p.next = p2;
            p2 = p2.next;
        }
        p = p.next;
    }

    return head.next;
};