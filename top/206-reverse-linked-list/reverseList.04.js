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
    if (!head || !head.next) return head;
    // 1->2->[3->4]
    //    ^   ^
    //   head tail
    // 1->2->[null<-3<-4]
    //    ^         ^  ^
    //   head     tail last
    // [null<-head<-tail]
    let tail = head.next;
    let last = reverseList(tail);
    head.next = tail.next; // null
    tail.next = head;

    return last;
};
