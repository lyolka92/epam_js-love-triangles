/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
    let loveTrianglesCount = 0;

    if (preferences.length <= 2) {
        return 0;
    }

    preferences.forEach((spichonee, index) => {
        if (spichonee === null) {
            return;
        }

        let firstLoverIndex = index,
            secondLoverIndex = spichonee - 1,
            thirdLoverIndex = preferences[secondLoverIndex] - 1;

        if (firstLoverIndex === secondLoverIndex
            || secondLoverIndex === thirdLoverIndex
            || thirdLoverIndex === firstLoverIndex) {
            return;
        }

        if (preferences[thirdLoverIndex] - 1 === firstLoverIndex) {
            loveTrianglesCount += 1;

            preferences[firstLoverIndex] = null;
            preferences[secondLoverIndex] = null;
            preferences[thirdLoverIndex] = null;
        }
    });

    return loveTrianglesCount;
};
