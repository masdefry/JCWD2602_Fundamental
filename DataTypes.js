// DATA TYPES / TIPE DATA
// Primitive: String, Number, Null, Undefined, Boolean
// Non-Primitive: Array & Object

// - String -> Tipe data yang ditandai dengan '', "" or ``
const campusPwd1 = 'BSD'
console.log(typeof campusPwd1)
const campusPwd2 = "JKT"
const campusPwd3 = `BDG`
console.log(typeof campusPwd2)
console.log(typeof campusPwd3)

const number = '100'
console.log(typeof number)

// String Literal -> Untuk mempermudah kita dalam menyisipkan syntax JS di dalam string
const name = 'Defryan'
const hobby = 'Belajar'
console.log('My name is ' + name + ', My hobby is ' + hobby)
console.log(`My name is '${name}', My hobby is ${hobby}`)

// - Number
const point = 100
const num = 0.1
console.log(typeof num)

// - Booelan -> Tipe data yang hanya bernilai true & false
const isGraduated = true 
const isMarried = false 
console.log(typeof isGraduated)
console.log(typeof isMarried)

// - Null
const angka = null 

// - Undefined
let angka1
console.log(typeof angka)
console.log(typeof angka1)

// - Date
const now = new Date()
console.log(now)
console.log(now.getDate())
console.log(now.getFullYear())