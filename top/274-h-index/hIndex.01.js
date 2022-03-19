/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    // 0,1,3,5,6
    //hI 4,3,2,1

    citations = citations.sort((a, b) => (a < b ? -1 : 1));
    // console.log(citations);
    let h = 1,
        n = citations.length;
    while (n - h >= 0 && citations[n - h] >= h) h++;
    h--;
    return h;
};
