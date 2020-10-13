const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const numberic = ["0","1","2","3","4","5","6","7","8","9"]

const string2int= (word)=>{
    let characterSet = [...word]
    let answer =[]
    characterSet.forEach( function (char){
        if(numberic.includes(char)){
            answer.push(char);
        }
    })
    let result =answer.reverse().join("")*1
    console.log(result)
    console.log("result is Integer: ", Number.isInteger(result))
    return result
}

rl.question("Enter your input : ",function(word){
    string2int(word)
    rl.close()
})
