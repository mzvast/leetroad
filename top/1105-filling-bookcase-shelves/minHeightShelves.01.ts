/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
var minHeightShelves = function (books, shelf_width) {
    // 1..i-1,i..j
    // dp[i] := 第i本书放好后的最小高度和
    // dp[j] = min{dp[i-1] + H} ,0<i<=j
    // H = max(books[i-1][1]), 其中sum(books[i..j][0]<= shelf_width
    // ans = dp[n]

    const n = books.length;
    const dp = Array(n + 1).fill(Infinity);
    // base case
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        let w = 0,
            h = 0;
        for (let j = i; j <= n; j++) {
            if ((w += books[j - 1][0]) > shelf_width) break;
            // w += books[j - 1][0]
            h = Math.max(h, books[j - 1][1]);
            dp[j] = Math.min(dp[j], dp[i - 1] + h);
        }
    }

    return dp[n];
};
