// 在给定字符串 str 中，找到最大的字符，在该字符后加上 '(max)'
const str = 'abcczbza';
let maxStr = str[0];
for (let x of str) {
    if (x > maxStr) maxStr = x;
}
const reg = new RegExp(maxStr, 'g');
console.log(str.replace(reg, '$&(max)'));

