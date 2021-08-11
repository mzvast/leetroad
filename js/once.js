function once(func) {
    let isRun = false;
    if (!isRun) {
        func.apply(null, arguments);
        isRun = true;
    }
    return void 0;
}

const fn = () => {
    console.log('hehe');
};
once(fn);
