// function outerFunction(){
//     let count = 0
//     function innerFunction(){
//             count++
//          return count
//     }
//     return innerFunction
// }
// const innerFunc=outerFunction()
// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())


function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne: plusOne(),
        minusOne: minusOne()
    }
}
const innerFuncs = outerFunction()
console.log(innerFuncs)
console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)

// EXERCISES

// function person(){
//     let name='Mert'
//     function surname() {
//         return `${name} Kaya`
//     }
//     return surname()
// }
// const nameSurn=person()
// console.log(nameSurn)

function person(){
    let name='Mert'
    function surname() {
        return `${name} Kaya`
    }
    function age() {
        return `${name} Kaya is 27 years old.`
    }
    return {
        surname:surname(),
        age:age()
    }
}
const nameSurn=person()
console.log(nameSurn)
console.log(nameSurn.age)
console.log(nameSurn.age)


function personAccount() {
    let firstName='Mert', lastName='Kaya',  totalInc=0, totalExp=0, totalBalance=0
    const incomes =[1,3,5], expenses =[3,4,6]
    function totalIncomes() {
       totalInc=incomes.reduce((acc,num)=>acc+=num,0)   
       return totalInc
    }
    function totalExpenses() {
        totalExp=expenses.reduce((acc,num)=>acc+=num,0)
        return totalExp
    }
    function accBalance() {
        totalBalance=totalIncomes()-totalExpenses()
        return totalBalance
    }
    function accInfo() {
        return `He is ${firstName + ' ' + lastName}.\nHis total income is ${totalIncomes()} and total expense is ${totalExpenses()}\nHis total balance is ${accBalance()}`
    }
    function addIncome(...nums) {
        for(const num of nums) {
            incomes.push(num)
        }
        return incomes
    }
    function addExpense(...nums) {
        for(const num of nums) {
            expenses.push(num)
        }
        return expenses
    }
    return {
        totalIncomes:totalIncomes(),
        totalExpenses:totalExpenses(),
        accInfo:accInfo(),
        accBalance:accBalance(),
        addIncome:addIncome,
        addExpense:addExpense
    }
}
const personAccInfo=personAccount()
console.log(personAccInfo)
console.log(personAccInfo.addIncome(77))
console.log(personAccInfo.addExpense(44))
console.log(personAccInfo.totalExpenses)
console.log(personAccInfo.totalIncomes)
console.log(personAccInfo.accBalance)
console.log(personAccInfo.accInfo)


const event = new Date(Date.UTC('buraya tarih girilecek'))
console.log(event.toLocaleString('tr-TR', { timezone: 'UTC'}))