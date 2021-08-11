function myAjax(url, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                const json = JOSN.parse(xhr.responseText);
                resolve(json);
            } else {
                reject('error');
            }
        };
    });
}
