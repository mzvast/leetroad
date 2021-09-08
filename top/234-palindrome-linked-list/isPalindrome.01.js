// 递归，利用stack，倒序遍历，模仿双指针
// 时间空间复杂度都是O(n)

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
    let left = head;
    return traverse(head);

    function traverse(right) {
        if (!right) return true;
        let res = traverse(right.next);
        res = res && left.val === right.val;
        left = left.next;
        return res;
    }
};
