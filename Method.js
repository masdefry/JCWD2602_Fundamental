// METHOD
// Shortcut Untuk Memanipulasi Data

// 1. String Built-in Method
// .length -> Untuk menghitung jumlah karakter
const paragraph = 'Abcdefghijklmnopq'
console.log(paragraph.length)

// .slice -> Untuk memotong
const text = 'Hello, World!'
console.log(text.slice(2, 5))

// .substring -> Apabila parameter index pertamanya > dari parameter index kedua, maka 
//               akan dilakukan switch
const nama = '123456789'
console.log(nama.substring(5, 2)) // Dimulai index ke-2, sampai index ke-5 (index ke-5 not include)

// .toUpperCase & .toLowerCase
const fullname = 'Defryan'
console.log(fullname.toUpperCase())
console.log(fullname.toLowerCase())



// 2. Number Built-in Method
// - .toString -> Mengkonversi dari number menjadi string

const phoneNumber = 62846895030283
console.log(phoneNumber.toString().slice(0, 5))

// - Math Round -> Pembulatan sesuai aturan matematika
console.log(Math.round(1.4))
console.log(Math.round(1.5))
// - Math Ceil -> Pembulatan keatas
console.log(Math.ceil(1.2))
// - Math Floor -> Pembulatan kebawah
console.log(Math.floor(1.9))




const firstDate = new Date('2023-10-23')
const secondDate = new Date('2023-10-26')
const firstMS = firstDate.getTime()