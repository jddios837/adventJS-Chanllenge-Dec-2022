

function fitsInOneBox(boxes) {
    boxes.sort((a, b) => {
        if (a.l !== b.l) return a.l - b.l;
        if (a.w !== b.w) return a.w - b.w;
        return a.h - b.h;
    });
    // const comp = (obj1, obj2) => {
    //     return obj1.l >= obj2.l || obj1.w >= obj2.w || obj1.h >= obj2.h;
    // }

    // const comp = (obj1, obj2) => {
    //     return obj1.l < obj2.l && obj1.w < obj2.w && obj1.h < obj2.h;
    // }

    return boxes.every((currentBox, i) => {
        if (i < boxes.length - 1) {
            const nextBox = boxes[i + 1];
            return currentBox.l < nextBox.l && currentBox.w < nextBox.w && currentBox.h < nextBox.h;
        }
        return true;
    });

    // for (let i = 0; i < boxes.length - 1; i++) {
    //     if (comp(boxes[i], boxes[i + 1])) return false;
    //     // if (boxes[i].l >= boxes[i + 1].l || boxes[i].w >= boxes[i + 1].w || boxes[i].h >= boxes[i + 1].h) {
    //     //     return false;
    //     // }
    // }
    // return true;
}

// TESTS
const test1 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
]; // will return true
console.log(fitsInOneBox(test1));

const test2 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]; // will return false
console.log(fitsInOneBox(test2));

const test3 = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]; // will return true
console.log(fitsInOneBox(test3));
console.log('Done!');