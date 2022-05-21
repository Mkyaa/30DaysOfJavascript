const str = 'I love JavaScript and love'
const pattern=/love/
const pattern2=/love/g
console.log(pattern.test(str))
console.log(str.match(pattern))
console.log(str.match(pattern2))
console.log(str.search(pattern))

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

const matchReplaced= txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)

const txt1 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

const matches= txt.replace(/%/g,'')
console.log(matches)


const pattern3=/[Aa]pple|[Bb]anana/g
const txt3 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches3 = txt3.match(pattern3)

console.log(matches3)


const pattern4 = /\d+/g  // d is a special character which means digits
const txt4 = 'This regular expression example was made in January 12,  2020.'
const matches4 = txt4. match(pattern4)

console.log(matches4)  // ["12", "2020"], this is not what we want


const pattern5= /[a]./g
const txt5='Apple and banana are fruits'
const matches5=txt5.match(pattern5)
console.log(matches5)

const pattern6= /[a].+/g
const matches6=txt5.match(pattern6)
console.log(matches6)


const text= 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const matchesEarn= text.match(/\d+/g)
const [perMonth, annualBonus, perCourseMonth]=matchesEarn
const annualIncome= (+perMonth*12)+ +annualBonus + (+perCourseMonth*12)
console.log(annualIncome)


const isValidVariables = string =>{
    const pattern=/^\d|^_/g
    const pattern2=/[/*-+]/g
    const verificationVariable1 = pattern.test(string)
    const verificationVariable2 = pattern2.test(string)
    if(verificationVariable1 || verificationVariable2){
        return `Değişken adı kullanılamaz.`
    }
    else{
        return `Değişken adı kullanılabilir`
    }
}
console.log(isValidVariables('firstName'))

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(paragraph)

const tenMostFrequentWords = parag => {
    const pattern =/[a-zA-z]+/g,
        matches=parag.match(pattern),
        setParag=new Set(matches),
        arr=[]
    for(const word of setParag) {
        const wordFilter =matches.filter(wrd=> wrd === word)
        arr.push({
            word:word, count :wordFilter.length
        })
    }
    return arr.sort((a,b) => b.count - a.count)
}
console.log(tenMostFrequentWords(paragraph))


let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

const cleanText = parag=>{
    const cleaned=parag.replace(/[%@$#;&,]/g,''),
    textArr=cleaned.match(/[a-z]+/gi),
    setParag=new Set(textArr),
    mostFreqArr=[]
    for(const text of setParag){
        const filteredText=textArr.filter(txt=> txt === text)
        mostFreqArr.push({
            word: text, count: filteredText.length
        })
    }
    return mostFreqArr.sort((a,b)=> b.count - a.count).slice(0,4)
}
console.log(cleanText(sentence))