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
    const map = new Map(); // node=>idx
    let cur = head;
    while (cur) {
        if (map.has(cur)) return map.get(cur);
        map.set(cur, cur);
        cur = cur.next;
    }
    return null;
};
