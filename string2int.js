const readline = require("readline")
const assert = require("assert")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const numberic = new Map([
    ["0", 0],
    ["1", 1],
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["5", 5],
    ["6", 6],
    ["7", 7],
    ["8", 8],
    ["9", 9]
])

const toInteger = (str2int) => {
    let numSet = [...str2int]
    let result = 0
    let maxDigits = numSet.length - 1
    for (let i = 0; i < numSet.length; i++) {
        result += numberic.get(numSet[i]) * (10 ** maxDigits);
        maxDigits-=1
    }
    return result
}
const string2int = (word) => {
    const regexp = new RegExp("[^0-9]", 'g')
    let answer = word.replace(regexp, '')
    let result = toInteger(answer)
    return result
}

let testPass = true
//Standard Case
const numAfterAlphabhet = "abc123"
assert(string2int(numAfterAlphabhet) === 123)

const numBeforeAlphabhet= "123abd"
assert(string2int(numBeforeAlphabhet) === 123)

const case_3 = '101'
assert(string2int(case_3) === 101)

const case_4 = '1000'
assert(string2int(case_4) === 1000)

const case_5 = '103341227'
assert(string2int(case_5) === 103341227)

const case_6 = '1ad2f3lk4k5o6p7[8i9'
assert(string2int(case_6) === 123456789)

//randomCase
for (let i = 0; i < 6; i++) {
    let random = parseInt(Math.floor(1000000000 + Math.random() * 900000000000));
    let questionTosolve = random.toString(10)
    console.log(Number.isInteger(questionTosolve))
    let result = string2int(random.toString(10))
    console.log(result + ': ' + random)
    console.log("result is Integer: ", Number.isInteger(result))
    assert(result === random && Number.isInteger(result))
}
    rl.question("Enter your input : ", function (word) {
        let result = string2int(word)
        console.log(result)
        console.log("result is Integer: ", Number.isInteger(result))
        rl.close()
    })
