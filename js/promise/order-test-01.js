// https://www.youtube.com/watch?v=Lum0R6Ng6R8
new Promise((resolve) => {
    resolve(1);
    Promise.resolve().then(() => console.log(2));
}).then((t) => console.log(t));

console.log(3);

// 3,2,1
