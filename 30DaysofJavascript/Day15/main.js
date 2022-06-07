// class Person{
//     constructor(firstName, lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
// }

// const person=new Person('Mert','Kaya')
// console.log(person.firstName)



class Person{
    constructor(firstName, lastName, age, country, city){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.country=country
        this.city=city
        this.score = 0
        this.skills = []
    }
    getFullName(){
        return this.firstName+ ' '+this.lastName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
    set setScore(score){
        this.score = score
    }
    set setSkills(skills){
        this.skills.push(skills)
    }
    getPersonInfo(){
        let fullName = this.getFullName(),
            skills= this.skills.length > 0 && this.skills.slice(0, this.skills.length-1).join(', ') +' and '+ this.skills[this.skills.length-1],
            formattedSkills=skills ? `He knows ${skills}.` : '',
            info= `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}.${formattedSkills} `

        return info
    }
    static favoriteSkills(){
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node'],
        index= Math.floor(Math.random()*skills.length)
        return skills[index]
    }
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
          hours = '0' + hours
        }
        if (minutes < 10) {
          minutes = '0' + minutes
        }
    
        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}


const person1 = new Person('Mert','Kaya',27,'Turkey','Istanbul')
const person2 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person3 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1)
console.log(person1.getFullName())

const persons =[]
persons.push(person1,person2)
console.log(persons)
console.log(person1.score)
console.log(person1.getScore)
console.log(person1.skills)
console.log(person1.getSkills)
person1.setScore=3
console.log(person1.getScore)
console.log(person2.getScore)
person1.setSkills='HTML'
person1.setSkills='CSS'
person1.setSkills='Javascript'
console.log(person1.getSkills)
console.log(person1.skills)
console.log(person1.getPersonInfo())
console.log(person2.getPersonInfo())
console.log(Person.favoriteSkills())
console.log(Person.showDateTime())


class Student extends Person {
    constructor(firstName, lastName, age, country,city,gender) {
        super(firstName, lastName, age, country,city)
        this.gender=gender
    }
    saySomething() {
        console.log('I am a child')
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
          this.skills.length > 0 &&
          this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
    
        let formattedSkills = skills ? `He knows ${skills}` : ''
        let pronoun = this.gender == 'Male' ? 'He' : 'She'
    
        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
      }
}


const s1 = new Student(
    'Asabeneh',
    'Yetayeh',
    250,
    'Finland',
    'Helsinki',
    'Male'
  )

const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')

console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getScore)
// console.log(s1.showDateTime())

s1.setScore=1
s1.setSkills='Planning'
s1.setSkills='Managing'
s1.setSkills='Organizing'

console.log(s1)
console.log(s1.getPersonInfo())
console.log(s1.getFullName())
console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())



// EXERCISES


class Animal{
    constructor(name, age,color,legs,genus){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.genus = genus
    }
}


class Dog extends Animal{
    constructor(name, age, color, leg, genus){
        super(name, age, color, leg, genus)
    }
}
class Cat extends Animal{
    constructor(name, age, color, leg, genus){
        super(name, age, color, leg, genus)
    }
}

const dog = new Dog('Kuçukuçu',3,'Black', 4,'Golden')
console.log(dog)
const cat= new Cat('Pisipisi',1,'White',4,'Van')
console.log(cat)


const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Formuls {
    constructor(array){
        this.array = array
    }
    count(){
        return `Count : ${this.array.length}`
    }
    sum(){
        const total=this.array.reduce((acc, num)=>{return  acc + num}, 0)
        return 'Sum : ' + total
    }
    min(){
        return `Min : ${Math.min(...this.array)}`
    }
    max(){
        return `Min : ${Math.max(...this.array)}`
    }
    range(){
        return `Range : ${Math.max(...this.array) - Math.min(...this.array)}`
    }
    mean(){
        const total=this.array.reduce((acc, num)=>{return  acc + num}, 0),
        mean = Math.ceil(total / this.array.length)
        return 'Mean : ' + mean
    }
    median(){
        this.array.sort()
        let median=0
        if(this.array.length%2!==0){
            median= this.array[((this.array.length+1)/2)-1]
        }
        else{
            median= this.array[(this.array.length/2)]
        }
        return 'Median : ' + median
    }
    mode(){
        let arr=[]
        const cleanArr= new Set(this.array)
        for(const number of cleanArr){
            const filteredArr= this.array.filter(nums => nums===number)
            arr.push({
                'mode': number, 'count': filteredArr.length
            })
        }
        arr.sort((a,b) => b.count-a.count )
        return arr[0]
    }
    var(){
        const total=this.array.reduce((acc, num)=>{return  acc + num}, 0),
        mean = (total / this.array.length)
        let variance=0
        for(const num of this.array){
            variance += ((num - mean)**2)
        } 
        variance= variance / (this.array.length)
        return 'Var : ' + variance
    }
    std(){
        const total=this.array.reduce((acc, num)=>{return  acc + num}, 0),
        mean = (total / this.array.length)
        let variance=0
        for(const num of this.array){
            variance += ((num - mean)**2)
        } 
        variance= variance / (this.array.length)
        let std=Math.sqrt(variance)
        return 'Standart Deviation : ' +std
    }
}

const statistics= new Formuls(ages)
console.log(statistics.count())
console.log(statistics.sum())
console.log(statistics.min())
console.log(statistics.max())
console.log(statistics.range())
console.log(statistics.mean())
console.log(statistics.median())
console.log(statistics.mode())
console.log(statistics.var())
console.log(statistics.std())



class PersonAccount{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = []
        this.expenses = []
    }
    totalIncome(){
        const totalIncome=this.incomes.reduce((acc,inc)=>acc += inc,0)
        return totalIncome
    }
    totalExpense(){
        const totalExpense=this.expenses.reduce((acc,inc)=>acc += inc,0)
        return totalExpense
    }
    addIncomes(...nums){
        for(const num of nums){
            this.incomes.push(num)
        }
    }
    addExpenses(...nums){
        for(const num of nums){
            this.expenses.push(num)
        }
    }
    accountBalance(){
        let balance = (this.totalIncome() - this.totalExpense())
        return balance
    }
    accountInfo(){
        return `He is ${this.firstName + ' ' + this.lastName}.\nHis total income is ${this.totalIncome()} and total expense is ${this.totalExpense()}.\nHis total balance is ${this.accountBalance()}`
    }
}

const personAcc1 = new PersonAccount('Mert','Kaya')
console.log(personAcc1)
console.log(personAcc1.totalIncome())
console.log(personAcc1.totalExpense())
personAcc1.addIncomes(1,3,5)
personAcc1.addExpenses(3,5)
console.log(personAcc1.totalIncome())
console.log(personAcc1.totalExpense())
console.log(personAcc1.accountBalance())
console.log(personAcc1)
console.log(personAcc1.accountInfo())