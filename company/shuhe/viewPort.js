/**
 *
 * 给定一个可视区域viewPort = {h:100,height:50}，和一组元素eleInfoList = [{h:0, height:10,id:0},{h:10,height:20,id:1}]，已知元素已经按h从小到大排序，求完全在可视区域里面的元素。
 *
 *  */

function getVisibleItems(eleInfoList, viewPort) {
    const n = eleInfoList.length;
    const ymin = viewPort.h,
        ymax = viewPort.h + viewPort.height;

	// todo
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
