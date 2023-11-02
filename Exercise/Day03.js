// SEARCH STRING
const searchString = (str, strToReplace) => {
    return str.replace(strToReplace, '')
}

console.log(searchString('Hello World!', 'ell'))

// UPPERCASE FIRST CHARACTER
const upperFirstChar = (str) => {
    let result = ''
    for(let i=0; i<str.length; i++){
        if(i === 0 || str[i-1] === ' '){
            result += str[i].toUpperCase()
        }else{
            result += str[i]
        }
    }

    return result
}

console.log(upperFirstChar('hello world defryan'))



const swapCase = (str) => {
    let result = ''
    for(let i=0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()) result += str[i].toLowerCase()
        if(str[i] === str[i].toLowerCase()) result += str[i].toUpperCase()
    }

    return result
}

console.log(swapCase('JcWd'))



const findA = (str) => {
    let result = ''
    for(let item of str){
        item.toLowerCase() === 'a'? result += '*' : result += item
    }

    return result
}

console.log(findA('An apple'))



const deleteOddNumber = (arr) => {
    for(let i=0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){ 
            arr.splice(i, 1) 
        }
    }

    return arr 
}

console.log(deleteOddNumber([1, 2, 3, 4, 5]))

const txt = 'Hello WOrld'
console.log(txt.split(' '))