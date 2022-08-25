// todo: 未完成
const tileSize = [512, 640, 1152, 2304, 4736];
// 屏幕高度 h
const screenHeight = 1200; // document.body.offsetHeight * window.devicePixelRatio
const fovToLevel = (fov) => {
    // degree to radix
    const fovRad = (fov * Math.PI) / 180;
    //                                    xxxx
    //                                  xxxx  │
    //                                xxx     │
    //                             xxx        │
    //                          xxx           │
    //                       xxx              │
    //                    xxxx                │
    //                 xxxx                   │   h/2
    //             xxxx                       │
    //          xxx                           │
    //       xxxx                             │
    //    xxx     fov/2                       │
    //  xxx                                   │
    // xx─────────────────────────────────────┘
    // 			d

    // tan(fov/2) = (h/2)/d

    // cube size = 2d

    // 2d = h/(tan(fov/2))  // tileSize
    const x = screenHeight / Math.tan(fovRad / 2);
    for (let i = 1; i < tileSize.length; i++) {
        if (tileSize[i] > x) {
            if (i === 1) {
                return i;
            }
            const right = tileSize[i];
            const left = tileSize[i - 1];
            const p = (x - left) / (right - left);
            // console.log('level:', h, tileSize, p);
            return p > 0.2 ? i : i - 1; // 如果比前一个级别多20%，则升级
        }
    }
    return tileSize.length - 1;
};

function log(fov) {
    console.log('fov:', fov, 'level:', fovToLevel(fov));
}
for (let i = 10; i < 180; i += 5) {
    log(i);
}
