// https://www.youtube.com/watch?v=Lum0R6Ng6R8


new Promise((resolve) => {
    Promise.resolve().then(() => {
        resolve(1);
        Promise.resolve().then(() => console.log(2));
    });
}).then((t) => console.log(t));

console.log(3);
