let yourAge = prompt('Enter your age')
if(yourAge>18){
    console.log('Araç kullanabilirsin.')
}
else {
    console.log(`Araç kullanabilmek için ${18-yourAge} yıl beklemelisin.  `)
}

let myAge=28

if(myAge>yourAge){
    console.log(`Ben senden ${myAge-yourAge} yaş daha büyüğüm.`)
}
else {
    console.log(`Sen benden ${yourAge-myAge} yaş daha büyüksün31.`)
}

let a=4,
    b=7

if(a>b){
    console.log(`a, b'den büyüktür.`)
}
else{
    console.log(`a, b'den küçüktür`)
}

a>b
? console.log(`a, b'den büyüktür.`)
: console.log(`a, b'den küçüktür`)


let num=Number(prompt(`Enter a number`))

if(num%2===0){
    console.log(`${num} çift sayıdır.`)
}
else{
    console.log(`${num} tek sayıdır.`)
}

let yourNote=Number(prompt(`Enter your note`)),
    noteF=yourNote<50 && yourNote>=0

if (yourNote>=80 && yourNote<=100) {
    console.log(`Notunuz A`)
}
else if (yourNote>=70 && yourNote<80) {
    console.log(`Notunuz B`)
}
else if (yourNote>=60 && yourNote<70) {
    console.log(`Notunuz C`)
}
else if (yourNote>=50 && yourNote<60) {
    console.log(`Notunuz D`)
}
else {
    console.log(`Notunuz F`)
}

switch (true) {
    case yourNote>=80 && yourNote<=100 :
        console.log(`Notunuz A - switch`)
    break;
    case yourNote>=70 && yourNote<80 :
        console.log(`Notunuz B - switch`)
    break;
    case yourNote>=60 && yourNote<70:
        console.log(`Notunuz C - switch`)
    break;
    case yourNote>=50 && yourNote<60:
        console.log(`Notunuz D - switch`)
    break;
    default :
        console.log(`Notunuz F - switch12`)
}


let getSeason = prompt('Enter the first letter of the month ').toLocaleUpperCase()

switch (true) {
    case getSeason=='S':
        console.log('Sonbahar mevsimindeyiz')
    break;
    case getSeason=='O':
        console.log('Sonbahar mevsimindeyiz')
    break;
    case getSeason=='N':
        console.log('Sonbahar mevsimindeyiz')
    break;
    case getSeason=='D':
        console.log('Kış mevsimindeyiz')
    break;
    case getSeason=='J':
        console.log('Kış mevsimindeyiz')
    break;
    case getSeason=='F':
        console.log('Kış mevsimindeyiz')
    break;
    case getSeason=='M':
        console.log('İki mevsim olduğu için için ilk üç harfi giriniz.')
    break;
    case getSeason=='MAR':
        console.log('İlkbahar mevsimindeyiz')
    break;
    case getSeason=='A':
        console.log('İki mevsim olduğu için için ilk üç harfi giriniz.')
    break;2
    case getSeason=='APR':
        console.log('İlkbahar mevsimindeyiz')
    break;
    case getSeason=='MAY':
        console.log('İlkbahar mevsimindeyiz')
    break;
    case getSeason=='J':
        console.log('İki mevsim olduğu için için ilk üç harfi giriniz.')
    break;
    case getSeason=='JUN':
        console.log('Yaz mevsimindeyiz')
    break;
    case getSeason=='JUL':
        console.log('Yaz mevsimindeyiz')
    break;
    case getSeason=='AGU':
        console.log('Yaz mevsimindeyiz')
    break;
    default:
        console.log('Lütfen doğru bir harf giriniz.')
}

let getMonth= prompt('Herhangi bir ayın adını yazın.').toLocaleLowerCase(),
    ocak=31,
    subat=28,
    mart=31,
    nisan=30,
    mayıs=31,
    haziran=30,
    temmuz=31,
    ağustos=31,
    eylül=30,
    ekim=31,
    kasım=30,
    aralık=31

if(getMonth==='ocak'){
    console.log(`Ocak ayı 31 gündür.`)
}
else if(getMonth==='şubat'){
    console.log(`şubat ayı 31 gündür.`)
}
else if(getMonth==='mart'){
    console.log(`mart ayı 31 gündür.`)
}
else if(getMonth==='nisan'){
    console.log(`nisan ayı 30 gündür.`)
}
else if(getMonth==='mayıs'){
    console.log(`mayıs ayı 31 gündür.`)
}
else if(getMonth==='haziran'){
    console.log(`haziran ayı 30 gündür.`)
}
else if(getMonth==='temmuz'){
    console.log(`temmuz ayı 31 gündür.`)
}
else if(getMonth==='ağustos'){
    console.log(`ağustos ayı 31 gündür.`)
}
else if(getMonth==='eylül'){
    console.log(`eylül ayı 30 gündür.`)
}
else if(getMonth==='ekim'){
    console.log(`ekim ayı 31 gündür.`)
}
else if(getMonth==='kasım'){
    console.log(`kasım ayı 30 gündür.`)
}
else if(getMonth==='aralık'){
    console.log(`aralık ayı 31 gündür.`)
}
else {
    console.log(`Lütfen doğru bir ay adı giriniz.`)
}

