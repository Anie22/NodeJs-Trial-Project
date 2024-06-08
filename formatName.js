const formatName = (names) => {
    'Use-Strict'

    const name = require("prompt-sync")
    const formatName = name()

    let userName = formatName("Enter your name: ").trim()
    let Name = userName.replace(/\s/g, ' ')
    names = Name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    
    console.log(`"${names}"`)

}

formatName()