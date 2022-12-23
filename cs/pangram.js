function pangram(str){
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabet = alphabet.split('')

    str = str.toLowerCase()

    for(let i=0; i<alphabet.length; i++){
        if(str.indexOf(alphabet[i]) === -1){
            return false
        }
    }return true
}