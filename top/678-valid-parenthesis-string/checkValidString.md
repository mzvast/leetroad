## 678. 有效的括号字符串
```
给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

任何左括号 ( 必须有相应的右括号 )。
任何右括号 ) 必须有相应的左括号 ( 。
左括号 ( 必须在对应的右括号之前 )。
* 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
一个空字符串也被视为有效字符串。
示例 1:

输入: "()"
输出: True
示例 2:

输入: "(*)"
输出: True
示例 3:

输入: "(*))"
输出: True
注意:

字符串大小将在 [1，100] 范围内。
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parenthesis-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

%

贪心+两遍扫描

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {

    // 验证极端情况
    // (*)))))
    let open_max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            open_max--;
            if (open_max < 0) return false;
        }
        else {
            open_max++;
        }
    }
    // <- reverse scan
    // ((((*
    open_max = 0;
    for(let i=s.length-1;i>=0;i--){
         if (s[i] === '(') {
            open_max--;
            if (open_max < 0) return false;
        }
        else {
            open_max++;
        }
    }


    return true;
};
```
