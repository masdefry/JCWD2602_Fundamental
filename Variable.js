console.log("Hello, World!"); // ; -> Semicolon

// Statement & Expression
// Statement -> Syntax yang tidak menghasilkan apapun
// Expression -> Syntax yang menghasilkan sesuatu
console.log(2+2) // Statement & Expression
console.log(1+1) // Create Comment: CTRL + ? or CTRL + /
/*
    This is
    JCWD2602 Class!
*/



// VARIABLES -> Tempat Untuk Menyimpan Data
// Declare: var variablename = value
console.log("Hello, JCWD!")
console.log("Hello, JCWD!")
console.log("Hello, JCWD!")
console.log("Hello, JCWD!")
console.log("Hello, JCWD!")

var world = "Hello, JCWD!"
console.log(world)
console.log(world)
console.log(world)
console.log(world)
console.log(world)

// - Variable Rules:
// 1. Variable name not ambigous
var streetName = 'Soekarno'
// 2. First character must be alphabet or special character (_, $)
var studentName
// var 123studentName
// var #purwadhika
// var _campus
var $program
// 3. Can't same with Javascript syntax
// var console.log
// var var
// 4. Use _ or camelCase (ex. studentName, student_name)
// var student name 
// var student-name 
var student_name 
var studentNameJCWDProgram
// 5. Case sensitive (ex. studentName dengan StudentName)
var studentName = 'Aboy'
var StudentName = 'Supriadi'
console.log(studentName)


// - Variable Declaration: const & let
// var 
// Memungkinkan membuat variable dengan nama yg sama
var animal = 'Jerapah'
var animal = 'Gajah'
console.log(animal)
// Valuenya masih bisa diubah
var studentName = 'Raihan'
studentName = 'Bulan'
console.log(studentName)
// Tidak memiliki aturan scope


// let
// Tidak diperbolehkan membuat variable dengan nama yg sama
let campusPwd1 = 'BSD'
let campusPwd2 = 'JKT'
// Valuenya masih bisa diubah
let number = 10
number = 20
console.log(number)
// Memiliki aturan scope

// const
// Tidak diperbolehkan membuat variable dengan nama yg sama
// const point = 10
// const point = 20
// Valuenya tidak bisa diubah
const color = 'Red'
color = 'Blue'
// Memiliki aturan scope