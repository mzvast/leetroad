/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return [];
    const q = [root];
    const ans = [];
    while(q.length){
        const len = q.length;
        const cur_ans = [];
        for(let i=0; i< len; i++){
            const cur = q.shift();
            cur_ans.push(cur.val);
            for(let child of cur.children){
                q.push(child);
            }
        }
        ans.push(cur_ans);
    }
    return ans;
};