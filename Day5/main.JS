let numbers=[0,1,2,3,4,5]

numbers[1]=0
numbers[numbers.length-1]=0
console.log(numbers)

const eightsEmptyArray=Array(8)
console.log(eightsEmptyArray)

const eightsXArray=Array(8).fill('x')
console.log(eightsXArray)

const eightsLoaderArray=Array(3).fill('<div>Loader</div>')
console.log(eightsLoaderArray)

let firstList=[1,2,3],
    secondList=[4,5,6],
    thirdList=firstList.concat(secondList)

console.log(thirdList)
console.log(firstList+secondList)

console.log(thirdList.indexOf(4))

const fruit=['banana', 'orange', 'mango','lemon']
let index=fruit.indexOf('orange')

if(index != -1){
    console.log(`Kelime dizideki ${index+1}. elemandır.`)
}
else{
    console.log(`Kelime dizide yoktur.`)
}


index 
? console.log(`Kelime dizideki ${index+1}. elemandır.`)
: console.log(`Kelime dizide yoktur.`)

let names = ['Mert','Can','Mert','Fatma','Imdat']  
console.log(names.lastIndexOf('Mert'))
console.log(names.includes('Mert'))
console.log(Array.isArray(names))
console.log(names.toString())
console.log(names.join(', '))
console.log(names.slice(0,2))
console.log(names.splice(1,names.length-1,'Mehmet','Akif','Ersoy'))
console.log(names)

names.push('Imdat','Fatma')
console.log(names)

let lastItemPop=names.pop()
console.log(lastItemPop)
console.log(names)

let firstItemShift=names.shift()
console.log(names)
console.log(firstItemShift)

names.unshift(lastItemPop)
names.push(firstItemShift)
console.log(names)

console.log(names[0].split('').reverse().join(''))
console.log(names.sort())
console.log(names.reverse())

let arrayInArray=[1,2,3,[4,5,6,11,12,13],7,8,9]
console.log(arrayInArray)
console.log(arrayInArray[3][1])
console.log(arrayInArray[3][arrayInArray[3].length-1])
console.log(Array.isArray(arrayInArray[3]))

console.log('////////////////')
// EXERCISES LEVEL1
let nullArray = new Array(),
    nullArray2=[]

let array = new Array(6),
    array2 = ['a', 'b', 'c',1,2,3,4,5,8]

console.log(array2.length)
console.log(array2[0]+array2[array2.length-1]+array2[Math.floor(array2.length/2)])

let mixedDataTypes=['Mert',27,null,undefined,NaN,true],
    itCompanies=['Facebook','Google','Amazon','IBM','Microsoft','Oracle','Apple']

console.log(itCompanies)
console.log(itCompanies[0]+' '+itCompanies[Math.floor(itCompanies.length/2)]+ ' '+ itCompanies[Math.floor(itCompanies.length-1)])
console.log(itCompanies)
console.log(itCompanies.join(', '))
console.log(itCompanies.join(', ').toLocaleUpperCase())

let lastItemAnArray=itCompanies[itCompanies.length-1]
itCompanies.pop()
console.log(`${itCompanies.join(', ')} and ${lastItemAnArray} are big IT companies.`)

let companiesIsHave = itCompanies.indexOf('IBM'),
    companiesHaveWord=itCompanies[companiesIsHave]

companiesIsHave
? console.log(`${companiesHaveWord} dizinin içinde vardır.`)
: console.log(`${companiesHaveWord} dizide yoktur.`)


console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(itCompanies.length -3, itCompanies.length ))
console.log(itCompanies.slice(1, itCompanies.length-1))
itCompanies.push('Apple')
console.log(itCompanies.pop())
console.log(itCompanies.shift())
console.log(itCompanies.splice())

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.',
    cleanText=text.match(/[\w+\s\d+]/gi).join('').split(' ')

console.log(cleanText)
console.log(cleanText.length)

const shoppingCart=['Milk','Coffee','Tea','Honey'],
    alergical= ['Honey']

if(shoppingCart[0]!=='Meat'){
    shoppingCart.unshift('Meat')
}
console.log(shoppingCart)

if(shoppingCart[shoppingCart.length-1]!=='Sugar'){
    shoppingCart.push('Sugar')
}
console.log(shoppingCart)

if(alergical.includes('Honey')==shoppingCart.includes('Honey')){
    let honeyIndex=shoppingCart.indexOf('Honey')
    shoppingCart.splice(honeyIndex,1)
}
console.log(shoppingCart)


let teaIndex=shoppingCart.indexOf('Tea')
shoppingCart[3]='GreenTean'
console.log(shoppingCart)


const frontEnd=['HTML','CSS','JS','React','Redux'],
    backEnd=['Node','Express','MongoDB'],
    fullStack=frontEnd.concat(backEnd)

console.log(fullStack)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24],
    medianAge=(Number(ages[Math.floor((ages.length-1)/2)])+ Number(ages[Math.ceil((ages.length-1)/2)]))/2
let averageAge=0

ages.sort()

console.log(medianAge)
console.log(ages)
console.log(`En küçük yaş ${ages[0]}`)
console.log(`En büyük yaş ${ages[ages.length-1]}`)

for (i=0; i<ages.length; i++){
    averageAge=averageAge+ages[i]
}
averageAge=averageAge/ages.length
console.log(averageAge)
console.log(ages[ages.length-1] - ages[0])

console.log(Math.abs(averageAge - ages[0]))
console.log(Math.abs(averageAge - ages[ages.length-1]))