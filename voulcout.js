
const word = "hero"

function countVowel(word){
    const matchWorld = word.toLowerCase()
    const vowel = 'aeiou'
    let count = 0
    for(let i= 0; i<word.length; i++){
        if(vowel.includes(matchWorld[i])){
            count ++
        }

    }
    return count;

}
console.log(countVowel(word))