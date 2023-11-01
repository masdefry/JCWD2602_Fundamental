// OBJECT
// Key & Value -> Property
const user = {
    username: 'ryandefryan' // username disebut dengan key, 'ryandefryan' disebut dengan value
}
const student = new Object()

const productNameArr = ['Anggur', 'Jeruk', 'Semangka']
const productPriceArr = [10000, 15000, 20000]
const products1 = {
    name: 'Anggur',
    price: 10000
}
const products2 = {
    name: 'Jeruk', 
    price: 15000
}
const products3 = {
    name: 'Semangka', 
    price: 20000
}
// CRUD (Create, Read, Update & Delete)
// Create
const campusPwd = {}
campusPwd.location = 'BSD'
campusPwd.building = 'GOP-09'
// console.log(campusPwd)

const programPwd = new Object() // {}
programPwd.name = 'Web Development'
programPwd.totalStudents = 9
// console.log(programPwd)

// Read
console.log(campusPwd.building)
console.log(programPwd.totalStudents)
console.log(campusPwd['location'])
console.log(campusPwd['building'])

// Update
const newData = {
    name: 'Defryan', 
    hobby: 'Programming'
}

newData.hobby = 'Futsal'
console.log(newData)

// Delete
newData.hobby = ''
console.log(newData)
delete newData.hobby
console.log(newData)

// METHOD
// Function yang dimasukan ke dalam object
const myObj = {
    greeting: () => {
        console.log('Welcome, 2602!')
    },
    greeting1: function(){
        console.log('Hello')
    }
}

myObj.greeting()
myObj.greeting1()

// ACCESSING KEY & For In Loop Object
const studentData = {
    name: 'Immanuel',
    address: 'BSD', 
    program: 'WD'
}
console.log(Object.keys(studentData))

for(let key in studentData){
    console.log(key)
    console.log(studentData[key])
}

// DESTRUCTURING ASSIGNMENT
// Destruct dari property object menjadi variable
const data = {
    name: 'Raihan', 
    hobby: 'Study'
}

const {name, hobby} = data
console.log(name)
console.log(hobby)

// SPREAD OPERATOR (...)
const studentProfile = {
    name: 'Immanuel', 
    program: 'WD'
}

const newStudentProfile = {...studentProfile}
newStudentProfile.name = 'Abed'
newStudentProfile.program = 'DM'
console.log(studentProfile)
console.log(newStudentProfile)

let x = 5
let y = x 
y = 10
console.log(y)
console.log(x)



// ARRAY of OBJECT
const productsArr = [
    { name: 'Jeruk', price: 10000 }, // index ke-0
    { name: 'Anggur', price: 15000 }, // index ke-1
    { name: 'Semangka', price: 20000 } // index ke-3
]
console.log(productsArr[0]) // { name: 'Jeruk', price: 10000 }
console.log(productsArr[0].name) // 'Jeruk'

for(let item of productsArr){
    console.log(item.name)
}

/*
    Case. Buatlah program untuk merubah price number menjadi price IDR dari data berikut:
          [
            { name: 'Jeruk', price: 10000 }, 
            { name: 'Anggur', price: 15000 }, 
            { name: 'Semangka', price: 20000 } 
          ]
*/
const productsMarket = [
    { name: 'Jeruk', price: 10000 }, 
    { name: 'Anggur', prince: 15000 }, 
    { name: 'Semangka', price: 20000 } 
]

for(let item of productsMarket){
    item.price = `Rp. ${item?.price?.toLocaleString('id-ID')}`
}
console.log(productsMarket)