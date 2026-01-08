const duplicate = [1, 2, 2, 3, 4, 4]

function removeDuplicate(number){
    const notDuplicate =[]
    for(let i=0; i<number.length; i++){
        if(!notDuplicate.includes(number[i])){
            notDuplicate.push(number[i])
        }

    }
    return notDuplicate;
}
console.log(removeDuplicate(duplicate))