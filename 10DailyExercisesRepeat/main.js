const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 's']
const ages = [19, 11, 13, 10, 22, 19, 24, 20, 25, 25, 25, 24]
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]
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




// LEVEL 3 EXERCISES REPEAT

// DAY2 

let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentence.match(/love/gi))

let sentence2 = 'You cannot end a sentence with because because because is a conjunction',
    pattern = /because/gi
console.log(sentence2.match(pattern))

let mixedSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.'
console.log(mixedSentence.replace(/[^\.\w\s]|/gi, ""))



let earnSentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.',
    earnArr = earnSentence.match(/\d+/gi),
    salaryPerMonth = earnArr[0],
    annualBonus = earnArr[1],
    onlineCoursePerMonth = earnArr[2],
    totalAnnualIncome = (+salaryPerMonth * 12) + +annualBonus + (+annualBonus * 12)

console.log(totalAnnualIncome)



// DAY3

let date = new Date(),
    getYear = date.getFullYear(),
    getDate = date.getDate(),
    getMonth = date.getMonth(),
    getDay = date.getDay(),
    getHour = date.getHours(),
    getMinute = date.getMinutes(),
    getSecond = date.getSeconds()

const month = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    day = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']

let readableDate = `${getDate} ${month[getMonth]} ${getYear}, ${day[getDay]}, ${getHour}:${getMinute}:${getSecond}`
console.log(readableDate)


// DAY4


// let monthWord=prompt('Lütfen ayın ilk 3 harfini girin.')
let monthWord = 'eki'
switch (monthWord) {
    case 'oca':
        console.log('Ocak ayı 31 gündür')
        break
    case 'şub':
        console.log('Şubat ayı 28 gündür')
        break
    case 'mar':
        console.log('Mart ayı 31 gündür')
        break
    case 'nis':
        console.log('Nisan ayı 30 gündür')
        break
    case 'may':
        console.log('Mayıs ayı 31 gündür')
        break
    case 'haz':
        console.log('Haziran ayı 30 gündür')
        break
    case 'tem':
        console.log('Temmuz ayı 31 gündür')
        break
    case 'ağu':
        console.log('Ağustos ayı 31 gündür')
        break
    case 'eyl':
        console.log('Eylül ayı 30 gündür')
        break
    case 'eki':
        console.log('Ekim ayı 31 gündür')
        break
    case 'kas':
        console.log('Kasım ayı 30 gündür')
        break
    case 'ara':
        console.log('Aralık ayı 31 gündür')
        break
    default:
        console.log('Lütfen geçerli bir ay giriniz.')
}



// DAY5


ages.sort()
console.log(ages)
let minAge = ages[0]
let maxAge = ages[ages.length - 1]
console.log(`En küçük yaş : ${minAge}\nEn büyük yaş : ${maxAge}`)

if (ages.length % 2 === 1) {
    console.log(`Medyan : ${ages[((ages.length + 1) / 2) - 1]}`)
}
else {
    console.log(`Medyan : ${ages[(ages.length / 2)]}`)
}

let total = 0
for (let i = 0; i < ages.length; i++) {
    total += ages[i]
}
let averageAge = total / ages.length
console.log(`Ortalama yaş : ${averageAge}`)

let rangeMaxMinAges = maxAge - minAge
console.log(`En büyük yaş ve en küçük yaş arasındaki fark : ${rangeMaxMinAges}`)

let minMinusAverage = Math.abs(minAge - averageAge),
    maxMinusAverage = Math.abs(maxAge - averageAge)

console.log(`En küçük yaş ile ortalama yaş arasındaki fark : ${minMinusAverage}\nEn büyük yaş ile ortalama yaş arasındaki fark : ${maxMinusAverage}`)


console.log(countries.slice(0, 10))
console.log(countries[(countries.length + 1) / 2])

console.log(countries.slice((countries.length + 1) / 2, (countries.length + 1) / 2 + 2))

if (countries.length % 2 === 0) {
    console.log(countries.slice[0, countries.length / 2])
}
else {
    console.log(countries.slice((countries.length / 2) + 1, countries.length - 1))
}



// DAY6


const copyCountries = []

for (const country of countries) {
    copyCountries.push(country)
}
copyCountries.sort()

console.log(copyCountries)




console.log(webTechs.sort())
console.log(mernStack.sort())

let countryInLandWord = []

for (const country of countries) {
    if (country.toLowerCase().includes('land')) {
        countryInLandWord.push(country)
    }
}
console.log(countryInLandWord)


let biggestCountry = ''

for (i = 0; i < countries.length; i++) {
    if (countries[i].length > biggestCountry.length) {
        biggestCountry = countries[i]
    }
}

console.log(biggestCountry)

let onlyFourCharCountry = []
for (const country of countries) {
    if (country.length === 4)
        onlyFourCharCountry.push(country)
}
console.log(onlyFourCharCountry)


let twoOrMoreWordsInCountry = []

for (const country of countries) {
    if (country.includes(' ')) {
        twoOrMoreWordsInCountry.push(country)
    }
}
console.log(twoOrMoreWordsInCountry)


const reverseCountries = []
for (let i = countries.length - 1; i >= 0; i--) {
    reverseCountries.push(countries[i])
}
// console.log(countries.reverse())
console.log(reverseCountries)



// DAY7



const userIdGeneratedByUser = () => {
    let numberOfChar = prompt('Şifre kaç karakterli olsun?'),
        numberOfIds = prompt('Kaç adet şifre üretilsin?'),
        idCode = '',
        idArray = []

    const idDigits = '0123456789abcdefghijklmnoprstuwxvyzABCDEFGHIJKLMNOPRSTUWXVYZ'
    for (let j = 0; j < +numberOfIds; j++) {
        for (let i = 0; i < +numberOfChar; i++) {
            if (idCode.length < +numberOfChar) {
                idCode += idDigits.charAt(Math.floor(Math.random() * 60))
            }

        }
        idArray.push(idCode)
        idCode = ''
    }

    return idArray.join('\n')
}
// console.log(userIdGeneratedByUser())


const rgbColorGenerator = () => {
    const rgbArray = []
    for (let i = 0; i < 3; i++) {
        rgbArray.push(Math.floor(Math.random() * 256))
    }
    return `rgb(${rgbArray.join(',')})`
}
console.log(rgbColorGenerator())


const arrayOfHexaColors = () => {
    let hexDigits = '0123456789abcdef',
        hexCode = ''
    for (let i = 0; i < 6; i++) {
        hexCode += hexDigits.charAt(Math.floor(Math.random() * 16))
    }
    return `#${hexCode}`
}
console.log(arrayOfHexaColors())


const generateColors = (string, num) => {
    let arr = [],
        hexDigits = '0123456789abcdef',
        hexCode = '',
        rgbCodeArr = [],
        rgbCode = '',
        rgbNum = 0
    for (let i = 0; i < num; i++) {
        if (string === 'hexa') {
            for (let j = 0; j < 6; j++) {
                hexCode += hexDigits.charAt(Math.floor(Math.random() * 16))
            }
            arr.push(`#${hexCode}`)
            hexCode = ''
        }
        else if (string === 'rgb') {
            for (k = 0; k < 3; k++) {
                rgbNum += Math.floor(Math.random() * 256)
                rgbCodeArr.push(rgbNum)
                rgbNum = 0
            }
            rgbCode = `rgb(${rgbCodeArr.join(',')})`
            arr.push(rgbCode)
            rgbCodeArr = []
        }
    }
    if (num === 1) {
        return arr.join('')
    }
    else {
        return arr
    }

}
console.log(generateColors('hexa', 1))


const shuffleArray = array => {
    return array.sort(() => 0.5 - Math.random())
}
// console.log(shuffleArray(countries))


const factorial = num => {
    let factorial = 1
    for (i = num; i > 0; i--) {
        factorial *= i
    }
    return factorial
}
console.log(factorial(4))


const isEmpty = param => {
    if (param.length === 0) { return false } else { return true }
}
console.log(isEmpty(2))


const sum = (...args) => {
    let total = 0
    for (const element of args) {
        total += element
    }
    return total
}
console.log(sum(3, 2, 6, 1, 6))



const sumOfArrayItems = (arr) => {
    let total = 0,
        alp = 'abcdefghijklmnoprstuvyzxw'
    for (const item of arr) {
        if (typeof item === 'number') {
            total += item
        }
        else {
            return console.log('Dizide rakam içermeyenler elemanlar var. ')
        }
    }
    return total
}
console.log(sumOfArrayItems(nums))


console.log(webTechs)

const modifyArray = arr => {
    let modify = []
    if (arr.length < 5) {
        return console.log('Not Found')
    }
    else {
        for (i = 0; i < arr.length; i++) {
            if (i === 4) {
                modify.push(arr[i].toUpperCase())
            }
            else {
                modify.push(arr[i])
            }

        }
        return modify
    }
}
console.log(modifyArray(webTechs))
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']))



const checkTypeOf = array => {
    let count = 0
    for (i = 0; i < array.length; i++) {
        if (typeof array[0] === typeof array[i]) {
            count++
        }
    }
    if (count === array.length) {
        return `Tüm elemanlar aynı veri türüne sahip.`
    }
    else {
        return `Tüm elemanlar aynı veri türüne sahip değil.`
    }
}

console.log(checkTypeOf(mernStack))


const isValidVariable = variable => {
    if (variable[0] === '$' || variable[0] === '_' || typeof variable[0] === 'string') {
        return 'Değişken adı kullanılabilir.'
    }
    else {
        return 'Değişken adı kullanılabilir değil.'
    }
}
// console.log(isValidVariable())


const reverseArray = arr => {
    let copiesArry = []
    for (i = arr.length - 1; i >= 0; i--) {
        copiesArry.push(arr[i])
    }
    return copiesArry
}
// console.log(reverseArray(countries))


const uniqueNumber = () => {
    let arr = []

    while (arr.length < 7) {
        let randomNumber = Math.floor(Math.random() * 10)
        if (!arr.includes(randomNumber)) {
            arr.push(randomNumber)
        }
    }
    return arr
}
console.log(uniqueNumber())



// DAY8

// LEVEL1 


const dog = new Object()
console.log(dog)

dog.name = 'Gürkan'
dog.legs = 2
dog.color = 'Black'
dog.age = 28
dog.bark = 'Saat teknik olarak 3'

console.log(dog)
console.log(dog.name)

dog.breed = 'Human'
dog.getDogInfo = function () {
    return `My dog name is ${this.name} and ${this.age} years old.\nIt's ${this.color}.Most favorited bark is '${this.bark}'. `
}
console.log(dog.getDogInfo())

let newUsers = Object.entries(users)
const moreSkillsHavePeople = () => {
    let count = 0,
        person = ''
    for (let i = 0; i < newUsers.length; i++) {
        if (newUsers[i][1].skills.length > count) {
            person = newUsers[i][0]
            count = newUsers[i][1].skills.length
        }
    }

    return `${person} has ${count} skills and most talented person.`
}
console.log(moreSkillsHavePeople())



const isLoggedIn = () => {
    const arr = []
    for (let i = 0; i < newUsers.length; i++) {
        if (newUsers[i][1].points >= 50) {
            arr.push(newUsers[i][0])
        }
    }
    return arr
}
console.log(isLoggedIn())


const mernStackDeveloper = () => {
    let mernArr = [],
        arr = []
    for (let i = 0; i < newUsers.length; i++) {
        for (let j = 0; j < newUsers[i][1].skills.length; j++) {
            mernArr.push(newUsers[i][1].skills[j][0])

        }
        console.log(mernArr.join(''));
        if (mernArr.join('').includes('MERN')) {
            arr.push(newUsers[i][0])
        }
        mernArr = []
    }
    return arr
}

console.log(mernStackDeveloper())


let copiesUsers = Object.assign({}, users)
console.log(users)
console.log(copiesUsers)

copiesUsers.Mert = {
    email: 'kayamert@live.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 27,
    isLoggedIn: true,
    points: 50
}

console.log(users)
console.log(copiesUsers)

let keyUsersObject = Object.keys(users)
console.log(keyUsersObject)
let valueUsersObject = Object.values(users)
console.log(valueUsersObject)

console.log(countries_data)

const personAccount = {
    firstName: 'Mert',
    lastName: 'Kaya',
    incomes: [4200,220,10,500,110],
    expenses: [2400,600,200,310]
}

const totalIncome = () => {
    let ttlIncome =0
    ttlIncome = personAccount.incomes.map(income => ttlIncome += income)
    return ttlIncome[ttlIncome.length-1]
}
console.log(totalIncome())

const totalExpense = () => {
    let ttlExpense =0
    ttlExpense = personAccount.expenses.map(income => ttlExpense += income)
    return ttlExpense[ttlExpense.length-1]
}
console.log(totalExpense())

const accountInfo=()=> {
    return `Benim adım ${personAccount.firstName} ve soyadım ${personAccount.lastName}.\nToplam kazancım aylık ${totalIncome()}TL ve toplam masrafım aylık ${totalExpense()}TL.`
}
console.log(accountInfo())

const addIncome=()=>{
    let getIncome=prompt('Lütfen gelirinize eklemek istediğiniz tutarı giriniz.')
    personAccount.incomes.push(+getIncome)
    return personAccount
}
// console.log(addIncome())

const addExpense =()=>{
    let getExpense=prompt('Lütfen gelirinize eklemek istediğiniz tutarı giriniz.')
    personAccount.expenses.push(+getExpense)
    return personAccount
}
// console.log(addExpense())

const accountBalance=()=>{
    let balance = totalIncome() - totalExpense()
    return balance
}
console.log(accountBalance())