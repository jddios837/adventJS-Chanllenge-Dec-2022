
// INPUTS
// Array giftsCities each element is the number of gifts he can leave there
// Int maxGifts a limit on the number of gifts that can fit in his bag
// Int maxCities maximum number of cities that his reindeer can visit

// [12, 3, 11, 5, 7]
function getMaxGifts(giftsCities, maxGifts, maxCities) {
    const getGiftCount = (giftsCities, maxGifts, maxCities, i=0, giftCount=0, cityCount=0) => {
        // Conditional to STOP recursion
        if (cityCount === maxCities || i === giftsCities.length) {
            return giftCount;
        }

        if (giftCount + giftsCities[i] <= maxGifts) {
            return Math.max(
                getGiftCount(giftsCities, maxGifts, maxCities, i+1, giftCount+giftsCities[i], cityCount+1),
                getGiftCount(giftsCities, maxGifts, maxCities, i+1, giftCount, cityCount)
            );
        }

        return getGiftCount(giftsCities, maxGifts, maxCities, i+1, giftCount, cityCount);
    }

    return getGiftCount(giftsCities, maxGifts, maxCities);
    // get number of blocks giftsCities.length / maxCities

    // loop on that block


    //if (giftsCities.length === 0 || maxGifts === 0 || maxCities === 0) return 0;

    // let count = 0;
    // return giftsCities.sort((a, b) => b - a).reduce((sum, e, i, arr) => {
    //     if ((sum + e) <= maxGifts && count <= maxCities ) {
    //         count++;
    //         return sum + e;
    //     }
    //     return sum;
    // }, 0);
    // What do on the reduce
    // use reduce function on giftsCities inside this
        // check sum + e is less than maxGifts AND count less than maxCities
            // add that value and increment count
    // return 0
}


// test 1
const giftsCitiesTest1 = [12, 3, 11, 5, 7]
const maxGiftsTest1 = 20
const maxCitiesTest1 = 3
// console.log(getMaxGifts(giftsCitiesTest1, maxGiftsTest1, maxCitiesTest1)); // 20
console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)); // 20
console.log(getMaxGifts([50], 15, 1)); // 0
console.log(getMaxGifts([50], 100, 1)); // 50
console.log(getMaxGifts([50, 70], 100, 1)); // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100
