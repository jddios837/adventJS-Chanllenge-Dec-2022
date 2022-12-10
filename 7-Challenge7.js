

function getGiftsToRefill(a1, a2, a3) {
    let replenished = [];
    let objA1 = {}, objA2 = {}, objA3 = {};

    a1.map(elemA1 => objA1[elemA1] = (objA1[elemA1] || 0) + 1);
    a2.map(elemA2 => objA2[elemA2] = (objA2[elemA2] || 0) + 1);
    a3.map(elemA3 => objA3[elemA3] = (objA3[elemA3] || 0) + 1);

    console.log(objA1);
    console.log(objA2);
    console.log(objA3);

    for (const key in objA1) {
        if(!(key in objA2) && !(key in objA3)) replenished.push(key);
    }
    for (const key in objA2) {
        if(!(key in objA1) && !(key in objA3)) replenished.push(key);
    }
    for (const key in objA3) {
        if(!(key in objA1) && !(key in objA2)) replenished.push(key);
    }

    return replenished;
}

const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

console.log(getGiftsToRefill(a1, a2, a3)); // ['doll', 'pc']