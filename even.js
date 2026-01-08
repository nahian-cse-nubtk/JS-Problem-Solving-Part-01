const numbers = [1, 2, 3, 4, 5, 6]

function findEvenNumber(numbers){
    const evenNumber =[]
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%2===0){
            evenNumber.push(numbers[i])

        }
    }
    return evenNumber;
}
console.log(findEvenNumber(numbers))