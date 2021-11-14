/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    // sliding window
    const need = {},
        window = {};
    let left = 0,
        right = 0, //[left,right)
        // ans
        valid = 0;

    // build need
    for (const c of s1) {
        need[c] = (need[c] || 0) + 1;
    }

    // init window
    for (const c of s2) {
        window[c] = 0;
    }

    const needSize = Object.keys(need).length;

    while (right < s2.length) {
        const add = s2[right];
        right++;
        // update window
        if (need[add]) {
            window[add]++;
            if (need[add] === window[add]) valid++;
        }

        while (right - left >= s1.length) {
            // update ans
            if (valid === needSize) return true;

            const del = s2[left];
            left++;
            // update window
            if (need[del]) {
                if (need[del] === window[del]) valid--;
                window[del]--;
            }
        }
    }

    return false;
};
