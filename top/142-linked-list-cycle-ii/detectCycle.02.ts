/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let fastCur = head,
        slowCur = head;
    while (fastCur !== null) {
        if (fastCur.next === null) return null;
        slowCur = slowCur.next;
        fastCur = fastCur.next.next;
        if (slowCur === fastCur) break;
    }

    if (!fastCur) return null;

    // 此时fast走了2k,slow走了k
    // fast距离环入口m，则再走k-m到达入口
    // slow从head开始走k-m也刚好到入口

    slowCur = head;

    while (slowCur !== fastCur) {
        slowCur = slowCur.next;
        fastCur = fastCur.next;
    }

    return fastCur;
};
