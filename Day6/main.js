// EXERCISES LEVEL1

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
const city=[
    'Istanbul',
    'Ankara',
    'Izmir',
    'Antalya',
    'Bursa',
    'Eskişehir',
    'Adana',
    'Mersin',
    'Yozgat',
    'Trabzon'
]
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

// for (i=0; i<=10; i++){
//     console.log(i)
// }
// i=0
// console.log(`while`)
// while(i<=10){
//     console.log(i)
//     i++
// }
// console.log(`do-while`)
// i=0
// do{
//     console.log(i)
//     i++
// } while(i<=10)

// for (i=10; i>=0; i--){
//     console.log(i)
// }
// console.log(`while`)
// i=10
// while(i>=0){
//     console.log(i)
//     i--
// }
// console.log(`do-while`)
// i=10
// do{
//     console.log(i)
//     i--
// } while(i>=0)

// for(i=5; i<=11; i++){
//     console.log(i)
// }
// console.log(`while`)
// i=5
// while(i<=11){
//     console.log(i)
//     i++
// }
// console.log(`do-while`)
// i=5
// do{
//     console.log(i)
//     i++
// }while(i<=11)

// let dies='#'
// for(let i=0; i<=10; i++){
//     console.log(dies)
//     dies=dies+'#'
// }

// for(i=0; i<=10; i++){
//     console.log(`${i} * ${i} = ${i*i}`)
// }

// console.log(`i       i^2       i^3`)
// for(i=0; i<=10; i++){
//     console.log(`${i}        ${i*i}         ${i*i*i}`)
// }

// for(i=0; i<=100; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// for(i=0; i<=100; i++){
//     if(i%2==1){
//         console.log(i)
//     }
// }

for(i=2; i<100; i++){
    let sayac=0
    for(j=2; j<=i-1; j++){
        if(i%j==0){
            sayac++
        }
    }
    if(sayac==0){
        console.log(i)
    }
}

let toplam=0
for(i=0; i<=100; i++){
    toplam=toplam+i
}
console.log(`0'dan 100'e kadar olan sayıların toplamı = ${toplam}`)

const toplamDizisi=[]
let ciftToplam=0
for(i=0; i<=100; i++){
    if(i%2==0){
        ciftToplam=ciftToplam+i
    }
}
toplamDizisi.push(ciftToplam)
let tekToplam=0
for(i=0; i<=100; i++){
    if(i%2==1){
        tekToplam=tekToplam+i
    }
}
toplamDizisi.push(tekToplam)
console.log(`O'dan 100'e kadar olan tek sayıların toplamı ${tekToplam}'dır ve O'dan 100'e kadar olan çift sayıların toplamı ${ciftToplam}'dır`)
console.log(toplamDizisi)

let numberArray=[0,1,2,3,4,5,6,7,8,9],
    letterArray=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    randomArray=[],
    randomNumber=''

console.log(randomNumber)

for(i=0; i<=4; i++){
    randomNumber=Math.floor(Math.random()*numberArray.length)
    randomArray.push(numberArray[randomNumber])
}
console.log(randomArray)
randomArray=[]
for(i=0; i<=4; i++){
    randomNumber=Math.floor(Math.random()*numberArray.length)
    randomArray.push(numberArray[randomNumber])
    numberArray.splice(randomNumber,1)
}
console.log(randomArray)
console.log(numberArray)

let randomTree='0123456789abcdefghijklmnopqrstuvwxyz'

randomArray=[]
for (i=0; i<=5; i++){
    randomNumber = Math.floor(Math.random()*randomTree.length)
    randomArray.push(randomTree[randomNumber])
} 
console.log(randomArray)
console.log(randomArray.join(''))

randomArray=[]
for (i=0; i<=15; i++){
    randomNumber = Math.floor(Math.random()*randomTree.length)
    randomArray.push(randomTree[randomNumber])
    randomTree.substr(randomNumber,1)
}
console.log(randomArray)
console.log(randomArray.join(''))


let hexCodeString='0123456789abcdef'
randomArray=[]
for(i=0; i<=5; i++){
    randomNumber = Math.floor(Math.random()*hexCodeString.length)
    randomArray.push(hexCodeString[randomNumber])
}
console.log(`Sizin için seçtiğimiz renk : #${randomArray.join('')}`)
console.log(`My first paint pallet code : #0a679a`)

randomArray =[]
for(i=0; i<=2; i++){
    randomNumber=Math.floor(Math.random()*256)
    randomArray.push(randomNumber)
}
console.log(randomArray)
console.log(`Sizin için seçtiğimiz renk : rgb(${randomArray.join(',')})`)

let newCountries=[]

for(i=0; i<countries.length; i++){
    newCountries.push(countries[i].toUpperCase())
}
console.log(newCountries)

let countriesLength=[]

for(i=0; i<newCountries.length; i++){
    countriesLength.push(newCountries[i].length)
}
console.log(countriesLength)

let countriesSpecials=[],
    arrayInArray=[]

for(i=0; i<countries.length; i++){
    countriesSpecials.push([countries[i],newCountries[i].slice(0,3),countries[i].length])
}
console.log(countriesSpecials)

let countInLand=[]
for(i=0; i<countries.length; i++){
    if(countries[i].includes('land')){
        countInLand.push(countries[i])
    }
}
countInLand.length===0
?console.log(`İçerisinde 'land' içeren bir ülke dizide bulunmamaktadır.`)
:console.log(countInLand)


let countEndWithIa=[]

for(i=0; i<countries.length; i++){
    if(countries[i].endsWith('ia')){
        countEndWithIa.push(countries[i])
    }
}
countEndWithIa.length===0
?console.log(`İçerisinde 'ia' biten bir ülke dizide bulunmamaktadır.`)
:console.log(countEndWithIa)



let biggestWord=''
for(i=0; i<countries.length; i++){
    if(countries[i].length>biggestWord.length)
    {
        biggestWord=countries[i]
    }
}
console.log(biggestWord)

let fiveCharWords=[]

for(i=0; i<countries.length; i++){
    if(countries[i].length===5){
        fiveCharWords.push(countries[i])
    }
}
console.log(fiveCharWords)

let biggestWordWT=''

for(i=0; i<webTechs.length; i++){
    if(webTechs[i].length>biggestWordWT.length){
        biggestWordWT=webTechs[i]
    }
}
console.log(biggestWordWT)

let wtSpecials=[]

for(i=0; i<webTechs.length; i++){
    wtSpecials.push([webTechs[i],webTechs[i].length])
}
console.log(wtSpecials)

let acronym=[]

for(i=0; i<mernStack.length; i++){
    
    acronym.push(mernStack[i][0])
}
console.log(acronym.join(''))

for(i=0; i<webTechs.length; i++){
    console.log(webTechs[i])
}


// let fruit=['banana','orange','mango','lemon','watermelon'],
//     editFruit=[]

// for(i=0; i<fruit.length; i++){
//     if(i<(fruit.length-1)/2){
//         editFruit.push(fruit[(fruit.length-1)-i])
//     }
//     if(i%((fruit.length-1)/2)===0.5)
//     {
//         editFruit.push(fruit[Math.floor(i)])
//     }
//     if(i>(fruit.length-1)/2)
//     {
//         editFruit.push(fruit[(fruit.length-1)-i])
//     }
    
// }
// for(i=0; i<fruit.length; i++){
//     fruit[i] =editFruit[i]
// }
// console.log(fruit)
// console.log(editFruit)


for(i=0; i<fullStack.length; i++){
    for(j=0; j<fullStack[i].length; j++){
        console.log(fullStack[i][j])
    }
}

let sortedCity=[]
for(i=0; i<city.length; i++){
    sortedCity.push(city[i])
}
sortedCity.sort()
console.log(city)
console.log(sortedCity)
webTechs.sort()
mernStack.sort()
console.log(webTechs)
console.log(mernStack)


let landIn=[]
for(i=0; i<countries.length; i++){
    if(countries[i].includes('land')){
        landIn.push(countries[i])
    }
}
landIn.length===0 
? console.log(`İçerisinde 'land' içeren bir ülke dizide bulunmamaktadır.`)
: console.log(landIn)


let longestWord=''

for(i=0; i<countries.length; i++){
    if(countries[i].length > longestWord.length){
        longestWord=countries[i]
    }
}

console.log(longestWord)


let fourCountries=[]

for(i=0; i<countries.length; i++){
    if(countries[i].length===4){
        fourCountries.push(countries[i])
    }
}
fourCountries.length!==0
? console.log(fourCountries)
:console.log(`İçerisinde 4 harfli bir ülke bulunmamaktadır.`)

let reverseCountries =[]

for(i=0; i<countries.length; i++){
    reverseCountries.push(countries[i].toUpperCase())
}
reverseCountries.reverse()
console.log(reverseCountries)