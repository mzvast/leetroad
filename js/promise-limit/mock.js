urls = [
    {
        info: 'link1',
        time: 1000,
        priority: 1,
    },
    {
        info: 'link2',
        time: 2000,
        priority: 1,
    },
    {
        info: 'link3',
        time: 3000,
        priority: 2,
    },
    {
        info: 'link4',
        time: 4000,
        priority: 1,
    },
    {
        info: 'link5',
        time: 3000,
        priority: 5,
    },
    {
        info: 'link6',
        time: 4000,
        priority: 1,
    },
    {
        info: 'link7',
        time: 3000,
        priority: 1,
    },
    {
        info: 'link8',
        time: 3000,
        priority: 1,
    },
];

function loadImg(url) {
    return new Promise((resolve) => {
        console.log('------' + url.info + ' start!');
        setTimeout(() => {
            console.log(url.info + ' OK!!!');
            resolve();
        }, url.time);
    });
}

module.exports = {
    urls,
    loadImg,
};
