const formatName = (names) => {
    'Use-Strict'

    const name = require("prompt-sync")
    const formatName = name()

    let userName = formatName("Enter your name: ")
    let Name = userName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    names = Name.trim(/\s/g)
    
    console.log(`"${names}"`)

}

formatName()