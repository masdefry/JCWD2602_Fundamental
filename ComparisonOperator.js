// COMPARISON OPERATOR / OPERATOR PEMBANDING
// >, >=, <, <=, ==, ===, !=, !==
// Akan Menghasilkan Value Berupa Nilai Boolean (true/false)

console.log(10 > 5) // true
console.log(10 > 10) // false
console.log(5 <= 5) // true
console.log(10 != 10) // false
console.log(5 != 3) // true

// - == -> Hanya mengecek valuenya saja
// - === -> Mengecek value dan juga tipe datanya
console.log(5 == '5') // true
console.log(3 === '3') // false



// ##### ADDITIONAL #####
// Increment & Decrement
let number = 3
number = number + 1 // 4
number++ // Increment
console.log(number) // 5

let point = 5
point++ 
console.log(point) // 6

let value = 100
value + 1 // Skip
value++ // 101
console.log(value)

let nilai = 100
nilai += 100
console.log(nilai) // 200

let discount = 10
discount *= 2 // 20

// String Special Concate
let name1 = 'Defry'
let name2 = 'Isfandy'
console.log(name1 + name2)
console.log(name1 - name2) // NaN Not a Number

let name3 = 'Raihan'
let points = 100
console.log(name3 + points) // Apabila string + number ---> Concate

let num1 = 100
num1++ // 101
num1 += '2' // '1012'
console.log(num1) // '1012'

let num2 = '10'
num2++ // Number 11
num2 += '1' // 11+'1' = '111'
console.log(num2)

let num3 = '100'
num3 *= 3 //  Number 300
num3 += 5 // Number 305
console.log(num3)

let num4 = '63'
num4 -= 1
console.log(num4)