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
const city = [
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

function sayHello() {
    console.log("Hello")
}
sayHello();


function sumArrayValues(array) {
    let total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

let dizi = [2, 4, 5, 6, 7, 8, 9, 11]
console.log('Toplam', sumArrayValues(dizi))
console.log(sumArrayValues([2, 4, 5, 6, 7, 8])
)


function fullNamePr() {
    console.log('Mert Kaya')
}
fullNamePr()


function fullName() {
    let name = 'Mert',
        surname = 'Kaya',
        fullName = name + ' ' + surname
    return fullName
}
console.log(fullName())


function addNumber(num1, num2) {
    return num1 + num2
}
console.log(addNumber(5, 2))


function rectangeArea(length, width) {
    let rectangeArea = 0
    return rectangeArea = length * width
}

let rectLength = 10,       //prompt('Diktörtgenin uzunluğunu girin.'),
    rectWidth = 20,        //prompt('Diktörtgenin genişliğini girin.')
    rectHeigth = 20

console.log(rectangeArea(rectLength, rectWidth))


function perimeterArea(rectLength, rectWidth) {
    return 2 * (rectLength + rectWidth)
}

console.log(perimeterArea(rectLength, rectWidth))


function volumeOfRectPrism(rectLength, rectWidth, rectHeigth) {
    return rectLength * rectHeigth * rectWidth
}

console.log(volumeOfRectPrism(rectLength, rectWidth, rectHeigth))


function areaOfCircle(r) {
    let PI = 3.14
    return PI * r * r
}

console.log(areaOfCircle(5))


function circumOfCircle(r) {
    let PI = 3.14
    return PI * 2 * r
}

console.log(circumOfCircle(5))


function density(mass, volume) {
    let density = mass / volume
    return density
}

console.log(density(7, 3))


function weight(mass) {
    let gravity = 9.81,
        weight = mass * gravity
    return weight
}

console.log(weight(7))


function convertCelsiusToFahrenheit(oC) {
    let oF = (oC * 9 / 5) + 32
    return oF
}

console.log(convertCelsiusToFahrenheit(30))


function bmi(weight, height) {
    let bmi = weight / ((height / 100) * (height / 100))
    if (bmi < 18.5) {
        console.log(`Under weight. BMI index : ${bmi}`)
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        console.log(`Normal weight. BMI index : ${bmi}`)
    }
    else if (bmi >= 24.9 & bmi < 29.9) {
        console.log(`Over weight. BMI index : ${bmi}`)
    }
    else if (bmi >= 29.9) {
        console.log(`Obese. BMI index : ${bmi}`)
    }
    else {
        console.log(`Check weight and height`)
    }
    return bmi
}

console.log(bmi(70, 190))



// function checkSeason(month){
//     let getSeason = prompt('Enter the first letter of the month ').toLocaleUpperCase()
//     switch (true) {
//         case getSeason=='S':
//             console.log('Sonbahar mevsimindeyiz')
//         break;
//         case getSeason=='O':
//             console.log('Sonbahar mevsimindeyiz')
//         break;
//         case getSeason=='N':
//             console.log('Sonbahar mevsimindeyiz')
//         break;
//         case getSeason=='D':
//             console.log('Kış mevsimindeyiz')
//         break;
//         case getSeason=='JAN':
//             console.log('Kış mevsimindeyiz')
//         break;
//         case getSeason=='F':
//             console.log('Kış mevsimindeyiz')
//         break;
//         case getSeason=='M':
//             console.log('İki mevsim olduğu için için ilk üç harfi giriniz.')
//         break;
//         case getSeason=='MAR':
//             console.log('İlkbahar mevsimindeyiz')
//         break;
//         case getSeason=='A':
//             console.log('İki mevsim olduğu için için ilk üç harfi giriniz.')
//         break;2
//         case getSeason=='APR':
//             console.log('İlkbahar mevsimindeyiz')
//         break;
//         case getSeason=='MAY':
//             console.log('İlkbahar mevsimindeyiz')
//         break;
//         case getSeason=='J':
//             console.log('Üç mevsim olduğu için için ilk üç harfi giriniz.')
//         break;
//         case getSeason=='JUN':
//             console.log('Yaz mevsimindeyiz')
//         break;
//         case getSeason=='JUL':
//             console.log('Yaz mevsimindeyiz')
//         break;
//         case getSeason=='AGU':
//             console.log('Yaz mevsimindeyiz')
//         break;
//         default:
//             console.log('Lütfen doğru bir harf giriniz.')
//     }
// }
// checkSeason()


function maxNum(num1, num2, num3) {
    let max = Math.max(num1, num2, num3)
    return max
}

console.log(maxNum(11, 3, 44))



function printArray(array) {
    return console.log(array)
}

printArray(dizi)



function showDateTime() {
    let date = new Date(),
        getYear = date.getFullYear(),
        getMonth = date.getMonth(),
        getDate = date.getDate(),
        getHours = date.getHours(),
        getMinutes = date.getMinutes(),
        getSeconds = date.getSeconds()

    let fullYear = getDate + '/' + getMonth + '/' + getYear + '  ' + getHours + ':' + getMinutes + ':' + getSeconds
    return fullYear
}

console.log(showDateTime())


function swapValues(x, y) {
    let values = []
    values.push(x)
    values.push(y)
    values.reverse()
    x = values[1],
        y = values[0]
    return console.log(`y : ${x}, x : ${y}`)
}

swapValues(1, 2)


const reverseArray = array => {
    let reverse = []
    for (i = array.length - 1; i >= 0; i--) {
        reverse.push(array[i])
    }
    return reverse
}

console.log(dizi)
console.log(reverseArray(dizi))
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(reverseArray(['Mert', 'Kaya', 'Istanbul']))

const capitalizeArray = array => {
    let upperArray = []
    for (let i = 0; i < array.length; i++) {
        upperArray.push(array[i].toUpperCase())
    }
    return upperArray
}


console.log(capitalizeArray(countries))

function addItem(array, value) {
    array.push(value)
    return array
}

console.log(addItem(dizi, 11))


const sumOfNumbers = num1 => {
    let total = 0
    for (i = 0; i <= num1; i++) {
        total += i
    }
    return total
}

console.log(sumOfNumbers(100))


function sumOfTwoNumbers(num1, num2) {
    let total = 0
    for (i = num1; i <= num2; i++) {
        total += i
    }
    return total
}

console.log(sumOfTwoNumbers(10, 20))


const sumOfOdds = num1 => {
    let total = 0
    for (i = 0; i <= num1; i++) {
        if (i % 2 !== 0) {
            total += i
        }
    }
    return total
}

const sumOfEven = num1 => {
    let total = 0
    for (i = 0; i <= num1; i++) {
        if (i % 2 === 0) {
            total += i
        }
    }
    return total
}

console.log(sumOfEven(100))
console.log(sumOfOdds(100))


const evensAndOdds = num1 => {
    let evensCount = 0, oddsCount = 0
    for (i = 0; i < num1; i++) {
        if (i % 2 !== 0) {
            oddsCount++
        }
        if (i % 2 === 0) {
            evensCount++
        }
    }
    let result = `The number of odds are ${oddsCount}\nThe number of evens are ${evensCount + 1}`
    return result
}

console.log(evensAndOdds(10))


function sumNums() {
    let total = 0
    for (i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

const sumAllNums = (...args) => {
    let sum = 0
    for (const arg of args) {
        sum += arg
    }
    return sum
}

console.log(sumNums(2, 3, 6, 11))
console.log(sumAllNums(2, 3, 6, 11))


let macCharArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f']


const randomUserIp = () => {
    let random = Math.ceil(Math.random() * 256),
        ip = `192.168.1.${random}`
    return ip
}

console.log(randomUserIp())


console.log("XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
}))


const randomMacAddress = () => {
    let hexDigits = "0123456789ABCDEF",
        macAdress = ''
    for (let i = 0; i < 6; i++) {
        macAdress += hexDigits.charAt(Math.floor(Math.random() * 16))
        macAdress += hexDigits.charAt(Math.floor(Math.random() * 16))
        if (i != 5) { macAdress += ':' }
    }
    return macAdress
}

console.log(randomMacAddress())


const randomHexaNumberGenerator = () => {
    let hexDigits = '0123456789abcdef',
        hexCode = ''
    for (i = 0; i < 6; i++) {
        hexCode += hexDigits.charAt(Math.floor(Math.random() * 16))
    }
    return '#' + hexCode
}

console.log(randomHexaNumberGenerator())



const userIdGenerator = () => {
    let idDigits = '0123456789abcdefghijklmnoprstuwxvyzABCDEFGHIJKLMNOPRSTUWXVYZ',
        idCode = ''
    for (i = 0; i < 7; i++) {
        idCode += idDigits.charAt(Math.floor(Math.random() * 60))
    }
    return idCode
}

console.log(userIdGenerator())



// let charNumber = Number(prompt('Lütfen şifrenin kaç karakterli olacağını sayı belirterek giriniz.')),
//     manyCode = Number(prompt('Lütfen kaç adet şifre üretileceğini giriniz.'))

// const userIdGeneratedByUser = () => {
//     let idDigits = '0123456789abcdefghijklmnoprstuwxvyzABCDEFGHIJKLMNOPRSTUWXVYZ',
//         idArray = []
//     idCode = ''
//     for (i = 0; i < manyCode + 1; i++) {
//         idArray.push(idCode)
//         idCode = ''
//         for (j = 0; j < charNumber; j++) {
//             idCode += idDigits.charAt(Math.floor(Math.random() * 60))
//         }
//     }
//     idArray.shift()
//     return idArray.join('\n');
// }

// console.log(userIdGeneratedByUser())



const rgbColorGenerator = () => {
    let rgbArray = []
    for (i = 0; i < 3; i++) {
        rgbNums = Math.floor(Math.random() * 256)
        rgbArray.push(rgbNums)
    }
    let rgbCode = `rgb(${rgbArray})`
    return rgbCode
}

console.log(rgbColorGenerator())



const arrayOfHexaColors = () => {
    let hexDigits = '0123456789abcdef',
        hexCode = '',
        hexArray = []
    for (j = 0; j < 5; j++) {
        for (let i = 0; i < 6; i++) {
            hexCode += hexDigits.charAt(Math.floor(Math.random() * 16))
        }
        hexArray.push(`#${hexCode}`)
        hexCode = ''
    }
    return hexArray
}

console.log(arrayOfHexaColors())



const arrayOfRgbColors = () => {
    let rgbColorsArray = []
    for (j = 0; j < 5; j++) {
        let rgbArray = []
        for (i = 0; i < 3; i++) {
            let rgbNums = Math.floor(Math.random() * 256)
            rgbArray.push(rgbNums)
        }
        fullRgbCode = `rgb(${rgbArray.join(',')})`
        rgbColorsArray.push(fullRgbCode)
    }
    return rgbColorsArray
}
console.log(arrayOfRgbColors())


function componentToHex(c) {
    var hex = c.toString(16);
    console.log(hex)
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgbToHex(50, 51, 255)); // #0033ff





function generateColors(string, num) {
    if (string === 'hex') {
        let hexDigits = '0123456789abcdef',
            hexCode = '',
            hexCodeArray = []
        for (j = 0; j < num; j++) {
            for (i = 0; i < 6; i++) {
                hexCode += hexDigits.charAt(Math.floor(Math.random() * 16));
            }
            hexCode = '#' + hexCode
            hexCodeArray.push(hexCode)
            hexCode = ''
        }
        if (num === 1) {
            return `'${hexCodeArray.toString()}'`
        }
        else {
            return hexCodeArray
        }
    }
    if (string === 'rgb') {
        let rgbColorsArray = []
        for (j = 0; j < num; j++) {
            let rgbArray = []
            for (i = 0; i < 3; i++) {
                let rgbNums = Math.floor(Math.random() * 256)
                rgbArray.push(rgbNums)
            }
            fullRgbCode = `rgb(${rgbArray.join(',')})`
            rgbColorsArray.push(fullRgbCode)
        }
        if (num === 1) {
            return `'${fullRgbCode}'`
        }
        else {
            return rgbColorsArray
        }
    }
}

console.log(generateColors('hex', 2))


const shuffleArray = array => {
    array.sort(() => .5 - Math.random())
    return array
}

console.log(shuffleArray(city))


const factorial = num => {
    let factorial = 1
    for (i = num; i > 0; i--) {
        factorial *= i
    }
    return factorial
}

console.log(factorial(4))



const isEmpty = object => {
    if (object.length === 0) { return false }
    else { return true }
}

console.log(isEmpty(''))


const sum = (...args) => {
    let total = 0
    for (const element of args) {
        total += element
    }
    return total
}

console.log(sum(2, 3, 4, 5, 5))


const sumOfArrayItems = array => {
    let total = 0
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'string') {
            total += array[i]
        }
        else {
            console.log('Dizide rakam içermeyen elemanlar var.')
        }
    }
    return total
}

console.log(sumOfArrayItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 'a']))

console.log('///////////////')

const averageOfArrayItems = array => {
    let total = 0, onlyNumArr = [], average = 0
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'string') {
            onlyNumArr.push(array[i])
        }
        else {
            console.log('Dizide rakam içermeyen elemanlar var.')
        }
    }
    for (let j = 0; j < onlyNumArr.length; j++) {
        total += onlyNumArr[j]
    }
    average = total / onlyNumArr.length

    return average
}

console.log(averageOfArrayItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a']))


const modifyArray = array => {
    let upperArray = []
    if (array.length >= 5) {
        for (let i = 0; i < array.length; i++) {
            upperArray.push(array[i])
            if (i === 4) {
                upperArray.splice(4, 1)
                upperArray.push(array[4].toUpperCase())
            }
        }
        return upperArray
    }
    else {
        return 'Dizi 5 elemanlı değil!'
    }

}

console.log(modifyArray(countries))



const isPrime = num => {
    let kontrol =0
    for ( i = 2; i < num; i++)
    {
        if (num % i == 0) {
            kontrol++
        }
    }
    if (kontrol == 0) {
        return console.log(`Girdiğiniz ${num} sayısı Asal Sayıdır.`)
    }
    else {
        return console.log(`Girdiğiniz ${num} sayısı Asal Sayı Değildir.`)
    }
}

console.log(isPrime(17))



const isUnique = array =>{
    let count=0
    for(i = 0; i <array.length; i++){
        for(j=0; j <array.length; j++){
            if(i!==j){
                if(array[i]===array[j]){
                    count++
                }   
            }
        }
    }
    if(count==0){
        return `All item is unique in array.`
    }
    else {
        return `Items are not unique in array.`
    }
}

console.log(isUnique([1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13]))



const isSameDataType = array => {
    let kontrol =0
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(i!==j){
                if(typeof array[i] === typeof array[j]){
                    kontrol++
                }
            }
        }
    }
    if (kontrol == 0)
    {
        return 'Dizideki tüm elemanlar farklı türdedir.'
    }
    else{
        return 'Dizideki tüm elemanlar farklı türde değildir.'
    }
}


console.log(isSameDataType(['Mert',1,{},true]))