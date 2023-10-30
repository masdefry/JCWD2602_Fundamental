// TRUTHY FALSY JAVASCRIPT: Nilai non-boolean yang dikonversikan menjadi nilai boolean

// FALSY: 0, '', null, undefined, NaN
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))

// TRUTHY
console.log(Boolean(1))
console.log(Boolean('a'))



// Case. Validasi inputan dari user, apabila kosong maka munculkan pesan error ,
//       apabila inputan ada maka munculkan pesan success
const input = 'a'
if(input === ''){
    console.log('Error')
}else{
    console.log('Success')
}

if(input){ // Apabila inputannya ada, maka dia akan success 
    console.log('Success')
}else{
    console.log('Error')
}