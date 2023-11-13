// Callback
// Function yang dijadikan argument untuk function lain

// 1. Indirect CB
// 2. Direct CB

// Case. Buatlah 2 Function, Dimana Function-1 Untuk Menghitung Penjumlahan. Kemudian
//       Hasil Penjumlahannya Ditampilkan di Function Ke-2.

// Create Without Callback
const Penjumlahan = (num1, num2) => {
    return num1 + num2 
}

const Output = (result) => {
    console.log(result)
}

const resultPenjumlahan = Penjumlahan(3, 5) // 8
Output(resultPenjumlahan) // resultPenjumlahan = 8

// Create With Callback (Indirect CB)
// const Perkalian = (num1, num2, cb) => { // num1 = 3, num2 = 5, cb = function Result
//     return cb(num1 * num2) // Result(3 * 5)
// }

// const Result = (output) => { // output = 15
//     console.log(output) // console.log(15)
// }

// Perkalian(3, 5, Result)

// Create With Callback (Direct CB)
const Perkalian = (num1, num2, cb) => { // num1 = 3, num2 = 5, cb = function Result
    return cb(num1 * num2) // Result(3 * 5)
}

Perkalian(3, 5, (output) => { // output = 15
    console.log(output) // console.log(15)
})