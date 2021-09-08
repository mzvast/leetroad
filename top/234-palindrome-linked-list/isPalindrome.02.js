 // 用快慢指针，找到中间位置，翻转剩余链表
// 从两端，双指针，比较
// 空间复杂度是O(1)

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
    // 用快慢指针，找到中间位置，翻转剩余链表
    // 从两端，双指针，比较
    let fast = slow = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next;
    }
    // 此时slow即中间（不用管奇数偶数，因为奇数情况中间直接就不参与比较）

    // 翻转剩余链表
    let pre = null, cur = next = slow.next;

    slow.next = null;// 断开链接

    while (cur) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }



    // pre是右侧头

    let right = pre, left = head, ans = true;
    while (left && right) {
        if (left.val !== right.val) {
            ans = false;
            break;
        }
        left = left.next;
        right = right.next;
    }
    return ans;
};