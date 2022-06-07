const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const eachCountry = countries.forEach(country => console.log(country))
const eachName = names.forEach(name => console.log(name))
const eachNumber = numbers.forEach(number => console.log(number))

const newCountries = countries.map(country => country.toUpperCase())
console.log(newCountries)

const newNames = names.map(name => name.toUpperCase())
console.log(newNames)

const countriesLength = countries.map(country => country.length)
console.log(countriesLength)

const squareNumbers = numbers.map(number => number * number)
console.log(squareNumbers)

const productPrice = products.map(product => +product.price)
console.log(productPrice)

const landInCountries = countries.filter(country => country.toLowerCase().includes('land'))
console.log(landInCountries)

const sixCharInCountries = countries.filter(country => country.length === 6)
console.log(sixCharInCountries)

const sixAndMoreInCountries = countries.filter(country => country.length >= 6)
console.log(sixAndMoreInCountries)

const startWithE = countries.filter(country => country.toLowerCase().startsWith('e'))
console.log(startWithE)

const onlyPricesWithValue = products.filter(product => +product.price > 0)
console.log(onlyPricesWithValue)

const getStringList = array => {
  return array.filter(element => element === `${element}`)
}

console.log(getStringList(names))

const sumNumber = numbers.reduce(function (oldValue, currentValue) {
  return oldValue += currentValue
}, 0)

console.log(sumNumber)


let lastValue = countries.splice(countries.length - 1, 1)
countries.unshift('Estonia')

const conCount = countries.reduce((oldValue, currentValue) => oldValue + ', ' + currentValue
)
let fullValue = conCount + ' and ' + lastValue + ' are north Euopean countries'
console.log(fullValue)

// every => hepsine bakar ve içinde 1 tane bile içermeyen varsa false döndürür.
// some => hepsine tek tek bakar 1 tane bile içeren bulsa true döndürür.

const checkSevenInCount = countries.some(country => country.length > 7)
console.log(checkSevenInCount)

const checkLands = countries.every(country => country.includes('land'))
console.log(checkLands)

// find => koşulu sağlayan ilk elemanı döndürür.
// findIndex => koşulu sağlayan ilk elemanın index numarasını döndürür.

const onlySixLetters = countries.find(country => country.length > 6)
console.log(onlySixLetters)

const onlySixLettersIndex = countries.findIndex(country => country.length > 6)
console.log(onlySixLettersIndex)

const findIndexInCount = param => {
  const checkInCount = countries.findIndex(country => country.includes(param))
  return checkInCount
}
console.log(findIndexInCount('Russia'))


const sumProductPrice = products.map(product => +product.price).filter(price => price>0 ).reduce((acc, price) => acc += price, 0)
console.log(sumProductPrice)

const sumPPWithReduce=products.reduce((sum, product) => sum += (+product.price),0)
console.log(sumPPWithReduce)

