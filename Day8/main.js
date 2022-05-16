let a = 'Javascript'
let b = 10

function learnScopes() {
  console.log(a, b)
  if (true) {
    let a = 'Phyton'
    let b = 100
    console.log(a, b)
  }
  console.log(a, b)
}
learnScopes()
console.log(a, b)


const person = {
  name: 'Mert',
  surname: 'Kaya',
  age: 27,
  country: 'Turkey',
  city: 'Istanbul',
  title: 'Developer',
  skills: ['HTML', 'CSS', 'Javascript', 'React'],
  siblings: {
    name: 'Can',
    surname: 'Kaya'
  },
  getFullName: function () {
    return `${this.name} ${this.surname}`
  },
  'phone number': 5445106634,
  isMarried: false
}

console.log(person)
console.log(person.name)
console.log(person.surname)
console.log(person.age, person.country)
console.log(person.getFullName())
console.log(person.isMarried ? 'Evli' : 'Bekar')
console.log(person.siblings.name, person.siblings.surname)
console.log(person.skills[1])

const getSkills = () => {
  for (let i = 0; i < person.skills.length; i++) {
    console.log(person.skills[i])
  }
}
getSkills()



person.getPersonInfo = function () {
  // let skillWithoutLastSkills = person.skills.splice(0,person.skills.length - 1).join(' ')
  // let lastSkill=person.skills.splice(person.skills.length - 1).join(' ')
  // let lastSkill=person.skills.at(-1)
  // let skills = `${skillWithoutLastSkills} and ${lastSkill}`
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })
  let skills = formatter.format(this.skills)
  let fullName = person.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe learn ${skills}.`
  return statement
}

console.log(person.getPersonInfo())

console.log(person)

// const newPerson=Object.assign({}, person)
const newPerson = { ...person }

newPerson.name = 'Can'
newPerson.siblings.name = 'Mert'
newPerson.skills[0] = 'Deneme'

console.log(newPerson)
console.log(Object.keys(newPerson))
console.log(Object.values(newPerson))
console.log(Object.entries(newPerson))

for (let [key, value] of Object.entries(newPerson)) {
  // console.log(key, value)
}

console.log(Object.freeze(person))
console.log(newPerson.hasOwnProperty('name') ? newPerson.name : false)



// EXERCISES 

const dog = {
  name: 'Zeytin',
  color: 'Siyah',
  legs: 'short',
  age: 3,
  bark: 'woof woof'
}


const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}



console.log(dog)
console.log(dog.name)
console.log(dog.color)
console.log(dog.legs)
console.log(dog.age)
console.log(dog.bark)

dog.breed = 'Beagle'
dog.getDogInfo = function () {
  return `My dog name is ${this.name}.\nIt is ${this.age} years old.`
}

console.log(dog.getDogInfo())
console.log(Object.keys(users))
console.log(Object.values(users))
console.log(Object.entries(users))

let newUsers = Object.entries(users)
console.log(newUsers)
console.log(Object.keys(users).length)



const moreSkillsHavePeople = () => {
  let count = 0,
    moreSkills = ''

  for (let i = 0; i < newUsers.length; i++) {
    if (newUsers[i][1].skills.length > count) {
      count = newUsers[i][1].skills.length
      moreSkills = newUsers[i][0]
    }
  }
  return `${moreSkills} has ${count} skills and most talented person. `
}
console.log(moreSkillsHavePeople())

usersEntries = Object.entries(users)

const isLoggedInUsers = () => {
  let loggedCount = 0,
    loggedUsers = []

  for (i = 0; i < usersEntries.length; i++) {
    if (usersEntries[i][1].isLoggedIn == true) {
      loggedCount++;
      loggedUsers.push(usersEntries[i][0])
    }
  }
  return loggedUsers.join(', ');
}

console.log(isLoggedInUsers())


const highRatedUsers = () => {
  let highRatedUsers = []

  for (i = 0; i < usersEntries.length; i++) {
    if (usersEntries[i][1].points >= 50) {
      highRatedUsers.push(usersEntries[i][0])
      highRatedUsers.push(usersEntries[i][1].points)
    }
  }
  return highRatedUsers.join(' ')
}

console.log(highRatedUsers())

let mernStackDeveloper = [],
    mern=[]
for (i = 0; i < usersEntries.length; i++) {
  for (j = 0; j < usersEntries[i][1].skills.length; j++)
  {
    mern.push(usersEntries[i][1].skills[j][0])
    if(mern.length===usersEntries[i][1].skills.length)
    {
        if(mern.join('').includes('MERN')){
          mernStackDeveloper.push(usersEntries[i][0])
        }
        mern=[]
    }
  }
}
console.log(mernStackDeveloper)


let usersCopies=Object.assign(users)
console.log(usersCopies)

console.log(usersCopies)

users.Mert={
    email:'kayamert@live.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age:27,
    isLoggedIn:true,
    points:100
}


let usersCopiesKeys= Object.keys(users),
  usersCopiesValues= Object.values(users)

console.log(usersCopiesKeys)
console.log(usersCopiesValues)

// country name, capital, populations and languages.

const countries={}
countries.Turkey = {}
countries.Turkey.Capital='Ankara'
countries.Turkey.Population='82m'
countries.Turkey.Language='Turkish'

console.log(countries)




const personAccount ={
  firstName:'Mert',
  lastName:'Kaya',
  income:0,
  expenses:2500
}



