## 535. TinyURL 的加密与解密
```
TinyURL是一种URL简化服务， 比如：当你输入一个URL https://leetcode.com/problems/design-tinyurl 时，它将返回一个简化的URL http://tinyurl.com/4e9iAk.

要求：设计一个 TinyURL 的加密 encode 和解密 decode 的方法。你的加密和解密算法如何设计和运作是没有限制的，你只需要保证一个URL可以被加密成一个TinyURL，并且这个TinyURL可以用解密方法恢复成原本的URL。
```
%

```js
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const h = new Map();// short=> long
function getRandomShort() {
    let s = '';
    // 6位短网址
    for (let i = 0; i < 6; i++) {
        const n = Math.random() * 62 % 62;// 假设只有62个字符
        if (n < 26) {
            // a-z [0,25]
            s += String.fromCharCode('a'.charCodeAt(0) + n);
        } else if (n < 52) {
            // A-Z [26,51]
            s += String.fromCharCode('A'.charCodeAt(0) + n - 26);
        } else {
            // 0-9 [52,62]
            s += String.fromCharCode('0'.charCodeAt(0) + n - 52);
        }
    }
    return s;

}
var encode = function (longUrl) {
    let s;
    do {
        s = getRandomShort();
    } while (h.has(s))
    h.set(s, longUrl);
    return  s;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    return h.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
```