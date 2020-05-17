/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
    let loveTrianglesCount = 0;

    if (preferences.length > 2) {
        preferences.forEach((spichonee, index) => {
            const firstLoverIndex = spichonee - 1,
                nextLoverIndex = preferences[firstLoverIndex] - 1;
            if (preferences[nextLoverIndex] - 1 === index) {
                loveTrianglesCount += 1;
            }
        });
    }

    return Math.floor(loveTrianglesCount/3);
};
