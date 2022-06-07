// console.time('Ülke sıralaması başladı.')
// console.table(countries_data)
// console.timeEnd('Ülke sıralaması bitti.')

console.table(user)

console.time('Gruplama bitti.')
for(const user of users){
    console.group('Kullanıcı')
    console.log(user)
    console.groupEnd()
}
console.timeEnd('Gruplama bitti.')


console.assert(10<2*10,'Yanlış')
console.assert(10>2*10,`10,20'den büyük değildir`)
console.warn('Exercises içinde uyarı mesajı')
console.error('Exercises içinde hata mesajı')


let i=0
console.time('While timer')
while(i<=5){
    console.log(i)
    i++
}
console.timeEnd('While timer')

console.time('for timer')
for(let i=1; i<=5; i++){
    console.log(i)
}
console.timeEnd('for timer')

const nums=[1,2,3,4,5]

console.time('for of timer')
for(const num of nums){
    console.log(num)
}
console.timeEnd('for of timer')

console.time('foreach timer')
nums.forEach(num => console.log(num))
console.timeEnd('foreach timer')