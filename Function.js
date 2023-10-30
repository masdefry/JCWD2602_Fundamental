// FUNCTION
// Tempat untuk menyimpan baris code

// - Function Declaration
/*
    function functionName(){
        Block of code
    }
*/
// 1. Build
function showConsole(){
    console.log('Hello, World!')
}

// 2. Call
showConsole()

// Hoisting -> Call baru kita build
Penjumlahan()
Penjumlahan()
Penjumlahan()
function Penjumlahan(){
    console.log(1 + 1)
}

// - Function Expression: Function yang dimasukan kedalam variable
const Pengurangan = function(){ // function() -> Anonymous Function
    console.log(1-1)
}
Pengurangan()

// - Arrow Function
const Perkalian = () => { // () => -> Anonymous Function
    const num1 = 5
    const num2 = 10

    console.log(num1 * num2)
}
Perkalian()

// FUNCTION WITH PARAMETER
const Pembagian = (num1, num2) => { //  10 -> num1, 5 -> num2
    console.log(num1 / num2) // 10 / 5 = 2
}
Pembagian(10, 5) // 10 & 5 disebut dengan argument

function Perkaliannn(num1, num2){
    console.log(num1 * num2)
}
Perkaliannn(3, 3)

// FUNCTION WITH RETURN
const Penjumlahan1 = (num1, num2) => {
    return num1 + num2 
}

console.log(Penjumlahan1(3, 3) + 3)
console.log(Penjumlahan1(3, 5))
console.log(Penjumlahan1(1, 2) * Penjumlahan1(3, 3))

// FUNCTION WITH REST PARAMETERS
const showNumber = (a, b, c, d, ...manyMore) => {
    console.log(manyMore)
}
showNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// FUNCTION WITH DEFAULT PARAMETER
const welcomingName = (name = 'User') => {
    console.log(`Welcome, ${name}!`)
}

welcomingName('Raihan')
welcomingName()

// RECURSIVE FUNCTION
const countDown = (num) => {
    console.log(num)
    num--

    if(num > 0){
        return countDown(num) 
    }

    return num 
}

console.log(countDown(5))

// CLOSURE FUNCTION: Inner function yang dapat mengakses variable dari outer function
const greeting = () => {
    const name = 'Defryan'

    const showGreeting = () => {
        console.log(`Welcome, ${name}`)
    }
}

greeting()