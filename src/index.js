/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let LoveTrinaglesCount = 0;
    if (!preferences.length) {
        return 0;
    }

    preferences.forEach((item, index) => {
        if (preferences[preferences[item - 1] - 1] === index + 1) {
            LoveTrinaglesCount += 1;
        }
    })

    return Math.floor(LoveTrinaglesCount / 3);
};
