// LOOP ARRAY
const campusPwd = ['BSD', 'BTM', 'JKT']
for(let i=0; i < campusPwd.length; i++){
    console.log(campusPwd[i])
}

// Break & Continue
// Break: Untuk menghentikan looping
// Continue: Untuk men-skip looping

// for(let i=1; i<=10; i++){
//     console.log(i)
//     if(i === 5) break;
// }

for(let i=1; i<=10; i++){
    console.log('Hello!')
    if(i === 5) continue;
    console.log(i)
}

// Case. Odd/Even Array
// Ex.  Input   : [1, 4, 5, 8, 10]
//      Output  : ['Odd', 'Even', 'Odd', 'Even', 'Even']

const input = [1, 4, 5, 8, 10]
let output = [] // [Odd] -> [Odd, Even, Odd]
for(let i=0; i < input.length; i++){
    if(input[i] % 2 === 0){
        output.push('Even')
    }else{
        output.push('Odd')
    }    
}

const alpha = ['a', 'b', 'c']
for (let bebas of alpha) {
    console.log(bebas)
    // if(item % 2 === 0) output.push('Even')
    // if(item % 2 !== 0) output.push('Odd')
}
// console.log(output)