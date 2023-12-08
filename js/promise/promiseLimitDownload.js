// limit max 3 at the same time
const q = [];
let cnt = 0;

function download(url) {
    const job = () => {
        new Promise((resolve) => {
            fetch(url)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.error(err);
                })
                .finally(() => {
                    cnt -= 1;
                    check();
                });
        });

        cnt += 1;
    };

    q.push(job);
    check();
}

function check() {
    if (cnt < 3 && q.length > 0) {
        q.shift()();
    }
}

function fetch(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url);
        }, 1000);
    });
}

download('1');
download('2');
download('3');
download('4');
download('5');

// 1,2,3
// 4,5
