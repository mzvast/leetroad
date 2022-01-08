/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function (people) {
	// random [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]] 
	// ans [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] (front...back)
    
	// [排队]先按身高h从大到小排序，身高相同按k从小到大
	// [插队]然后依次将队列以ki的序号插入，插入的时候队列里都是比hi高的，所以对已经排好的没影响，只要确保hi前面正好有ki个人即可（他们都比hi高）。
	//   [7,0] [7,1] [6,1]  [5,0] [5,2] [4,4] 
	//   [5,0] [7,0][5,2][6,1] [4,4] [7,1]
	const highToLow = people.sort((a, b) => {
	    if (a[0] > b[0]) {
		return -1;
	    }
	    if (a[0] === b[0]) {
		return a[1] - b[1]
	    }
    
	    return 1;
	})
	const ans = [];
    
	for (const item of people) {
	    ans.splice(item[1], 0, item)
	}
    
	return ans;
    };