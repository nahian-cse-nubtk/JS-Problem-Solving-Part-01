const word = 'mama'

function checkPalindrome(word){
    const reverse = word.split('').reverse().join('')
    if(word===reverse){
        return true
    }
    else{
        return false
    }
}
console.log(checkPalindrome(word))