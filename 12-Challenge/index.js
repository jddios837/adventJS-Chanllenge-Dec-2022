function selectSleigh(distance, sleighs) {
    const battery = 20;
    if (sleighs.length === 0) return '';
    const betterSleighs = sleighs
        .filter(e => (e.consumption * distance) <= battery)
        .sort((a, b) => b.consumption - a.consumption);
    return betterSleighs.length === 0 ? null : betterSleighs[0].name;
}

module.exports = selectSleigh;


const distance = 10;
const sleighs = [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
];

console.log(selectSleigh(distance, sleighs)) // => "Madeval"