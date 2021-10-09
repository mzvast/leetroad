// 自顶向下，归并排序
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
 var sortList = function (head) {

	return sort(head, null);
    
	function sort(head, tail) { // 左闭右开[)
	    // edge case
	    if (head === null) {
		return head
	    }
	    if (head.next === tail) { // 就一个元素，没法再分了
		head.next = null;
		return head
	    }
	    let fast = head, slow = head;
	    // 1,2,3,4
	    // s
	    //   f
	    //   s
	    //      f
	    //.    s
	    //         f-out
	    // 快慢指针，求中间位置
	    while (fast !== tail) {
		slow = slow.next;
		fast = fast.next;
		if (fast !== tail) {
		    fast = fast.next;
		}
	    }
	    const mid = slow;
	    return merge(sort(head, mid), sort(mid, tail))
	}
    
	function merge(a, b) {
	    // 合并有序链表
	    // a[0]->a[1]...->a[m]
	    // b[0]->b[1]...->b[n]
	    // p[0]->p[1]...->p[x]
	    let vHead = new ListNode(0);// 虚拟表头
	    let p = vHead, p1 = a, p2 = b; // 指针
	    while (p1 !== null && p2 !== null) { // 都不为空
		if (p1.val <= p2.val) {
		    p.next = p1;
		    p1 = p1.next;
		} else {
		    p.next = p2;
		    p2 = p2.next;
		}
		p = p.next;
	    }
	    while (p1 !== null) {
		p.next = p1;
		p1 = p1.next;
		p = p.next;
	    }
	    while (p2 !== null) {
		p.next = p2;
		p2 = p2.next;
		p = p.next;
	    }
	    return vHead.next;
	}
    };