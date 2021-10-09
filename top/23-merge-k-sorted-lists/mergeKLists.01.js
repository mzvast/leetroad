// 一把梭
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function (lists) {
	const vHead = new ListNode(0);
	let cur = vHead;
	// 每一个表都对应一个指针
	const p = {}; //p[0],p[1]...
	const n = lists.length;
	for (let i = 0; i < n; i++) {
	    p[i] = lists[i];
	}
    
	// 找到不为空，最小的
	while (true) {
	    let i = getMinLine();
	    if (i === -1) break;
	    // console.log(p[i])
	    cur.next = p[i];
	    p[i] = p[i].next;
	    cur = cur.next;
	}
	// 
    
	return vHead.next;
    
	function getMinLine() {
	    let min = Infinity;
	    let minLine = -1;
	    for (let i = 0; i < n; i++) {
		if (p[i] !== null) {
		    if (p[i].val <= min) {
			minLine = i;
			min = p[i].val
		    }
		}
	    }
	    // console.log(minLine);
	    return minLine;
	}
    };