const numbers =[2,6,5,1,3,5,4,5,4,5,6]

function checkLargestNumber(numbers){
    let max = numbers[0]
    for(let i=0; i<=numbers.length; i++){
        if(numbers[i]>max){
            max = numbers[i]
        }
    }
    return max;

}
console.log(checkLargestNumber(numbers))