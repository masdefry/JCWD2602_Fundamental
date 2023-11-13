// Async
// Menjalankan program secara paralel

// console.log('Hello')
// setTimeout(() => { // Async Function Bawaan JS
//     console.log('Asyn Function')
// }, 0)
// console.log('Finish')

// Case:
// 1. Show Welcoming
// 2. Fetch Data User // Async
// 3. Show Data User
// Callback
// const database = [1, 2, 3, 4, 5]
// const deleteDb = (cb) => {
//     setTimeout(() => {
//         database.pop()
//         return cb(database)
//     }, 2000)
    
// }

// deleteDb((output) => {
//     deleteDb((output) => {
//         deleteDb((output) => {
//             deleteDb((output) => {
//                 deleteDb((output) => {
//                     deleteDb((output) => {
//                         console.log(output)
//                     })
//                 })
//             })
//         })
//     })
// })


// Promise
const newDb = [1, 2, 3, 4, 5]
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const currentLength = newDb.length
        newDb.pop()

        console.log('>>>')

        if(currentLength !== newDb.length){
            return resolve(newDb)
        }else{
            return reject('Delete Failed!')
        }
    }, 3000)
})

// myPromise
// .then((res) => {
    
// })
// .catch((err) => {
//     console.log('Errr')
//     console.log(err)
// })
// .finally(() => {
//     console.log('Finish')
// })

// Async Await
// const bebas = async() => {
//     try {
//         const result = await myPromise
//         const result1 = await myPromise
//         console.log(result1)
//     } catch (error) {
//         console.log('Ini Error Catch')
//         console.log(error)
//     }
// }

// bebas()


// Case. Register ---> FE: Validasi inputan ---> Validasi benar ---> Kirim data ke db
const validation = async(email) => {
    try {
        if(!email) throw 'Input Null'
        if(!email.includes('@')) throw 'Email Not Valid'

        return 'Success'
    } catch (error) {
        console.log(error)
    }
}

validation('')