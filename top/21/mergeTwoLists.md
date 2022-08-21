## 21. 合并两个有序链表
```
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 

示例 1：


输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：

输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]
 

提示：

两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列
```

%

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const vHead = new ListNode();

    let p1 = list1, p2 = list2, k = vHead;
    // 归并排序的合并阶段
    while (p1 || p2) {
        if (!p1 || (p2 && p2.val < p1.val)) {
            k.next = p2;

            p2 = p2.next;
            k = k.next;
        } else {
            k.next = p1;
            
            p1 = p1.next;
            k = k.next;
        }
    }

    return vHead.next;
};
```