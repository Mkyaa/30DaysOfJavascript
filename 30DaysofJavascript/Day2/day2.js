let word='Javascript'

word[0]='Y'

console.log(word) 

let numOne=3,
    numTwo=3

console.log(numOne==numTwo)     // true

let js='Javascript',
    py='Python'

console.log(js==py)             // false    

let lightOn=true,
    lightOff=false

console.log(lightOn==lightOff)  // false

let nums=[1, 2, 3],
    numbers=[1, 2, 3]

console.log(nums==numbers)      // false
console.log(nums[0]==numbers[0]) // true

let userOne={
    name: 'Mert',
    role: 'Developer',
    country: 'Turkey'
}

let userTwo={
    name:'Mert',
    role: 'Developer',
    country: 'Turkey'
}

console.log(userOne==userTwo) // false


// const gravity=9.81              // yer çekimi sabit olduğu için const ile tanımlandı
// let mass=67
// const PI=3.14
// const boilingPoint=100
// const bodyTemp=37

// console.log(gravity, mass,PI,boilingPoint,bodyTemp)


// MATH 

let PI=Math.PI
console.log(PI)

let sayi=4.99

console.log(Math.round(sayi))   // 5
console.log(Math.floor(sayi))   // 4
console.log(Math.ceil(sayi))    // 5
console.log(Math.min(1,5,6,2,-4))   //-4
console.log(Math.max(1,5,6,2,-4))   //6
console.log(Math.random())          // 0 - 0.999999 arasında rastgele bir sayı üretir

let randomNumber=Math.random(),
    randomZeroAndTen=Math.floor(randomNumber*11)

    console.log(randomNumber)
console.log(randomZeroAndTen)

let absoluteNumber=-13,
    squareNumber=100
    powNumber=5

console.log(Math.abs(absoluteNumber))       // mutlak değer 13
console.log(Math.sqrt(squareNumber))        // karekök 10
console.log(Math.pow(powNumber,4))          // üssü 625


let yourName='Can',
    yourAge=30,
    yourCOuntry='Turkey',
    city='Istanbul',
    language='Turkish',
    job='Gold'

console.log('I am '+yourName+' and '+yourAge +' years old. I live in ' +city+'. My job is '+job   )

let fullInfo= `I am ${yourName} and ${yourAge} years old. I live in ${city}. My job is ${job}`
console.log(fullInfo)


let a=11,
    b=10

console.log(`${a} is greater than ${b} : ${a>b}`)

let text = 'Javascript'

console.log(text.length)            // 8
console.log(text.substr(4,6))    // string
console.log(text.substr(2,3))    // vas
console.log(text.substring(5,8)) // cri
  

let title='      30DaysOfJavascript      '
let title2='      30 Days Of Javascript      '
console.log(title.length)

let backTitle = title.trim().split('').reverse().join('')
console.log(backTitle)
console.log(title.includes('30'))
console.log(fullInfo.includes(`${yourAge}`))
console.log(fullInfo.includes(yourName))
console.log(title.trim().split('Javascript').join('Pyhton'))
console.log(title2.trim().replace('Javascript', py))


/*  trim() -----> string ifadenin başlangıcındaki ve sonundaki boşlukları siler. 
    includes -------> sorgulanan harf veya kelimenin veya değişkenin stringte var olup olmadığına bakar ve boolean değer döndürür
    replace -------> tek seferlik değiştirmeye yarar. en sonda yer alanı değiştirir.
    replaceAll -------> hepsini değiştirir
*/


let challenge='30 Days Of Javascript'
let brands='Facebook, Google, Microsoft, Apple, Oracle, Amazon'
let parag='You cannot end a sentence with because because because is a conjunction'


// LEVEL1 EXERCISES

console.log(challenge)
console.log(challenge.length)
console.log(challenge.toLocaleUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0,2))
console.log(challenge.substring(0,2))
console.log(challenge.includes('Script'))
console.log(challenge.includes('script'))
console.log(challenge.split(' '))
console.log(brands.split(', '))
console.log(challenge.replace('Javascript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('Of'))
console.log(challenge.lastIndexOf('Of'))
console.log(parag.indexOf('because'))
console.log(parag.lastIndexOf('because'))
console.log('///')
console.log(parag.search('because'))
console.log(parag.trim())
console.log(challenge.startsWith('30 Days Of Javascript'))
console.log(challenge.endsWith('30 Days Of Javascript'))
console.log(challenge.match(/a/gi))
console.log(challenge.repeat(2))

//LEVEL2 EXERCISES

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)


let stringNum='10',
    intNum=10,
    stringFloat='9.8',
    floatNum=9.8

console.log(stringNum===intNum)
console.log(parseInt(stringNum)===intNum)  
console.log(floatNum===stringFloat)
console.log(parseFloat(stringFloat)===floatNum)
console.log(py.includes('on'))

let zeroAndHundred =Math.random()*101
console.log(Math.floor(zeroAndHundred))

let fiftyAndHundred = Math.random()*51
console.log(Math.floor(fiftyAndHundred))

let zeroAndTwoAndHundred = Math.random()*256
console.log(Math.floor(zeroAndTwoAndHundred))

let string='I hope this course is not full of jargon.'
console.log(string.includes('jargon'))

let escapeChar='1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125'
console.log(escapeChar)

console.log(parag.substr(30,24))  

let sentence='Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(sentence.match(/love/gi))
console.log(sentence.search('love'))

let mixSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanSent=mixSentence.match(/[\s\.^\w]/gi).join('')
console.log(cleanSent)

let arr=cleanSent.match(/[\w+\s]/gi).join('').split(' ')
console.log(arr)

let earnMoney='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.',
    onlyMoney=earnMoney.match(/\d+/gi),
    mounthSalary=Number(onlyMoney[0]),
    annualBonus=Number(onlyMoney[1]),
    mounthOnlineCourse=Number(onlyMoney[2]),
    totalAnnualSalary=(mounthSalary*12) + annualBonus + (mounthOnlineCourse*12)
    
console.log(totalAnnualSalary)