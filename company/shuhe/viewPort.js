/**
 *
 * 给定一个可视区域viewPort = {h:100,height:50}，和一组元素eleInfoList = [{h:0, height:10,id:0},{h:10,height:20,id:1}]，已知元素已经按h从小到大排序，求完全在可视区域里面的元素。
 *
 *  */

function getVisibleItems(eleInfoList, viewPort) {
    const n = eleInfoList.length;
    const ymin = viewPort.h,
        ymax = viewPort.h + viewPort.height;

    // 第一个可能可见的位置 h>=ymin 000001111 ---->

    // 最后一个可能可见的位置 h>=ymax 00000111

    const ans = [];

    const startIdx = bs01(0, n - 1, ymin),
        endIdx = bs01(0, n - 1, ymax);

    for (let i = startIdx; i < endIdx; i++) {
        if (check(eleInfoList[i])) ans.push(eleInfoList[i]);
    }

    return ans;

    function check(item) {
        return item.h >= ymin && item.h + item.height <= ymax;
    }

    // 000000111111
    function bs01(l, r, target) {
        while (l < r) {
            const mid = (l + r) >> 1;
            const {h} = eleInfoList[mid];


            if (h < target) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        return r;
    }

 
}

console.log(
    getVisibleItems(
        [
            {h: 0, height: 10, id: 0},
            {h: 10, height: 20, id: 1},
            {h: 90, height: 20, id: 2},
            {h: 100, height: 50, id: 3}, // visible
            {h: 110, height: 20, id: 4}, // visible
            {h: 110, height: 50, id: 5},
        ],
        {h: 100, height: 50}
    )
);
