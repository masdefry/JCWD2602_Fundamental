// ARRAY
// Tipe data yang dapat menampung tipe data lainnya

// [..., ..., ...]
// [index ke-0, index ke-1, index ke-2, dst]

const student1 = 'Raihan'
const student2 = 'Feri'
const student3 = 'Aboy'
const students = ['Raihan', 'Feri', 'Aboy']
const data = ['Abc', 123, true, false, null, undefined]

// Create Read Update Delete (CRUD)
// Create 
const campusPwd = ['BSD', 'JKT', 'BDG']

// Read
campusPwd // ['BSD', 'JKT', 'BDG']
campusPwd[0] // 'BSD'

// Update
let name = 'Ryan'
name = 'Defryan'

const studentsName = ['Kiki', 'Bulan', 'Rahma']
studentsName[0] = 'Defryan' // [Defryan, Bulan, Rahma]
console.log(studentsName)
studentsName[2] = 'Aboy' // [Defryan, Bulan, Aboy]
console.log(studentsName)
studentsName[3] = 'Karta' // Menambahkan data baru di index ke-3
console.log(studentsName)

// Delete 
delete studentsName[0]
console.log(studentsName)

// Method
// - Push: Menambahkan data di index paling akhir
const arrNumbers = [1, 2, 3]
arrNumbers.push(4, 5, 'abc')
console.log(arrNumbers)

// - Unshift: Menambahkan data di index paling awal
const alphabets = ['a', 'b', 'c']
alphabets.unshift('d', 'e')
console.log(alphabets)

// - Pop: Menghapus data di index paling akhir
const campusPwdNew = ['BSD', 'JKT']
campusPwdNew.pop()
console.log(campusPwdNew)

// - Shift: Menghapus data di index paling awal
const arrRandom = [1, true, 'Abc']
arrRandom.shift()
console.log(arrRandom)

// - Splice: Bisa digunakan untuk menghapus atau menambah 
// variableName.splice(index, howManyItemsToDelete, items)
// Menghapus using Splice
const programming = ['JS', 'PHP', 'Phyton']
programming.splice(0, 2)
console.log(programming)

// Menambah using Splice
const dataRandom = [1, true, 'A'] 
dataRandom.splice(1, 2, 'B', 'D')
console.log(dataRandom)

const classPwd = ['JCWD', 'JCDM', 'JCDS']
// classPwd.splice(3, 0, 'JCVD')
classPwd.splice(2, 2)
console.log(classPwd)



// Add Data Manual vs. Splice
const arrNumbersss = [1, 2, 3]
// arrNumbersss[5] = 10 //Manual
arrNumbersss.splice(5, 0, 'BCD') // Splice
console.log(arrNumbersss)