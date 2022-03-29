/**
 * @param {string} big
 * @param {string[]} smalls
 * @return {number[][]}
 */
// var multiSearch = function (big, smalls) {
//     let ans = [];
//     for (let x of smalls) {
//         // console.log(Array.from(big.matchAll(RegExp(x, 'g'))))
//         let tmp = [];
//         if (x) {
// 		// 这会导致一个问题
// 		// "aaaaaaa"
// 		// ["aa"]
// 		// 出现错误的结果[[0,2,4]]
// 		// 预期是[[0,1,2,3,4,5]]
//             for (let y of Array.from(big.matchAll(RegExp(x, 'g')))) {
//                 tmp.push(y.index);
//             }
//         }

//         ans.push(tmp);
//     }
//     return ans;
// };
