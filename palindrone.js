const palindrone = (palindrone) => {
    
    const word = require('prompt-sync')
    const value = word()

    const input = value('Enter your word to check if it is a palindrone: ').toUpperCase()

    palindrone = input

    let reverse = input.split('').reverse().join('')

    if(reverse == palindrone){
        console.log(`The word '${palindrone}' is a palindrone`)
    } else {
        console.log(`The word '${palindrone}' is not a palindrone`)
    }
}

palindrone()