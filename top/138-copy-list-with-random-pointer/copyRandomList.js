/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function (head) {
	// 第一轮，复制一个插入到后面，random指向同一个
	// 第二轮，复制出来的节点，random指针向后移一位
	// 第三轮，拆分链表
    
	if (!head) return head;
    
	let p = head,
	    q;
	// round1
	while (p) {
	    q = p.next;
    
	    const p1 = new Node(p.val, p.next, p.random);
	    p.next = p1;
    
	    p = q;
	}
	// round2
	p = head.next;
	while (p) {
	    if (p.random) p.random = p.random.next;
	    (p = p.next) && (p = p.next);
	}
	// round 3
    
	let newHead = head.next;
	p = head;
	while (p) {
	    q = p.next;
	    p.next = q.next;
	    if (p.next) q.next = q.next.next;
	    p = p.next;
	}
    
	return newHead;
    };