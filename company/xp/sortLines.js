// 按照首尾相连的关系 将线进行重新排序

const data = [
    [
        [113.26235295273364, 22.988919010385864],
        [113.26234264299276, 22.988848434761167],
    ],
    [
        [113.26235244981945, 22.988955052569498],
        [113.26235295273364, 22.988919010385864],
    ],
    [
        [113.26234892942013, 22.989080697298046],
        [113.26235244981945, 22.988955052569498],
    ],
    [
        [113.262430338, 22.989303287],
        [113.26240366300001, 22.98924448],
    ],
    [
        [113.26237843371929, 22.98918404616415],
        [113.26236384920777, 22.989141717553128],
        [113.26234892942013, 22.989080697298046],
    ],
    [
        [113.26240366300001, 22.98924448],
        [113.262394443, 22.989223609],
    ],
    [
        [113.262462253, 22.989373645],
        [113.262430338, 22.989303287],
    ],
    [
        [113.26247449032964, 22.989400802180167],
        [113.26246225275099, 22.98937364481389],
    ],
    [
        [113.26251489110291, 22.989482944831245],
        [113.26247449032964, 22.989400802180167],
    ],
    [
        [113.26260440982878, 22.98964546993374],
        [113.26256920583546, 22.98958629369735],
        [113.26251489110291, 22.989482944831245],
    ],
    [
        [113.26265981420876, 22.989758038893346],
        [113.26260440982878, 22.98964546993374],
    ],
    [
        [113.26274145394564, 22.989920228719704],
        [113.26271211728454, 22.989864405244585],
        [113.26265981420876, 22.989758038893346],
    ],
    [
        [113.26310522854328, 22.99034669995307],
        [113.26302920468152, 22.990269921720017],
        [113.2629725430161, 22.990208314731706],
    ],
    [
        [113.26319198124109, 22.990428591147058],
        [113.26310522854328, 22.99034669995307],
    ],
    [
        [113.26327445916831, 22.99050344154239],
        [113.26319198124109, 22.990428591147058],
    ],
    [
        [113.26330974698067, 22.9905354604125],
        [113.26327445916831, 22.99050344154239],
    ],
    [
        [113.26411189511417, 22.990898145362735],
        [113.26420082710688, 22.99095405265688],
    ],
    [
        [113.26394232921301, 22.9907912760973],
        [113.26411189511417, 22.990898145362735],
    ],
    [
        [113.26390217989683, 22.99076629802584],
        [113.26394232921301, 22.9907912760973],
    ],
    [
        [113.26388675719498, 22.990756575018164],
        [113.26390217989683, 22.99076629802584],
    ],
    [
        [113.26388348825279, 22.990803262218826],
        [113.26379363425077, 22.990746768191457],
        [113.26378692872822, 22.990737548097957],
        [113.26378416270018, 22.99072430469095],
        [113.26378692872822, 22.990716928616166],
        [113.26379179023208, 22.99071340821683],
        [113.26380427926779, 22.990710139274594],
        [113.26381400227547, 22.99071122892201],
        [113.26388675719498, 22.990756575018164],
    ],
    [
        [113.26397518627347, 22.990860426798452],
        [113.26388348825279, 22.990803262218826],
    ],
    [
        [113.26403100974858, 22.990895966067896],
        [113.26397518627347, 22.990860426798452],
    ],
    [
        [113.26383923180403, 22.990879705175754],
        [113.26335668563843, 22.990577789023508],
        [113.26330974698067, 22.9905354604125],
    ],
    [
        [113.26392196118832, 22.990932092070576],
        [113.26383923180403, 22.990879705175754],
    ],
    [
        [113.26397703029217, 22.990966541692615],
        [113.26392196118832, 22.990932092070576],
    ],
    [
        [113.26412270776927, 22.991058994084593],
        [113.26407853513956, 22.99103024415671],
    ],
    [
        [113.26407853513956, 22.99103024415671],
        [113.26397703029217, 22.990966541692615],
    ],
    [
        [113.26420954428613, 22.991113811731335],
        [113.26412270776927, 22.991058994084593],
    ],
    [
        [113.26417584903541, 22.990986909717318],
        [113.26403100974858, 22.990895966067896],
    ],
    [
        [113.26426327228546, 22.99104139208793],
        [113.26417584903541, 22.990986909717318],
    ],
    [
        [113.26426327228546, 22.99104139208793],
        [113.26425891369581, 22.991037284955375],
        [113.26425539329648, 22.991029154509295],
        [113.2642569858581, 22.99102135933935],
        [113.26425975188616, 22.99101775512099],
        [113.26426704414193, 22.991012642160054],
        [113.26427651569247, 22.991009959951036],
        [113.26428171247244, 22.991009624674913],
        [113.26429168693723, 22.991012642160054],
    ],
    [
        [113.26440970413387, 22.991240210831165],
        [113.26420954428613, 22.991113811731335],
    ],
    [
        [113.26429168693723, 22.991012642160054],
        [113.26458932831883, 22.991198720410466],
    ],
    [
        [113.26458932831883, 22.991198720410466],
        [113.26462428085506, 22.991220680996772],
    ],
    [
        [113.26462428085506, 22.991220680996772],
        [113.26481530442837, 22.991340877488252],
    ],
    [
        [113.26481530442837, 22.991340877488252],
        [113.26488906517625, 22.99138781614601],
    ],
    [
        [113.264889065, 22.991387816],
        [113.26496320600002, 22.991434274],
    ],
    [
        [113.2645453233272, 22.991326209157695],
        [113.26440970413387, 22.991240210831165],
    ],
    [
        [113.2646883185953, 22.991416817530986],
        [113.2645453233272, 22.991326209157695],
    ],
    [
        [113.26486601494254, 22.99152561463415],
        [113.26480817981063, 22.991493092849844],
    ],
    [
        [113.26480817981063, 22.991493092849844],
        [113.2646883185953, 22.991416817530986],
    ],
    [
        [113.26520422473551, 22.991720912978046],
        [113.26486601494254, 22.99152561463415],
    ],
    [
        [113.265237738, 22.991606302],
        [113.26525745, 22.991618654],
    ],
    [
        [113.26496320600002, 22.991434274],
        [113.265237738, 22.991606302],
    ],
    [
        [113.26525745, 22.991618654],
        [113.265398182, 22.99170658],
    ],
    [
        [113.26598256826401, 22.99220974557101],
        [113.26520422473551, 22.991720912978046],
    ],
    [
        [113.26612355187537, 22.992299012839794],
        [113.26598256826401, 22.99220974557101],
    ],
    [
        [113.2653981819749, 22.991706579923626],
        [113.26636796817183, 22.992316363379356],
    ],
    [
        [113.26636796817183, 22.992316363379356],
        [113.26656192541121, 22.99243815243243],
    ],
    [
        [113.26656192541121, 22.99243815243243],
        [113.26674481853843, 22.99255315214395],
    ],
    [
        [113.26643829233944, 22.99249674193561],
        [113.26612355187537, 22.992299012839794],
    ],
    [
        [113.26657148078087, 22.992580560967323],
        [113.26653728261593, 22.99255943857133],
    ],
    [
        [113.26653728261593, 22.99255943857133],
        [113.26643829233944, 22.99249674193561],
    ],
    [
        [113.26669402420521, 22.992657339200377],
        [113.26657148078087, 22.992580560967323],
    ],
    [
        [113.26681422069667, 22.992733279243108],
        [113.26669402420521, 22.992657339200377],
    ],
    [
        [113.2668525259942, 22.992757419124246],
        [113.26681422069667, 22.992733279243108],
    ],
    [
        [113.26674481853843, 22.99255315214395],
        [113.26701848767698, 22.992725148797035],
        [113.26705972664057, 22.99275171943009],
        [113.2671305537224, 22.99280108883976],
    ],
    [
        [113.2671305537224, 22.99280108883976],
        [113.26725527644159, 22.992871077731248],
    ],
    [
        [113.26725527644159, 22.992871077731248],
        [113.26734236441551, 22.992922626435757],
    ],
    [
        [113.26748644933106, 22.993156230077137],
        [113.2668525259942, 22.992757419124246],
    ],
    [
        [113.26734236441551, 22.992922626435757],
        [113.26750111766161, 22.993017844855782],
    ],
    [
        [113.26750111766161, 22.993017844855782],
        [113.26756859198211, 22.99305749125778],
    ],
    [
        [113.26756859198211, 22.99305749125778],
        [113.26757814735177, 22.99306503497064],
        [113.26758896000685, 22.993077272549268],
        [113.26759952120483, 22.993098394945253],
        [113.26760144904259, 22.993111135438077],
        [113.26760010793804, 22.993123624473807],
        [113.26759600080553, 22.993135023862116],
        [113.26758921146396, 22.993145585060113],
        [113.26758032664657, 22.99315455369651],
        [113.26756892725828, 22.993161594495174],
        [113.26755560003222, 22.993166204541918],
        [113.26754042878747, 22.993168635293838],
        [113.2675119303167, 22.993165450170633],
        [113.26748644933106, 22.993156230077137],
    ],
    [
        [113.26420082710688, 22.99095405265688],
        [113.26425480656329, 22.990988753736016],
    ],
    [
        [113.2629725430161, 22.990208314731706],
        [113.26290691271424, 22.990133464336388],
    ],
    [
        [113.26290691271424, 22.990133464336388],
        [113.26284237205985, 22.990054255351424],
        [113.26274145394564, 22.989920228719704],
    ],
    [
        [113.26239150948825, 22.98921681940555],
        [113.26238363049924, 22.989200809970495],
        [113.26237843371929, 22.98918404616415],
    ],
    [
        [113.26239444315434, 22.98922360874712],
        [113.26239150948825, 22.98921681940555],
    ],
    [
        [113.26234264299276, 22.988848434761167],
        [113.26224910095334, 22.98853511922061],
        [113.26223820447923, 22.9884925391525],
    ],
];

function solution() {
    // 每一个数据的tail => string 存到一个map key=>index
    // head => string 存到一个map key=>index
    // 查找每一个元素的next index，排序

    const n = data.length;

    const h_head = {};
    const h_tail = {};
    const arr = Array.from({length: n}, (_, idx) => ({
        idx,
        prev: null,
        next: null,
    }));
    for (let i = 0; i < data.length; i++) {
        h_head[data[i][0].join('-')] = i;
        h_tail[data[i][data[i].length - 1].join('-')] = i;
    }

    //     console.log(h_head,h_tail)

    for (let i = 0; i < data.length; i++) {
        const cur_tail = data[i][data[i].length - 1].join('-');
        const nextIdx = h_head[cur_tail];
        if (nextIdx !== undefined) {
            arr[i].next = nextIdx;
            // @ts-ignore
            arr[nextIdx].prev = i;
        } else {
            console.log('🚀 ~ solution ~ i,nextIdx:', i, nextIdx);
        }
    }

    // update ans

    // 没有prev的是head  todo:有多个，顺序？

    const ans = [];

    const q = []; // 无头元素

    for (let i = 0; i < data.length; i++) {
        if (arr[i].prev === null) {
            //     head = arr[i];
            q.push(arr[i]);
            //     break;
        }
    }
    while (q.length) {
        let p = q.shift();
        while (p) {
            ans.push(data[p.idx]);
            if (p.next) p = arr[p.next];
            else break;
        }
    }

    return ans;
}

// test
console.log(solution());
