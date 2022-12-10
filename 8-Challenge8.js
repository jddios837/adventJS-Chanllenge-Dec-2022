//
// A palindrome is a word or phrase that reads the same from left
// to right as it does from right to left.

// The spare parts are strings and the mechanic Elfon Masc has said
// that a spare part is valid if the part can be a palindrome after
// removing, at most, one character.

// INPUT String
// checkPart("uwu") // true
// "uwu" is a palindrome without removing any character

// checkPart("miidim") // true
// "miidim" can be a palindrome after removing the first "i"
// "midiim

// checkPart("midu") // false
// "midu" cannot be a palindrome after removing a character
function checkPart(part) {
    const valid = (left, right) => {
        for (let i = left; i <= Math.floor((left + right) / 2); i++) {
            if (part[i] !== part[right - (i - left)]) {
                return false
            }
        }
        return true
    }

    for (let i = 0; i <= Math.floor(part.length / 2); i++) {
        const right = part.length - 1 - i
        if (part[i] !== part[right]) {
            return valid(i, right - 1) || valid(i + 1, right)
        }
    }

    return true
}

// console.log(checkPart("uwu")) // true
console.log(checkPart("miidim")) // true
console.log(checkPart("midu"))// false