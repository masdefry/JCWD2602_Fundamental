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