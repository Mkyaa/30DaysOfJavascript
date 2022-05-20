const numbers=[1,2,3]
let [numOne,numTwo,numThree]=numbers
console.log(numOne,numTwo,numThree)

const names=['Mert','Tolga','Can','Mami']
let [firstPerson, secondPerson, thirdPerson, fourthPerson]=names
console.log(firstPerson,secondPerson,thirdPerson,fourthPerson)

const scientificContants=[2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp]= scientificContants
console.log(e,pi,gravity,bodyTemp,boilingTemp)

const fullStacks = [
    ['HTML', 'CSS', 'JS','React'],
    ['Node', 'Express','MongoDB']
]
const [frontEnd, backEnd] = fullStacks
console.log(frontEnd)
console.log(backEnd)

let[, numberOne, numberTwo]=numbers
console.log(numberOne,numberTwo)

const names2=[undefined,'Kaya', 27, true]
let [firstName ='Mert', lastName, age, isSingle] = names2
console.log(firstName,lastName,age,isSingle)
console.log(names2)


const nums=[1,2,3,4,5,6,7,8,9,10]
let[nums1,nums2,nums3,...rest]=nums
console.log(nums1,nums2,nums3)
console.log(...rest)


const rectangle={
    width:20,
    height:10,
    area:200,
    perimeter:80
}
// let { width, height, area, perimeter } = rectangle
// console.log(width, height, area, perimeter)

let { width, height, area, perimeter=60 } = rectangle
console.log(width, height, area, perimeter)

// let { width:w, height:h, area:a, perimeter:p } = rectangle
// console.log(w,h,a,p)


const rect = {
    width: 20,
    height: 10
}

const calculatorPerimeter= rectangle=>{
    return 2*(rectangle.width + rectangle.height)
}
console.log(calculatorPerimeter(rect))


const person = {
    firstName: 'Mert',
    lastName: 'Kaya',
    age: 27,
    country: 'Turkey',
    job: 'Frontend Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React'
    ],
    languages: ['Turkish', 'English']
  }

const getPersonInfo = obj=>{
    const formattedSkills=obj.skills.slice(0, -1).join(', ');
    const formattedLanguages = obj.languages.slice(0, -1).join(', ')
    let personInfo= `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${obj.age} years old. He teachs ${formattedSkills} and ${obj.skills[obj.skills.length - 1]}. He speaks ${formattedLanguages} and ${obj.languages[obj.languages.length-1]}`
    return personInfo
}
console.log(getPersonInfo(person))


const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
]

for(const {task, time, completed} of todoList){
    console.log(task,time,completed)
}


const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }

const copiedUser = {...user}
console.log(copiedUser)

const copiedUser2={...user, country:'Turkey'}
console.log(copiedUser2)