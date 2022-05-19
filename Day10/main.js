const companies = new Set()
console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

companies.add('Google')
companies.add('Facebook')
companies.add('Tesla')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies)
console.log(companies.size)

const newCompanies = ['Google', 'Facebook', 'Twitter', 'Tesla', 'Oracle', 'Microsoft']
setOfCompanies = new Set(newCompanies)
for (const company of newCompanies) {
    setOfCompanies.add(company)
}
console.log(setOfCompanies)

console.log(setOfCompanies.delete('Google'))
console.log(setOfCompanies.size)

console.log(setOfCompanies.has('Microsoft'))
// setOfCompanies.clear()
console.log(setOfCompanies)


const langSet = new Set(languages)
console.log(langSet)

const counts = []
const count = {}

for (const lang of langSet) {
    const filteredLanguage = languages.filter(lng => lng === lang)
    console.log(filteredLanguage)
    counts.push({ lang: lang, count: filteredLanguage.length })
}
console.log(counts)

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

let a1 = [1, 2, 3, 4, 5]
let b1 = [3, 4, 5, 6]

let A1 = new Set(a)
let B1 = new Set(b)
let C1 = a.filter(num => B1.has(num))
console.log(C1)
let C2 = a.filter(num => !B1.has(num))
console.log(C2)

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]

const countriesMap = new Map()
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

console.log(countriesMap.get('Finland'))
console.log(countriesMap.has('Finland'))
console.log(countriesMap.has('Oslo'))

for (const country of countriesMap) {
    console.log(country)
}
for (const [country, city] of countriesMap) {
    console.log(country, city)
}



// EXERCISES

const nullSet = new Set(),
    numberLoop = new Set()
for (let i = 0; i < 10; i++) {
    numberLoop.add(i)
}
console.log(numberLoop)
console.log(numberLoop.delete(1))
console.log(numberLoop)
console.log(numberLoop.clear())
console.log(numberLoop)

const cityInTurkey = ['Adana', 'Istanbul', 'Mersin', 'Hatay', 'Yozgat']

for (const city of cityInTurkey) {
    nullSet.add(city)
}
console.log(nullSet)

const mapCity = new Map()
for (const city of cityInTurkey) {
    mapCity.set(city, city.length)
}
console.log(mapCity)


const x = [4, 5, 8, 9]
const y = [3, 4, 5, 7]
const X = new Set(x)
const Y = new Set(y)
const countriesA = ['Finland', 'Sweden', 'Norway']

let h = [...x, ...y]
console.log(h)

const H =x.filter(num =>  Y.has(num))
const Z = new Set(H)
console.log(Z)

const j =x.filter(num =>  !Y.has(num))
const J = new Set(j)
console.log(J)