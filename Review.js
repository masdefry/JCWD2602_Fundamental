// VARIABLE: Untuk menampung data/value
let name = 'Ryan'
name += 'Defryan' // RyanDefryan

// SCOPE: let & const di declare di inner scope, tidak akan bisa diakses di outer scope

let product = 'Apel'
{
    console.log(product)
}

// MUTABLE: Copy by reference & IMMUTABLE: Copy by value
let campus = 'BSD' // IMMUTABLE
let campus1 = campus // 'BSD'
campus1 = 'JKT'
console.log(campus, campus1)

let products = ['Anggur', 'Jeruk'] // MUTABLE
let products1 = products
let products2 = products1
products2[0] = ['1'] 
console.log(products)
console.log(products1)
console.log(products2)

let nums = [1, 2, 3]
let newNum = [...nums] // Copy by value (Immutable)
newNum[0] = 100
console.log(nums) // [1, 2, 3]
console.log(newNum) // [100, 2, 3]



let alpha = ['a', 'b', 'c']
let NEWALPHA = alpha 
NEWALPHA[0] = 'aaa'
console.log(alpha) // [aaa, b, c]
console.log(NEWALPHA) // [aaa, b, c]



let objProduct = {
    name: 'Jeruk', 
    price: 10000
}
let NEWOBJPRODUCT = {...objProduct}
NEWOBJPRODUCT.name = 'Anggur'
console.log(objProduct) // {name: Jeruk, price: 10000}
console.log(NEWOBJPRODUCT) // {name: Anggur, price: 10000} 


// CONDITIONAL STATEMENT
const pointSiswa = 70
if(pointSiswa >= 70) console.log('Lulus')

// Case. Buatlah program untuk menentukan kelulusan siswa, dengan ketentuan:
//       >= 90 ---> Nilai Sangat Baik
//       >= 70 ---> Nilai Baik 
//       <  70   ---> Nilai Tidak Mencukupi

const nilai = 90 
if(nilai >= 90){
    console.log('Sangat Baik')
}else if(nilai >= 70 ){
    console.log('Baik')
}else{
    console.log('Tidak Mencukupi')
}



// LOOPING
// - While
// - Do While
// - For Loop

for(let i=1; i<5; i++){
    console.log(i)
}



const arr = ['a', 'b', 'c']
arr[0] // 1
arr[1] // 2
arr[2] // 3
arr[3] // 4
arr[4] // 5
for(let i=0; i < arr.length; i++){
    console.log(arr[i])
}

for(let i=arr.length-1; i >= 0; i--){
    console.log(arr[i])
} // i = 2, 1, 0 


const stringText = 'purwadhika bsd'
let string1 = '' // dsb akihdawrup
for(let i=stringText.length-1; i >= 0; i--){
    // string1 = string1 + stringText[i]
    string1 += stringText[i]
}



// Input: [100, 5, 1, 3, 2, 6, 8]
// Output: [100, 5]
const array = (input) => {
    let output = []
    
    for(let i=0; i < input.length; i++){
        if(input[i] % 5 === 0){
            output.push(input[i])
        }
    }
    
    console.log(output)
}

array([100, 5, 1, 3, 2, 6, 8])
array([1, 2, 3, 4, 5])

// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const removeFive = (array) => {
    let output = []

    for(let i=0; i < array.length; i++){
        if(array[i] % 5 !== 0){ // Cek angka didalam array. Kalau 
            output.push(array[i])
        }
    }

    console.log(output)
}

removeFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])



// Case. Count total num=5 in array
// Input    : [1, 100, 5, 3, 5, 10]
// Output   : 2

const totalFive = (array) => {
    let output = 0
    for(let i=0; i <= array.length-1; i++){
        if(array[i] === 5){ // Untuk menemukan angka 5 yang ada didalam array
            output += 1  // Menemukan angka 5, output nya selalu ditambah kelipatan 1
        }
    }

    console.log(output)
}
totalFive([1, 100, 5, 3, 5, 10])



/*
Write a function from a given array of mixed data types and return the sum of all the number
Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] ---> 3
*/

const sumNumber = (array) => {
    let total = 0
    for(let i=0; i<array.length; i++){
        if(typeof(array[i]) === 'number'){ // typeof: Untuk melihat tipe data 
            total += array[i]
        }
    }

    return total
}

console.log(sumNumber(["3", 1, "string", null, false, undefined, 2]))

console.log(typeof(100)) // 'number'
console.log(typeof('abc')) // 'string'
console.log(typeof(null)) // 'object'



