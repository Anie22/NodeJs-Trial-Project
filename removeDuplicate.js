const removeDuplicate = () => {

    const array = require('prompt-sync')

    const value = array()

    const inp = value('Enter a list of numbers: ')

    let duplicateRemover = inp.split('').map(Number)

    const result = duplicateRemover.filter((item, i) => inp.indexOf(item) === i)

    console.log(result)
}

removeDuplicate()