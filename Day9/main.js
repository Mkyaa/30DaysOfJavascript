const sumSquare =(num)=>{
    return  (num*num)+(num*num)
}

function result(result, number) {
    return result(number) + number
}

console.log(result(sumSquare, 5))


const a = num1 =>{
    const b = num2 =>{
        const c = num3 =>{
            const d = num4 =>{
                return num1*num2*num3*num4
            }
            return d
        }
        return c
    }
    return b
}

console.log(a(10)(20)(30)(40))


const myName=['Mert', 'Kaya']
let fullName=''

myName.forEach(special=> {
    fullName += special+' '
})
console.log(fullName)

const numbers=[1,3,4,4,5,6]
let total=0
const sumNumbers=(num)=>{
    return total += num
}
numbers.forEach(sumNumbers)
console.log(total)


const startInterval=()=>{
    console.log('Interval başladı')
}
const interval=setInterval(startInterval,1000)

const timeout=setTimeout(()=>{
    clearInterval(interval)
    console.log('Interval bitti, timeout başladı')
},3000)

const stopTimeout=setTimeout(()=>{
    clearTimeout(timeout)
    console.log('Timeout bitti, interval devam ediyor.')
    setInterval(startInterval,1000)
},4000)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']


let sum=0

countries.forEach(country => console.log(country.toUpperCase()))
numbers.forEach(number => sum+=number )
console.log(sum)

let numbers2 = numbers.map(number => number*2)
console.log(numbers2)


let users=[
    {
        id :1,
        name: 'Mert',
        age: 27,
        gender:1
    },
    {
        id :2,
        name: 'Can',
        age:29,
        gender:1
    },
    {
        id :3,
        name: 'Mami',
        age:23,
        gender:1
    },
    {
        id :4,
        name:'Büşra',
        age:25,
        gender:2
    }
]

users=users.map(user => {
    if(user.gender ===2){
        user.gender=1
    }
    else{
        user.gender=2
    }
    return user
})

console.log(users.filter(user => user.gender ===2 && user.age>25))
console.log(users.filter(user => user.gender ===1))
console.log(users.every(user => user.gender ===1))
console.log(users.some(user => user.gender ===1))
console.log(users.find(user => user.gender ===2))
console.log(users.findIndex(user => user.id ===2))

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
const numaralar = [9.81, 3.14, 100, 37]

console.log(products)
console.log(products.sort((a,b) => a.localeCompare(b)))
console.log(products.sort((a,b) => b.localeCompare(a)))
console.log(products.sort())

console.log(numaralar.sort())
console.log(numaralar.sort((a,b) =>  a - b ))
console.log(numaralar.sort((a,b)=> b -a ))
