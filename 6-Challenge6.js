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

    let countSpace = size - 1;
    let countStarItem = 1;

    let finalString = "";


    for (let i = 1; i <= size; i++) {
        finalString += Array(countSpace + 1).join(assets[4]) +
            Array(countStarItem + 1).join(assets[0]) +
            Array(size + 1 ).join(assets[1]);

        finalString += assets[5];
        countSpace--;
        countStarItem++;
    }

    countStarItem = size;
    countSpace = 0;

    for (let i = 0; i < size; i++) {
        finalString += Array(countSpace + 1).join(assets[4]) +
            Array(countStarItem + 1).join(assets[2]) +
            Array(size + 1 ).join(assets[3]);

        if ((i + 1) < size){ finalString += assets[5] }
        countStarItem--;
        countSpace++;
    }

    return finalString;
}

console.log(createCube(5));