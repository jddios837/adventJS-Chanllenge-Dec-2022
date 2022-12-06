// A couple of Christmas enthusiasts have created a Christmas
// decoration company. The first decoration they want to manufacture
// is a cube that is placed on the trees. The problem is that they have to
// program the machine and they don't know how to do it. They have asked us for
// help to achieve it.
// To create the cubes, a number with the desired size is passed to the program
// and it returns a string with the design of that size. For example, if we pass
// a 3, the program must return a cube of 3x3x3:

function createCube(size) {
    const assets = {
        0: "/\\",
        1: "_\\",
        2: "\\/",
        3: "_/",
        4: " ",
        5: "\n"
    }

    const head = [], tail = [];

    for (let i = 0; i < size; i++) {
        head.push(
            assets[4].repeat(size - i - 1) +
            assets[0].repeat(i + 1) +
            assets[1].repeat(size)
        )

        tail.push(
            assets[4].repeat(i) +
            assets[2].repeat(size - i) +
            assets[3].repeat(size)
        )
    }
    return head.concat(...tail).join(assets[5]);
}

console.log(createCube(5));