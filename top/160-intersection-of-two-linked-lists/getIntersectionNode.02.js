// 计算长度差值，让他们相遇
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function (headA, headB) {
    // 双指针，求得两条链表的长度之差，即可算得相交点

    let pre1 = null, pre2 = null, cur1 = headA, cur2 = headB;

    while (cur1 && cur2) {
        pre1 = cur1;
        pre2 = cur2;
        cur1 = cur1.next;
        cur2 = cur2.next;
    }

    let delta = 0; // lenA - lenB
    // 判断长度差
    if (!cur1 && !cur2) {
        // 一样长       
    } else if (cur1) {
        // console.log(cur1)
        // A 长
        cur1 = pre1;
        while (cur1) {
            cur1 = cur1.next;
            cur1 && delta++;
        }
    } else if (cur2) {
        // console.log(cur2)
        // B 长
        cur2 = pre2;
        while (cur2) {
            cur2 = cur2.next;
            cur2 && delta--;
        }
    }

    // console.log(delta)


    cur1 = headA, cur2 = headB;
    if (delta === 0) {
        // 一样长，直接就能撞上


    } else if (delta > 0) {
        // A先走几步，变成一样长

        let count = delta
        while (count > 0) {
            cur1 = cur1.next;
            count--;
        }

    } else if (delta < 0) {
        // B先走几步，变成一样长

        let count = delta * -1;
        while (count > 0) {
            cur2 = cur2.next;
            count--;
        }
    }
    while (cur1 && cur2 && cur1 !== cur2) {
        cur1 = cur1.next;
        cur2 = cur2.next;
    }
    return cur1;
};