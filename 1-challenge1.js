const gifts = []

function wrapping(gifts) {
    return gifts.map(g => {
        let w = new Array(g.length + 3).join('*');
        return w + "\n*" + g + "*\n" + w;
    });
}

const wrapped = wrapping(gifts)
console.log(wrapped)
/* [
  "******\n*book*\n******",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */