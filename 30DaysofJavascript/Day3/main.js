let isLightOn=true,
    isRaining=false,
    isHungry=true,
    //isMarried=false,
    trueValue=4>3,
    falseValue=4<3

console.log(isLightOn,isRaining,isHungry,trueValue,falseValue)

let x=5,y=2
console.log(x**=y)

console.log(3>2)                // true
console.log(3>=2)               // true
console.log(3<2)                // false
console.log(3<=2)               // false
console.log(2<3)                // true
console.log(2<=3)               // true
console.log(3!=2)               // true
console.log(3==2)               // false
console.log(3=='3')             // true
console.log(3==='3')            // false
console.log(3!=3)               // false
console.log(3!==3)              // false
console.log(0==false)           // true
console.log(0===false)          // false
console.log(0=='')              // true
console.log(0==' ')             // true
console.log(0==='')             // false
console.log(1==true)            // true
console.log(1===true)           //false
console.log(undefined==null)    // true
console.log(undefined===null)   // false
console.log(NaN==NaN)           // false
console.log(NaN===NaN)          // false
console.log(typeof NaN)         // NaN

console.log('mango'.length=='avocado'.length)   // false
console.log('mango'.length!='avocado'.length)   // true
console.log('mango'.length<'avocado'.length)    // true
console.log('milk'.length=='meat'.length)       // true
console.log('milk'.length!='meat'.length)       // false
console.log('tomato'.length=='potato'.length)   // true
console.log('python'.length>'dragon'.length)    // false

// isRaining
// ?console.log('You should take an umbrella')
// :console.log('You may want to take sunglasses')

// let isDelete=confirm('Are you sure you want to delete?')

// isDelete ? alert('Deleted') : console.log('Canceled')


const date=new Date(),
    fullYear=date.getFullYear(),
    month=date.getMonth()+1,
    day=date.getDate(),
    hour=date.getHours(),
    dayOfWeek=date.getDay(),
    minute=date.getMinutes(),
    second=date.getSeconds(),
    milisecond=date.getMilliseconds()


const months=[
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
]
    
const days=[
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
    'Pazar'
]

const readableDate=day+' '+months[month]+' '+fullYear+ ', '+days[dayOfWeek]+', '+hour+':'+minute+':'+second
const readableDate2=`${day} ${months[month]} ${fullYear}, ${days[dayOfWeek]}, ${hour}:${minute}:${second}`
console.log(readableDate)
console.log(readableDate2)




// LEVEL1 EXERCISES

let firstName ='Mert',
    lastName ='Kaya',
    country='Turkey',
    city='İstanbul',
    age=27,
    isMarried=false,
    year=2022

console.log(typeof firstName )
console.log(typeof lastName )
console.log(typeof country )
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)
console.log(10=='10')
console.log(parseInt('9.8')==10)

const truthy1='true value',
    truthy2=25,
    truthy3=true,
    falsy1=0,
    falsey2=false,
    falsey3=null

console.log(4>3)        // true
console.log(4>=3)       // true
console.log(4<3)        // false
console.log(4==4)       // true
console.log(4===4)      // true
console.log(4!=4)       // false
console.log(4!==4)      // false
console.log(4!='4')     // false
console.log(4=='4')     // true
console.log(4==='4')    // false
console.log('python'.length>'jargon'.length)    // false   

console.log('//////////////')
console.log(4 > 3 && 10 < 12)       // true
console.log(4 > 3 && 10 > 12)       // false
console.log(4 > 3 || 10 < 12)       // true
console.log(4 > 3 || 10 > 12)       // true
console.log(!(4 > 3))               // false
console.log(!(4 < 3))               // true
console.log(!(false))               // true
console.log(!(4 > 3 && 10 < 12))    // false
console.log(!(4 > 3 && 10 > 12))    // true
console.log(!(4 === '4'))           // true

console.log('What is the year today?')
let now = new Date(),
    nowYear = now.getFullYear()
console.log(nowYear)

console.log('What is the month today as a number?')
nowMonth = now.getMonth()+1
console.log(nowMonth)

console.log('What is the date today?')
nowDate = now.getDate()
console.log(nowDate)

console.log('What is the day today as a number?')
nowDay = now.getDay()
console.log(nowDay)

console.log('What is the hours now?')
nowHours = now.getHours()
console.log(nowHours)

console.log('What is the minutes now?')
nowMinutes = now.getMinutes()
console.log(nowMinutes)

console.log('Find out the numbers of seconds elapsed from January 1, 1970 to now.')
secondInterval = now.getTime()/1000
console.log(secondInterval)


// LEVEL2 EXERCISES

// let base=prompt('Taban sayısı giriniz!'),
//     height=prompt('Yükseklik giriniz'),
//     area=0.5*base*height

// console.log(area)5

// let sideA=prompt('A kenar sayısını giriniz'),
//     sideB=prompt('B kenar sayısını giriniz'),
//     sideC=prompt('C kenar sayısını giriniz'),
//     perimeter=Number(sideA)+Number(sideB)+Number(sideC)
// console.log(perimeter)

// let width =prompt('Genişlik giriniz.'),
//     height = prompt('Yükseklik giriniz.'),
//     area=Number(width)*Number(height),
//     perimeter=2*(Number(width)+Number(height))

// console.log(area)
// console.log(perimeter)

// let radius=prompt('Yarı çapı giriniz!'),
//     area=3.14*radius*radius,
//     circle=2*3.14*radius

// console.log(area)
// console.log(circle)

let dot1=6,
    dot2=10,
    dot3=2,
    dot4=2,
    m=(dot2-dot1)/(dot4-dot3)

console.log(m)

// let workHours=prompt('Enter Hours'),
//     perHour=prompt('Enter rate per hour'),
//     weeklyEarn=Number(workHours)*Number(perHour)

// console.log(`Your weekly earning is ${weeklyEarn}TL`)

// let yourName=prompt('Enter Name'),
//     checkName=yourName.length<7

// checkName ? console.log('Adın Kısa') : console.log('Adın uzun')

let checkLengthName=firstName.length>lastName.length

checkLengthName ? console.log('Adın soyadından uzun') : console.log('Adın soyadından kısa')

let yourAge=30,
    checkAge=age.length>yourAge.length

checkAge ? console.log(`Ben senden ${age-yourAge} yaş daha büyüğüm`) : console.log(`Sen benden ${yourAge-age} yaş daha büyüksün`)

let getAge=prompt('Doğum yılınızı giriniz'),
    driverAge=now.getFullYear()-getAge,
    checkDriverAge=driverAge<18

checkDriverAge 
? console.log(`${driverAge} yaşındasın. Ehliyet alabilmek için ${18-driverAge} yaş kadar beklemelisin`)
: console.log(`${driverAge} yaşındasın. Araç kullanabilirsin.`)

let livingSeconds=driverAge*365*24*60*60
console.log(`${livingSeconds} saniyedir hayattasınız`)

console.log(`${nowYear}-${nowMonth}-${nowDate} ${nowHours}:${nowMinutes}`)
console.log(`${nowDate}-${nowMonth}-${nowYear} ${nowHours}:${nowMinutes}`)
console.log(`${nowDate}/${nowMonth}/${nowYear} ${nowHours}:${nowMinutes}`)



// LEVEL3  EXERCISES

const date1=new Date(),
    fullYear1=date1.getFullYear(),
    month1=date1.getMonth()+1,
    day1=date1.getDate(),
    hour1=date1.getHours(),
    dayOfWeek1=date1.getDay(),
    minute1=date1.getMinutes(),
    second1=date1.getSeconds(),
    milisecond1=date1.getMilliseconds()


const months1=[
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
]
    
const days1=[
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
    'Pazar'
]
let zeroHour=`0${hour1}`,
    zeroMinutes=`0${minute1}`
console.log(zeroMinutes)

let checkHour=hour1<10,
    checkMinutes=minute1<10,
    checkTwoValue= hour1<10 && minute1<10

checkHour 
? console.log(`${day} ${months1[month1]} ${fullYear1}, ${days1[dayOfWeek1]}, 0${hour1}:${minute1}:${second1}`)
: checkMinutes
? console.log(`${day} ${months1[month1]} ${fullYear1}, ${days1[dayOfWeek1]}, 0${hour1}:0${minute1}:${second1}`)
: checkTwoValue
? console.log(`${day} ${months1[month1]} ${fullYear1}, ${days1[dayOfWeek1]}, 0${hour1}:0${minute1}:${second1}`)
: console.log(`${day} ${months1[month1]} ${fullYear1}, ${days1[dayOfWeek1]}, ${hour1}:${minute1}:${second1}`)