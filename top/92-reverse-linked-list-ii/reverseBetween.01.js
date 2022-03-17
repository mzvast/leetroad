/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function (head, left, right) {

	// 虚拟头
	let vHead = new ListNode(0, head),
	    p = vHead; // 当前位置
    
	const cnt = right - left + 1; // 反转个数
    
	while (--left) p = p.next;// 走到待反转的前一个位置
    
	p.next = reverseN(p.next, cnt);
	return vHead.next;
    
	function reverseN(head, n) {
	    if (n === 1) return head;
	    let tail = head.next;
	    let p = reverseN(tail, n - 1);
	    head.next = tail.next;
	    tail.next = head;
	    return p;
	}
    };