// CONDITIONAL STATEMENT
// Pengkondisian

// If
/*
    if(condition){ // Apabila condition terpenuhi, maka dia akan menjalankan block of code
        Block of code
    }
*/

const pointStudent = 80
if(pointStudent > 70){ // 80 > 70? true
    console.log('Student Lulus!')
}

if('abc' == 'Abc'){ // false
    console.log('Sama!')
}

// If - Else ---> Else sebagai default output apabila condition atas tidak terpenuhi / bernilai false
if(50 < 80){
    console.log('Running')
}else{
    console.log('Error')
}

// If - Else If - Else
const nilaiSiswa1 = 75
if(nilaiSiswa1 > 90){ // false
    console.log('Lulus Baik')
}else if(nilaiSiswa1 > 74){ // true
    console.log('Lulus Bagus')
}else if(nilaiSiswa1 > 70){ 
    console.log('Lulus')
}else{
    console.log('Tidak Lulus')
}

const nilaiSiswa = 90
if(nilaiSiswa > 90){ // false
    console.log('Lulus Baik')
}else if(nilaiSiswa > 70){ // true
    console.log('Lulus')
}else{
    console.log('Tidak Lulus')
}



// Ternary Operator
/*
    condition? Block of code if condition === true : block of code if condition === false
*/
// Ex. Saya ingin memvalidasi panjang input dari form user dengan 2 kondisi, apabila
//     jumlah karakter > 19 ---> Register failed
//     jumlah karakter < 20 ---> Register Success
const formUser = 'defryan@gmail.com'

if(formUser.length > 19){
    console.log('Register Failed')
}else{
    console.log('Register Success')
}

formUser.length > 19? console.log('Register Failed') : console.log('Register Success') // Ternary Operator

const point = 70
point > 90? 
console.log('Nilai Anda Baik!') : 
point > 70? 
console.log('Nilai Anda Cukup') : console.log('Nilai Anda Kurang')
