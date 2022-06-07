localStorage.setItem('firstName', 'Mert')
localStorage.setItem('lastName', 'Kaya')
localStorage.setItem('age',27)
// let firstName=localStorage.getItem('firstName')
// let lastName=localStorage.getItem('lastName')
// let age=localStorage.getItem('age')
const skills=['HTML','CSS','React','JavaScript']
const skillsJSON=JSON.stringify(skills)
localStorage.setItem('skills',JSON.stringify(skills))

localStorage.getItem('firstName')

console.log(localStorage.firstName,localStorage.lastName)
// console.log(firstName,lastName)
console.log(localStorage.getItem('firstName'))
console.log(localStorage.getItem('skills'))
console.log(typeof localStorage.getItem('skills'))

const objToLocalStSKills=JSON.parse(localStorage.getItem('skills'))
const alternativeObToSkills=JSON.parse(skillsJSON)
console.log()
console.log(objToLocalStSKills)
console.log(alternativeObToSkills)

localStorage.setItem('country','Turkey')
localStorage.setItem('city','Istanbul')

localStorage.clear()

class StudentForm {
    constructor(firstName, lastName, age, country){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.skills = []
        this.country = country
    }
    get getSkills(){
        return this.skills
    }
    set setSkills(skill){
        this.skills.push(skill)
    }
}

const Mert = new StudentForm('Mert','Kaya',27,'Turkey')
Mert.setSkills='HTML'
Mert.setSkills='CSS'
Mert.setSkills='JavaScript'
console.log(Mert)

const student=JSON.stringify(Mert)
localStorage.setItem('Student',student)
const studentObj=JSON.parse(student)

const personAccount={
    firstName:studentObj.firstName,
    lastName:studentObj.lastName,
    incomes:[],
    expenses:[],
    totalIncome(){
        const totalIncome=this.incomes.reduce((acc,inc)=>acc += inc,0)
        return totalIncome
    },
    totalExpense(){
        const totalExpense=this.expenses.reduce((acc,inc)=>acc += inc,0)
        return totalExpense
    },
    addIncomes(...nums){
        for(const num of nums){
            this.incomes.push(num)
        }
    },
    addExpenses(...nums){
        for(const num of nums){
            this.expenses.push(num)
        }
    },
    accountBalance(){
        let balance = (this.totalIncome() - this.totalExpense())
        return balance
    },
    accountInfo(){
        return `He is ${this.firstName + ' ' + this.lastName}.\nHis total income is ${this.totalIncome()} and total expense is ${this.totalExpense()}.\nHis total balance is ${this.accountBalance()}`
    }
}
console.log(personAccount.firstName)
personAccount.addIncomes(3,4,5,7)
personAccount.addExpenses(5,8)
console.log(personAccount.incomes)
console.log(personAccount.accountBalance())

const toDoList=['a','addasd',3]
// for(i=0; i<3; i++) {
//     let toDo=prompt('Ne yapılacak?')
//     toDoList.push(toDo)
// }

const lclToDo=JSON.stringify(toDoList)
localStorage.setItem('toDoList',lclToDo)
const getLocal=localStorage.getItem('toDoList')
const prsToDo=JSON.parse(getLocal)
console.log(prsToDo)
for(const toDo of prsToDo){
    console.log(toDo)
}
