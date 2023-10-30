// NESTED LOOP

for(let i=1; i<=5; i++){
    console.log(`Looping i=${i}`)
    for(let j=1; j<=5; j++){
        console.log(`Looping j=${j}`)
    }
}

// - Pattern-01
/*
    * * *
    * * *
    * * *
*/
let pattern01 = ''
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        pattern01 += '* '
    }
    pattern01 += '\n'
}
console.log(pattern01)



// - Pattern-02
/*
    * * * * *
    * * * * *
    * * * * *
*/
let pattern02 = ''
for(let i=1; i<=3; i++){
    for(let j=1; j<=5; j++){
        pattern02 += '* '
    }
    pattern02 += '\n'
}
console.log(pattern02)

// 
let pattern03 = ''
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        pattern03 += '*'
    }
    pattern03 += '\n'
}

console.log(pattern03)



// 
let pattern04 = ''
for(let i=5; i>=1; i--){
    pattern04 += '*'
}
console.log(pattern04)
