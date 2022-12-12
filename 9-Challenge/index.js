// A company that manufactures Christmas lights has asked us to help them.
// They have led strips that are like an Array. Each position is a led and
// can be on (1) or off (0).

// Every 7 seconds, the leds change state in this way:
//
//     If the led is off, it turns on if the led on its left (index - 1)
//     was on before.
//     If the led is on, it remains on.
function countTime(leds) {
    const arrayofZeros = leds.join('').split('1');
    arrayofZeros[0] += arrayofZeros.pop();
    return arrayofZeros.sort((a, b) => b.length - a.length)[0].length * 7;
}

module.exports = countTime;