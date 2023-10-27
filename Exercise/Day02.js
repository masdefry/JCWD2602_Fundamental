// EVEN or ODD
const input = 20
if(input % 2 == 0){
    console.log(`${input} is Even`) // 25 is Even
}else{
    console.log(input + 'is Odd')
}

// IS PRIME
// Bilangan yang habis dibagi 1 dan dirinya sendiri
const number = 3
let isPrime = true  
for(let i=2; i<number; i++){
    if(number % i === 0){
        isPrime = false 
    }
}

if(number === 1){
    console.log('Not Prime ')
}else if(isPrime === true){
    console.log('Is Prime')
}else{
    console.log('Not Prime')
}



// Tentukan apakah deret bilangan input memiliki angka genap atau tidak
// Ex. const stringNumber = '35912' 
//     Output = 'There is even number'

// Ex. const stringNumber = '35917' 
//     Output = 'There is No Even Number'

const isEven = 0

// for(let i=0; i < stringNumber.length; i++){
//     if(stringNumber[i] % 2 === 0){
//         isEven++
//     }
// }

// if(isEven > 0){
//     console.log('There is Even Number')
// }else{
//     console.log('There is No Even Number')
// }



// SUM TOTAL N
const n = 10
let total = 0

for(let i=1; i <= n; i++){
    total += i 
}
console.log(total)

// FACTORIAL
const num = 4
let totalFact = 1
for(let i=num; i > 0; i--){
    totalFact *= i 
}

// FIBONACCI
const nFibo = 5
let firstFibo = 0
let secondFibo = 1

for(let i = 2; i <= nFibo; i++){
    let nextFibo = firstFibo + secondFibo
    firstFibo = secondFibo
    secondFibo = nextFibo
}

console.log(secondFibo)



// PALINDROME
// Susunan karakter kata yang dibalik akan membentuk kata aslinya
// Ex. malam -> malam -> Palindrome
//     kota  -> atok  -> Not Palindrome
//     katak -> katak -> Palindrome

const kata = 'malam'
let kataBalik = ''

for(let i=kata.length-1; i >= 0; i--){
    kataBalik += kata[i]
}

if(kata === kataBalik) console.log('Palindrome')
if(kata !== kataBalik) console.log('Not Palindrome')

// i = 4; 4 >= 0? true ---> kataBalik += m 
// i = 3; 3 >= 0? true ---> kataBalik += a 
// i = 2; 2 >= 0? true ---> kataBalik += l 
// ... 
// i = 0; 0 >= 0? true ---> kataBalik += m 