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

console.log(' ////////////////////////// ')
console.log(countries)

let ethIndex = countries.indexOf('Ethiopia')

countries.includes('Ethiopia')
if (countries.indexOf('Ethiopia') !== -1){
  countries[ethIndex]=countries[ethIndex].toUpperCase()
}
else{
  countries.push('Ethiopia')
}

console.log(countries)


console.log(countries.slice(0,10))
console.log(countries.slice(Math.floor(countries.length/2), Math.ceil(countries.length/2)))