// Between Dates in Days
// Find first date in Ms
const firstDate = new Date('2023-10-20').getTime()

// Find second date in Ms
const secondDate = new Date('2023-10-22').getTime()

// Different date (Ms) = Second date - First date (Ms)
const DifferentDateInMs = secondDate - firstDate

// Find Ms/Day = 1000 * 3600 * 24
const MsPerDay = 1000 * 3600 * 24

// Result = Different date (Ms) / Ms(Per Day)
const Result = DifferentDateInMs / MsPerDay
console.log(Result)



// Convert Days to Years
const totalDays = 400
const year = Math.floor(totalDays / 365) // 1 Year
let daysLeft = 400  % 365 // 35 Days
const month = Math.floor(daysLeft / 30) // 1 Month
daysLeft = daysLeft % 30 // 35 Days % 30 Days = 5 Days
console.log(`
    ${year} Year, ${month} Month, ${daysLeft} Days
`)



console.log(5%4) // 1
console.log(6%4) // 2
console.log(50%3) // 3x ... = 50 ---> 3x16 = 48 ---> Sisa Bagi = 50 - 48 = 2
console.log(21%7) // 0 
