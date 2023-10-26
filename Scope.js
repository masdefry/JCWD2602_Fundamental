// SCOPE
// var: Tidak mengenal scope
// let & const: Mengenal scope

// var

{
    var name = 'Raihan'
}
console.log(name)

// let & const
// - Declare di global scope, bisa diakses di local scope
// {
//     const number = 10
// }
// console.log(number)

{
    const point = 100
    {
        console.log(point)
        {
            console.log(point)
        }
    }
}

{
    {
        const discount = 50
        console.log(discount)
    }
}



// Buatlah program untuk menampilkan setiap character yang ada didalam variable
// menggunakan console.log
// Ex.  Input = 'Pwdk'
//      Output= P
//              w
//              d
//              k
const input = 'Pwdk'
console.log(input[0]) // P
console.log(input[1]) // w
console.log(input[2]) // d
console.log(input[3]) // k

const input1 = 'Pwdka'// length: 5, index: 0-4
for(let i=0; i < input1.length; i++){
    console.log(input1[i]) // P -> w -> d -> k
}



// Buatlah program untuk menampilkan setiap angka pada sebuah data bertipe data number
// Ex.  Input   : 62857853331
//      Output  : 6
//                2
//                8
//                dst...
let number = 624959593
number = number.toString()
console.log(number[0])
console.log(number[1])