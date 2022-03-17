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
var reverseList = function (head) {
    if (!head) return head;
    let pre = null,
        cur = head,
        next = head.next;
    // null head->head.next

    // pre->[cur]->next
    // pre <-[cur]<-next
    while (cur) {
        cur.next = pre;
        pre = cur;
        cur = next;
        if (next) {
            next = next.next;
        }
    }

    return pre;
};
