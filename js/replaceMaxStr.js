const str = 'abcczbza';
let maxStr = str[0];
for (let x of str) {
    if (x > maxStr) maxStr = x;
}
const reg = new RegExp(maxStr, 'g');
console.log(str.replace(reg, '$&(max)'));

