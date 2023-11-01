// CLASS: Blueprint untuk mencetak object dengan nama property yang sama
class Students{
    name = ''
    hobby = ''
    program = ''

    constructor(name, hobby, program){
        this.name = name, 
        this.hobby = hobby,
        this.program = program
    }
}

const students1 = new Students('Defryan', 'Futsal', 'WD')
const students2 = new Students('Kevin', 'Olahraga', 'WD')
console.log(students1)
console.log(students2)
const studentsArr = [
    new Students('Defryan', 'Futsal', 'WD'),
    new Students('Kevin', 'Olahraga', 'WD')
]
console.log(studentsArr)















