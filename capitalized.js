const words ='hello word'

function capitalized(word){
    const words =word.split(' ')
    const capitalWord=[]
    for(let i=0; i<words.length; i++){
        let word = words[i]
       capitalWord.push(word[0].toUpperCase()+word.slice(1))
    }
    return capitalWord.join(' ');
}
console.log(capitalized(words))