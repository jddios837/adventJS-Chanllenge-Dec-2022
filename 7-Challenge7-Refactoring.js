

function getGiftsToRefill(a1, a2, a3) {
    let replenished = [];
    const allItems = [...new Set(a1), ...new Set(a2), ...new Set(a3)];
    const arrStr = allItems.toString();
    allItems.map(e => {
        if(arrStr.match(new RegExp(e, "g")).length === 1) {
            replenished.push(e);
        }
    });
    return [...new Set(replenished)];
}

const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

console.log(getGiftsToRefill(a1, a2, a3)); // ['doll', 'pc']