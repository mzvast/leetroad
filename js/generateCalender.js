function generateCalender(itemValue) {
    const startPoint = new Date(itemValue);
    const y = startPoint.getFullYear();
    const m = startPoint.getMonth() + 1; // 月
    const d = startPoint.getDate(); // 日

    const ans = [];
    let tmp = [];
    while (startPoint.getMonth() + 1 <= m && startPoint.getFullYear() === y) {
        const day = startPoint.getDay();
        if (day < 6 && day > 0) {
            tmp.push(`${m}.${startPoint.getDate()}`);
        } else if (tmp.length) {
            ans.push(tmp);
            tmp = [];
        }
        startPoint.setDate(startPoint.getDate() + 1);
    }

    return ans;
}

console.log(generateCalender('2022-12'));
