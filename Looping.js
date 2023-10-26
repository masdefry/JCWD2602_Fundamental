// LOOPING -> Perulangan
// console.log('Hello, World!')
// console.log('Hello, World!')
// console.log('Hello, World!')
// console.log('Hello, World!')
// console.log('Hello, World!')

// - While
/*
    while(condition){
        Block of code
    }
*/
let start = 1 // 1 ---> 2; 2 ---> 3; 3 ---> 4
while(start <= 3){ // 1 <= 3? true ---> 2 <= 3? true ---> 3 <= 3? true ---> 4 <= 3? false
    console.log('Hello, World!') // 1x ---> 2x ---> 3x
    start++
}

let initial = 1
while(initial < 3){ 
    console.log('Hai!')
    initial += 10
}



// - Do - While
/*
    do{
        Block of code
    }while(condition)
*/
let angka = 1 // 1->2; 2->3; 3->4
do{
    console.log(angka) // 1x -> 2x -> 3x
    angka++
}while(angka <= 3)

let angka2 = 100
do{
    console.log(angka2)
    angka2++
}while(angka2 < 10)

// - For Loop
/*
    for(start; condition; exitWay){
        Block of code
    }
*/
for(let i=1; i <= 3; i++){
    console.log(i)
}

// Ex. Buatlah console.log untuk menampilkan angka dari 10 -> 1
for(let i=10; i >= 1; i--){
    console.log(i)
}