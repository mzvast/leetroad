/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // 找到中间节点，反转后按位比较
    if (!head) return false;
    let p = (q = head);
    // p 慢
    // q 快
    while (q.next && q.next.next) {
        //快指针有下下个节点，俩人一起走
        p = p.next;
        q = q.next.next;
    }

    p.next = reverse(p.next);
    q = p.next;
    p = head;
    while (q) {
        if (p.val !== q.val) return false;
        p = p.next;
        q = q.next;
    }

    return true;
};

function reverse(head) {
    let pre = null,
        cur = (next = head);

    while (cur) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre;
}
