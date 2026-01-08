const numbers =[1, 2, 3, 4]

function getSum(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum = sum + numbers[i]
    }
    return sum;
}
console.log(getSum(numbers))