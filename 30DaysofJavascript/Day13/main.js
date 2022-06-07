console.log('30 Days Of Javascript')

console.log('%c30 Days of Javascript', 'color:green')

console.log('%c30 Days%c %cof%c %cJavascript%c', 'color:green','','color:red','','color:blue','')

console.warn('Bu bir uyarı mesajıdır.')
console.error('Bu bir hata mesajıdır.')

const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}

console.table(user)

const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.table(countries)


const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.table(users);


console.time('Regular for loop')
for(const country of countries) {
    console.log(country[0], country[1])
    
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for(const [country,capital] of countries) {
  console.log(country,capital)
}
console.timeEnd('for of loop')

console.time('foreach loop')
countries.forEach(([country,capital]) => console.log(country,capital))
console.timeEnd('foreach loop')

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4



for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i%2===0,{number:i, errorMessage:errorMessage})
}


console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)


const func = () => {
  console.count('Function has been called')
}
func()
func()
func()
func()

