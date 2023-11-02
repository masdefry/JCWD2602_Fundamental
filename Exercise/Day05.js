const getLowestHighesAvg = (arr) => {
    const sortArr = arr.sort((a, b) => a - b)
    const avg = arr.reduce((a, b) => a + b) / arr.length
    return `Lowest = ${sortArr[0]}, Highest = ${sortArr[arr.length-1]}, Average = ${avg}`
}
console.log(getLowestHighesAvg([100, 50, 10, 5, 1]))


/*
    function separatesAnd(arr){
        
    }
*/
const separatesAnd = (arr) => {
    let result = ''
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]) // arr[0] -> Anggur, arr[1] -> Jeruk
        if(i === arr.length-1){
            result += ` and ${arr[i]}`
        }else{
            result += `${arr[i]} `
        }
    }

    return result
}

console.log(separatesAnd(['Anggur', 'Jeruk', 'Apel']))



const array = ['Anggur', 'Jeruk', 'Mangga']
array[0] // 'Anggur'
array[1] // 'Jeruk'
array[2] // 'Mangga'

