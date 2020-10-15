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
    let result = 1
    while(exp>0){
        result*=10
        exp--
    }
    return result
} 
const toInteger=(arr)=>{
    let result = 0
    if(arr instanceof Array){
        let fromIndex= 0
        arr.forEach((num)=>{
            let parsedInteger = numberic.get(num);
            if(parsedInteger ==0) return;
            let exp =arr.length-(arr.indexOf(num,fromIndex++)+1)
            result+=parsedInteger*powerOfTen(exp)
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
