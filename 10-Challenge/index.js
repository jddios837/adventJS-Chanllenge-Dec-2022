function checkJump(heights) {
    const left = heights.splice(0, heights.indexOf(Math.max(...heights)));

    const goodForLeft = left
        .slice(1)
        .every((l, i) => l >= left[i]);

    const goofForRight = heights
        .slice(1)
        .every((h, i) => h <= heights[i]);

    return goodForLeft && goofForRight && !!left.length && heights.length > 1
}

console.log(checkJump([1, 2, 2, 2, 1])) // TRUE
console.log(checkJump([2, 2, 2, 2])) // FALSE
console.log(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])) // True
console.log(checkJump([1, 2, 3, 1, 3, 1])) // FALSE
console.log(checkJump([1, 2, 3])) // FALSE
console.log(checkJump([0, 1, 0])) // TRUE
console.log(checkJump([1, 3, 2, 5, 4, 3, 2, 1])) // FALSE

module.exports = checkJump;