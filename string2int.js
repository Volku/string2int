const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const numberic =new Map([
    ["0",0],
    ["1",1],
    ["2",2],
    ["3",3],
    ["4",4],
    ["5",5],
    ["6",6],
    ["7",7],
    ["8",8],
    ["9",9]
])
const powerOfTen=(exp) => {
    let result = 10
    if(exp ==0) return 1
    while(exp>1){
        result*=result
        exp--
    }
    return result
} 
const toInteger=(arr)=>{
    let result = 0
    if(arr instanceof Array){
        arr.forEach((num)=>{
            result+=numberic.get(num)*powerOfTen(arr.length-(arr.indexOf(num)+1))
        })
        return result
    }
    return 0
}
const string2int= (word)=>{
    let characterSet = [...word]
    let answer =[]
    characterSet.forEach( function (char){
        let asciiCode = char.charCodeAt(0)
        if(asciiCode>=48&&asciiCode<= 57){
            answer.push(char)
        }
    })
    let result =toInteger(answer)
    return result
}

rl.question("Enter your input : ",function(word){
    let result =string2int(word)
    console.log(result)
    console.log("result is Integer: ", Number.isInteger(result))
    rl.close()
})
