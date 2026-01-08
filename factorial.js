const number = 5

function findFactorial(num){
    let result = num;
    for(let i=1; i<num; i++){
        result = result *i
    }
    return result;
}
console.log(findFactorial(number))