function formatThousand (number) {
    "Use-Strict"

    const num = require("prompt-sync")
    const formatThousand = num()

    let enterDigit = formatThousand("enter a digit: ")
    number = enterDigit.replace(/,/g, '')
    number = enterDigit.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    console.log(number)
}

formatThousand()