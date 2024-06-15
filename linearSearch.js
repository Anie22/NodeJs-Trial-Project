const linearSearch = () => {
    const word = require('prompt-sync')

    const array = ['Boy', 'boy', 'Girl', 'girl', 'Woman', 'woman', 'orange', 'mango', 'apple', 'grape', 'chicken', 'bus']

    const input = word()

    const value = input('Enter a word to search if it exist: ')


    for(let item of array){
        if(item === value){
            console.log(`${value} exist`)
            break
        } else {
            console.log(`${value} does not exist`)
            break
        }
    }
}

linearSearch()