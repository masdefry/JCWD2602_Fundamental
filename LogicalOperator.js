// LOGICAL OPERATOR
// OR ||
// Apabila salah satu value bernilai true, maka hasil akhir akan true
// Apabila semua value bernilai false, maka hasil akhir akan false
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log(3 > 5 || 5 < 10) // false || true ---> true
console.log(5 > 3 || 5 < 10 || 1 == '1') // true || true || true ---> true

// AND &&
// Apabila salah satu value bernilai false, maka hasil akhir akan false
// Apabila semua value bernilai true, maka hasil akhir akan true
console.log(true && false) // false
console.log(10 !== 10 && 1 === 2 && 3 < 3) // false && false && false ---> false

// NOT !
// Negasi / Kebalikan
console.log(!true) // false
console.log(!false) // true
console.log(!(3<5)) // false
console.log(!(3===3) || 5>=5) // false || true ---> true