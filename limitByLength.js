const limitByLength = () => {
    const word = require('prompt-sync')
    const value = word()

    const input = value('Enter your word to check if it is a palindrone: ')

    if(input.length <= 100){
        console.log(`${input}.`)
    } else {
        const limit = input.slice(0, 100)

        console.log(`${limit}..`)
    }

}

limitByLength()